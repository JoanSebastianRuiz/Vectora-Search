from fastapi import APIRouter, Depends, HTTPException
from app.db.session import get_db
from sqlalchemy.orm import Session
from app.services.category_service import CategoryService
from app.schemas.category.response import CategoryResponse
from app.schemas.category.create import CategoryCreate

router = APIRouter(prefix="/categories", tags=["Categories"])


@router.get("/", response_model=list[CategoryResponse])
def get_categories(db: Session = Depends(get_db)):
    service = CategoryService(db)

    return service.get_all()


@router.get("/{category_id}", response_model=CategoryResponse)
def get_category(category_id: int, db: Session = Depends(get_db)):
    service = CategoryService(db)

    category = service.get_by_id(category_id)

    if not category:
        raise HTTPException(status_code=404, detail="Category not found")

    return category


@router.post("/", response_model=CategoryResponse)
def create_category(data: CategoryCreate, db: Session = Depends(get_db)):
    service = CategoryService(db)

    return service.create(data)


@router.put("/{category_id}", response_model=CategoryResponse)
def update_category(
    category_id: int, data: CategoryCreate, db: Session = Depends(get_db)
):
    service = CategoryService(db)

    category = service.update(category_id, data)

    if not category:
        raise HTTPException(status_code=404, detail="Category not found")

    return category


@router.delete("/{category_id}")
def delete_category(category_id: int, db: Session = Depends(get_db)):
    service = CategoryService(db)

    success = service.delete(category_id)

    if not success:
        raise HTTPException(status_code=404, detail="Category not found")

    return {"detail": "Category deleted successfully"}
