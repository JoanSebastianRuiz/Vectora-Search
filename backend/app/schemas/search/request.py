from pydantic import BaseModel, Field


class SearchRequest(BaseModel):
    query: str
    limit: int = 9
    threshold: float | None = Field(
        default=None,
        ge=0,
        le=1,
    )
