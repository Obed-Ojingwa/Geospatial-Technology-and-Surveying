from fastapi import APIRouter, Depends, HTTPException
from .. import models, database
from typing import List
from datetime import datetime

router = APIRouter()

def get_db():
    return database.supabase

@router.get("/services", response_model=list[models.ServiceResponse])
def get_services(db = Depends(get_db)):
    try:
        response = db.table("services").select("*").execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/services", response_model=models.ServiceResponse)
def create_service(service: models.ServiceCreate, db = Depends(get_db)):
    try:
        data = service.dict()
        data["created_at"] = datetime.utcnow().isoformat()
        response = db.table("services").insert(data).execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        inserted = response.data[0]
        return inserted
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/services/{service_id}", response_model=models.ServiceResponse)
def get_service(service_id: int, db = Depends(get_db)):
    try:
        response = db.table("services").select("*").eq("id", service_id).execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        if not response.data:
            raise HTTPException(status_code=404, detail="Service not found")
        return response.data[0]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/services/{service_id}", response_model=models.ServiceResponse)
def update_service(service_id: int, service: models.ServiceCreate, db = Depends(get_db)):
    try:
        data = service.dict()
        data["updated_at"] = datetime.utcnow().isoformat()
        response = db.table("services").update(data).eq("id", service_id).execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        if not response.data:
            raise HTTPException(status_code=404, detail="Service not found")
        return response.data[0]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/services/{service_id}")
def delete_service(service_id: int, db = Depends(get_db)):
    try:
        response = db.table("services").delete().eq("id", service_id).execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        return {"message": "Service deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
