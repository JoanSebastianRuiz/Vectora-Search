from pydantic import BaseModel

class ProductBase(BaseModel):
    id: int
    name: str
    description: str
    price: float

    model_config = {
        "from_attributes": True
    }