from app.core.openai import client

EMBEDDING_MODEL = "text-embedding-3-small"


class EmbeddingService:
    @staticmethod
    def generate(text: str) -> list[float]:
        response = client.embeddings.create(model=EMBEDDING_MODEL, input=text)

        return response.data[0].embedding
