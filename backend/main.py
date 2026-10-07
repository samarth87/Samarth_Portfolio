import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes import contact, health

ALLOWED_ORIGINS = os.getenv(
    "CORS_ORIGINS", "http://localhost:5173,http://127.0.0.1:5173"
).split(",")

app = FastAPI(title="Samarth Sehdev Portfolio API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[o.strip() for o in ALLOWED_ORIGINS],
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)

app.include_router(health.router)
app.include_router(contact.router)


@app.get("/", include_in_schema=False)
def root():
    return {"service": "portfolio-api", "docs": "/docs"}
