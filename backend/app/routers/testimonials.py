from fastapi import APIRouter, Depends, HTTPException
from .. import models, database
from typing import List
from datetime import datetime

router = APIRouter()

def get_db():
    return database.supabase

@router.post("/testimonials", response_model=models.TestimonialResponse)
def create_testimonial(testimonial: models.TestimonialCreate, db = Depends(get_db)):
    try:
        data = testimonial.dict()
        data["created_at"] = datetime.utcnow().isoformat()
        # Insert into supabase table 'testimonials'
        response = db.table("testimonials").insert(data).execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        # Assuming response.data[0] contains inserted record
        inserted = response.data[0]
        return inserted
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/testimonials", response_model=list[models.TestimonialResponse])
def get_testimonials(db = Depends(get_db)):
    try:
        response = db.table("testimonials").select("*").execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/testimonials/{testimonial_id}", response_model=models.TestimonialResponse)
def get_testimonial(testimonial_id: int, db = Depends(get_db)):
    try:
        response = db.table("testimonials").select("*").eq("id", testimonial_id).execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        if not response.data:
            raise HTTPException(status_code=404, detail="Testimonial not found")
        return response.data[0]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/testimonials/{testimonial_id}", response_model=models.TestimonialResponse)
def update_testimonial(testimonial_id: int, testimonial: models.TestimonialCreate, db = Depends(get_db)):
    try:
        data = testimonial.dict()
        data["updated_at"] = datetime.utcnow().isoformat()
        response = db.table("testimonials").update(data).eq("id", testimonial_id).execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        if not response.data:
            raise HTTPException(status_code=404, detail="Testimonial not found")
        return response.data[0]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/testimonials/{testimonial_id}")
def delete_testimonial(testimonial_id: int, db = Depends(get_db)):
    try:
        response = db.table("testimonials").delete().eq("id", testimonial_id).execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        return {"message": "Testimonial deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
