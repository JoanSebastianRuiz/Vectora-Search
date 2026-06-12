# Vectora Search - Backend

A high-performance REST API that powers **Vectora Search**, providing product and category management, AI-powered embedding generation, and semantic search capabilities through vector similarity.

## Overview

The Vectora Search backend is responsible for managing product data, generating embeddings, and delivering intelligent search results based on semantic similarity rather than traditional keyword matching.

### Key Features

* 🚀 RESTful API built with FastAPI
* 🧠 AI-powered embedding generation
* 🔍 Semantic search using vector similarity
* 📦 Product management (CRUD)
* 🏷️ Category management (CRUD)
* 🗄️ PostgreSQL database integration
* 🔄 Database migrations with Alembic
* ⚡ Asynchronous architecture for high performance

---

## Architecture

The backend follows a layered architecture designed for scalability and maintainability.

```text
app/
├── api/            # API routes and endpoints
├── core/           # Configuration and application settings
├── models/         # Database models
├── schemas/        # Request and response schemas
├── services/       # Business logic and search services
├── repositories/   # Data access layer
└── main.py         # Application entry point
```

---

## Tech Stack

### Backend Framework

* **FastAPI** – Modern, fast web framework for APIs
* **Pydantic** – Data validation and serialization
* **SQLAlchemy** – ORM and database abstraction

### Database

* **PostgreSQL** – Relational database
* **Alembic** – Database migrations

### AI & Search

* **OpenAI Embeddings** (or compatible provider)
* **Vector Similarity Search**
* **Semantic Product Discovery**

### Tooling

* **Poetry** – Dependency management
* **Uvicorn** – ASGI server

---

## Prerequisites

Before running the project, ensure you have:

* Python 3.11+
* Poetry
* PostgreSQL
* OpenAI API Key (or another embedding provider)

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/vectora-search.git
cd vectora-search/backend
```

### Install Dependencies

```bash
poetry install
```

### Configure Environment Variables

Create a `.env` file in the project root.

Example:

```env
DATABASE_URL=postgresql+asyncpg://user:password@localhost:5432/vectora
OPENAI_API_KEY=your_api_key
APP_ENV=development
```

### Run Database Migrations

```bash
poetry run alembic upgrade head
```

### Start the Development Server

```bash
poetry run uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at:

```text
http://localhost:8000
```

---

## Environment Variables

| Variable         | Description                                             |
| ---------------- | ------------------------------------------------------- |
| `DATABASE_URL`   | Database connection string                              |
| `OPENAI_API_KEY` | API key used for embedding generation                   |
| `APP_ENV`        | Application environment (`development` or `production`) |

Additional settings can be found in:

```text
app/core/config.py
```

---

## Database Migrations

The project uses Alembic for database versioning.

### Create a New Migration

```bash
poetry run alembic revision --autogenerate -m "describe_changes"
```

### Apply Pending Migrations

```bash
poetry run alembic upgrade head
```

### Roll Back a Migration

```bash
poetry run alembic downgrade -1
```

---

## API Endpoints

### Health Check

```http
GET /health
```

Used to verify that the API is running correctly.

### Categories

```http
GET    /categories
POST   /categories
PUT    /categories/{id}
DELETE /categories/{id}
```

Manage product categories.

### Products

```http
GET    /products
POST   /products
PUT    /products/{id}
DELETE /products/{id}
```

Manage products and their associated metadata.

### Search

```http
POST /search
```

Perform semantic product searches using vector embeddings.

---

## Interactive API Documentation

FastAPI automatically generates API documentation.

### Swagger UI

```text
http://localhost:8000/docs
```

### ReDoc

```text
http://localhost:8000/redoc
```

These interfaces allow you to explore and test endpoints directly from the browser.

---

## Semantic Search Workflow

Vectora Search uses embeddings to understand the meaning behind user queries.

### Search Process

1. User submits a natural language query.
2. The query is converted into a vector embedding.
3. Product embeddings are compared using similarity metrics.
4. The most semantically relevant products are returned.

This approach enables searches such as:

> "wireless headphones for working out"

to find relevant products even when those exact keywords are not present.

---

## Development

### Run the Application

```bash
poetry run uvicorn app.main:app --reload
```

### Format and Lint

Depending on your project configuration:

```bash
poetry run ruff check .
poetry run ruff format .
```

or

```bash
poetry run black .
```

### Run Tests

```bash
poetry run pytest
```

---

## Deployment

The application can be deployed using:

* Docker
* Railway
* Render
* Fly.io
* AWS
* Google Cloud
* Azure

A typical production deployment includes:

* FastAPI
* PostgreSQL
* Reverse Proxy (Nginx)
* Managed embedding provider

---

## Project Structure

```text
app/
├── api/
├── core/
├── models/
├── repositories/
├── schemas/
├── services/
├── main.py

migrations/
├── versions/
```

### Important Directories

* `api/` — API routes and endpoint definitions
* `services/` — Business logic and semantic search implementation
* `repositories/` — Database access layer
* `models/` — SQLAlchemy models
* `schemas/` — Pydantic request and response models
* `core/` — Application configuration and settings

---

## Contributing

Contributions are welcome.

1. Create a feature branch:

```bash
git checkout -b feature/amazing-feature
```

2. Commit your changes:

```bash
git commit -m "feat: add amazing feature"
```

3. Push your branch:

```bash
git push origin feature/amazing-feature
```

4. Open a Pull Request.

---

## License

This project is licensed under the MIT License.

See the `LICENSE` file for more details.

---

## Support

If you encounter any issues, have questions, or would like to suggest improvements, please open an issue in the repository.
