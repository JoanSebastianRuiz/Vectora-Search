from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.product.response import ProductResponse
from app.services.product_service import ProductService
from app.schemas.product.create import ProductCreate
from app.schemas.search.request import SearchRequest
from app.schemas.product.search import ProductSearch

router = APIRouter(prefix="/products", tags=["Products"])


@router.get("/", response_model=list[ProductResponse])
def get_products(db: Session = Depends(get_db)):
    service = ProductService(db)

    return service.get_all()


@router.get("/{product_id}", response_model=ProductResponse)
def get_product(product_id: int, db: Session = Depends(get_db)):
    service = ProductService(db)

    product = service.get_by_id(product_id)

    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    return product


@router.post("/", response_model=ProductResponse)
def create_product(data: ProductCreate, db: Session = Depends(get_db)):
    service = ProductService(db)

    return service.create(data)


@router.put("/{product_id}", response_model=ProductResponse)
def update_product(product_id: int, data: ProductCreate, db: Session = Depends(get_db)):
    service = ProductService(db)

    product = service.update(product_id, data)

    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    return product


@router.delete("/{product_id}")
def delete_product(product_id: int, db: Session = Depends(get_db)):
    service = ProductService(db)

    success = service.delete(product_id)

    if not success:
        raise HTTPException(status_code=404, detail="Product not found")

    return {"detail": "Product deleted successfully"}


@router.post("/search", response_model=list[ProductSearch])
def search_products(data: SearchRequest, db: Session = Depends(get_db)):
    service = ProductService(db)

    return service.semantic_search(data.query, data.limit)
