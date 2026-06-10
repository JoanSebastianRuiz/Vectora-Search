# Correr server

- uvicorn app.main:app --reload

# Crear migración automática

alembic revision --autogenerate -m "mensaje"

# Aplicar migraciones

alembic upgrade head

# Ver historial

alembic history

# Ver versión actual

alembic current

# Revertir una migración

alembic downgrade -1
