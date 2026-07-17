from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from . import models, database
from .routers import contact

app = FastAPI(title="Terrabyte Global Ltd API", version="0.1.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, set to your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(contact.router, prefix="/api")

@app.get("/")
def root():
    return {"message": "Welcome to Terrabyte Global Ltd API"}