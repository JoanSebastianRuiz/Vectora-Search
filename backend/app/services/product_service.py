from sqlalchemy import select
from sqlalchemy.orm import Session, joinedload

from app.models.product import Product
from app.models.category import Category
from app.schemas.product.create import ProductCreate
from app.services.embedding_service import EmbeddingService


class ProductService:

    def __init__(self, db: Session):
        self.db = db

    def _build_embedding_text(
        self,
        name: str,
        description: str | None,
        category_name: str | None,
    ) -> str:
        parts = [
            f"Product Name: {name}",
        ]

        if description:
            parts.append(f"Description: {description}")

        if category_name:
            parts.append(f"Category: {category_name}")

        return "\n".join(parts)

    def get_all(self) -> list[Product]:
        stmt = select(Product).options(joinedload(Product.category))

        return self.db.execute(stmt).scalars().all()

    def get_by_id(self, product_id: int) -> Product | None:
        stmt = select(Product).where(Product.id == product_id)

        return self.db.execute(stmt).scalar_one_or_none()

    def create(self, data: ProductCreate) -> Product:
        category = self.db.get(Category, data.category_id)

        embedding_text = self._build_embedding_text(
            name=data.name,
            description=data.description,
            category_name=category.name if category else None,
        )

        embedding = EmbeddingService.generate(embedding_text)

        product = Product(**data.model_dump(), embedding=embedding)

        self.db.add(product)
        self.db.commit()
        self.db.refresh(product)

        return product

    def update(self, product_id: int, data: ProductCreate) -> Product | None:
        product = self.get_by_id(product_id)

        if not product:
            return None

        for key, value in data.model_dump().items():
            setattr(product, key, value)

        category = self.db.get(Category, product.category_id)

        embedding_text = self._build_embedding_text(
            name=product.name,
            description=product.description,
            category_name=category.name if category else None,
        )

        product.embedding = EmbeddingService.generate(embedding_text)

        self.db.commit()
        self.db.refresh(product)
        return product

    def delete(self, product_id: int) -> bool:
        product = self.get_by_id(product_id)

        if not product:
            return False

        self.db.delete(product)
        self.db.commit()

        return True

    def semantic_search(
        self,
        query: str,
        limit: int = 10,
        threshold: float = 0.4,
    ) -> list[Product]:

        query_embedding = EmbeddingService.generate(query)

        distance = Product.embedding.cosine_distance(query_embedding)

        stmt = (
            select(Product)
            .options(joinedload(Product.category))
            .where(distance <= threshold)
            .order_by(distance)
            .limit(limit)
        )

        return self.db.execute(stmt).scalars().all()
