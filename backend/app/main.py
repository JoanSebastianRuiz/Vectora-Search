from fastapi import FastAPI, APIRouter
from app.api.health import router as health_router
from app.api.products import router as products_router
from app.api.categories import router as categories_router

app = FastAPI()

api_router = APIRouter(prefix="/api")

api_router.include_router(health_router)
api_router.include_router(products_router)
api_router.include_router(categories_router)

app.include_router(api_router)
