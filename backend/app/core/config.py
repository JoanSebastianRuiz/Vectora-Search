from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    database_url: str
    openai_api_key: str
    origins: str
    python_version: str

    class Config:
        env_file = ".env"


settings = Settings()
