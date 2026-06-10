from pydantic import BaseModel
from app.schemas.category.base import CategoryBase

class ProductResponse(BaseModel):
    id: int
    name: str
    description: str
    price: float
    category: CategoryBase

    model_config = {
        "from_attributes": True
    }