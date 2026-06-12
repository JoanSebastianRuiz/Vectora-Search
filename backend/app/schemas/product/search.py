from pydantic import BaseModel
from app.schemas.product.response import ProductResponse


class ProductSearch(BaseModel):
    product: ProductResponse
    score: float
