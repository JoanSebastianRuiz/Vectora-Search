from pydantic import BaseModel
from app.schemas.product.base import ProductBase

class CategoryResponse(BaseModel):
    id: int
    name: str
    products: list[ProductBase] = []

    model_config = {
        "from_attributes": True
    }