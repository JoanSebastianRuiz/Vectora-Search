from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware

from app.api.health import router as health_router
from app.api.products import router as products_router
from app.api.categories import router as categories_router
from app.core.config import settings

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.origins.split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_router = APIRouter(prefix="/api")

api_router.include_router(health_router)
api_router.include_router(products_router)
api_router.include_router(categories_router)

app.include_router(api_router)
