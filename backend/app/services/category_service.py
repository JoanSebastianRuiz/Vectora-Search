from sqlalchemy import select
from sqlalchemy.orm import Session, joinedload
from app.models.category import Category
from app.schemas.category.create import CategoryCreate

class CategoryService:
    def __init__(self, db: Session):
        self.db = db
        
    def get_all(self) -> list:
        stmt = (
            select(Category)
            .options(joinedload(Category.products))
        )
        
        return self.db.execute(stmt).unique().scalars().all()
    
    def get_by_id(self, category_id: int) -> Category | None:
        stmt = (
            select(Category)
            .where(Category.id == category_id)
            .options(joinedload(Category.products))
        )
        
        return self.db.execute(stmt).unique().scalar_one_or_none()
    
    def create(self, data: CategoryCreate):
        category = Category(**data.model_dump())
        
        self.db.add(category)
        self.db.commit()
        self.db.refresh(category)
        
        return category
    
    def update(
        self,
        category_id: int,
        data: CategoryCreate
    ) -> Category | None:
        category = self.get_by_id(category_id)
        
        if not category:
            return None
        
        for key, value in data.model_dump().items():
            setattr(category, key, value)
        
        self.db.commit()
        self.db.refresh(category)
        
        return category
    
    def delete(self, category_id: int) -> bool:
        category = self.get_by_id(category_id)
        
        if not category:
            return False
        
        self.db.delete(category)
        self.db.commit()
        
        return True