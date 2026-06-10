from fastapi import APIRouter, HTTPException
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError

from app.db.database import engine

router = APIRouter(
    prefix="/health",
    tags=["Health"]
)


@router.get("/db")
def db_health():
    try:
        with engine.connect() as conn:
            result = conn.execute(text("SELECT 1"))
            return {
                "status": "ok",
                "result": result.scalar()
            }

    except SQLAlchemyError as e:
        return {
            "status": "error",
            "detail": str(e)
        }