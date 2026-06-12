# Vectora Search

An AI-powered semantic search engine for e-commerce applications, built with **FastAPI**, **React**, **OpenAI Embeddings**, and **pgvector**.

Vectora Search enables users to discover products based on meaning and intent rather than exact keyword matches, delivering a more intelligent and natural search experience.

## Features

* 🔍 Semantic product search using vector embeddings
* 🧠 AI-powered query understanding
* 📦 Product management (CRUD)
* 🏷️ Category management (CRUD)
* ⚡ Fast vector similarity search with pgvector
* 🚀 Modern REST API built with FastAPI
* 🎨 Responsive frontend built with React and Vite

---

## Demo Architecture

```text
User Query
    │
    ▼
OpenAI Embeddings
    │
    ▼
Vector Representation
    │
    ▼
pgvector Similarity Search
    │
    ▼
Relevant Products
```

---

## Why Semantic Search?

Traditional search relies on exact keyword matching:

> "wireless headphones"

may not return products described as:

> "Bluetooth sports earbuds"

Semantic search understands the meaning behind the query, allowing users to discover relevant products even when the wording differs.

---

## Tech Stack

### Backend

* FastAPI
* SQLAlchemy
* Alembic
* PostgreSQL
* pgvector
* OpenAI Embeddings
* Pydantic

### Frontend

* React
* Vite
* React Router
* TanStack Query
* Tailwind CSS
* shadcn/ui

### Development Tools

* Poetry
* ESLint
* Git

---

## Project Structure

```text
vectora-search/
│
├── backend/
│   ├── app/
│   ├── migrations/
│   ├── pyproject.toml
│   └── README.md
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── README.md
│
└── README.md
```

### Backend

Responsible for:

* Product and category management
* Embedding generation
* Vector similarity search
* API endpoints
* Database management

### Frontend

Responsible for:

* User interface
* Product management
* Category management
* Search experience
* API integration

---

## Prerequisites

Before running the project, ensure you have:

* Python 3.11+
* Node.js 18+
* PostgreSQL
* pgvector extension installed
* OpenAI API key

---

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/vectora-search.git
cd vectora-search
```

---

### 2. Configure the Backend

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
poetry install
```

Create a `.env` file:

```env
DATABASE_URL=postgresql+psycopg2://user:password@localhost:5432/vectora_search
OPENAI_API_KEY=your_openai_api_key
ORIGINS=http://localhost:5173
```

Run database migrations:

```bash
poetry run poe db-upgrade
```

Start the API:

```bash
poetry run poe dev
```

The backend will be available at:

```text
http://localhost:8000
```

---

### 3. Configure the Frontend

Open a new terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

---

## API Endpoints

### Health Check

```http
GET /api/health/db
```

Verify database connectivity.

### Products

```http
GET    /api/products
POST   /api/products
PUT    /api/products/{id}
DELETE /api/products/{id}
```

### Categories

```http
GET    /api/categories
POST   /api/categories
PUT    /api/categories/{id}
DELETE /api/categories/{id}
```

### Semantic Search

```http
POST /api/products/search
```

Example request:

```json
{
  "query": "comfortable running shoes"
}
```

---

## Vector Search Infrastructure

Vectora Search uses **OpenAI Embeddings** to transform product descriptions and user queries into high-dimensional vectors.

These vectors are stored in PostgreSQL using **pgvector**, enabling efficient similarity searches.

### Search Flow

1. Product information is converted into embeddings.
2. Embeddings are stored in PostgreSQL.
3. User queries are converted into embeddings.
4. Similarity search is performed using pgvector.
5. The most relevant products are returned.

This architecture provides:

* Better search relevance
* Context-aware results
* Natural language understanding
* Scalable vector retrieval

---

## Learning Outcomes

This project explores practical applications of:

* Semantic Search
* Vector Databases
* Embeddings
* Retrieval-Augmented Generation (RAG) Concepts
* FastAPI
* PostgreSQL + pgvector
* Modern React Development
* AI-Powered Product Discovery

---

## Future Improvements

* User authentication and authorization
* Hybrid search (keyword + semantic)
* Search analytics
* Product recommendations
* Multi-language support
* Reranking models
* Full RAG pipeline integration

---

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes

```bash
git commit -m "feat: add amazing feature"
```

4. Push your branch

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request

---

## License

Distributed under the MIT License.

See the `LICENSE` file for more information.
