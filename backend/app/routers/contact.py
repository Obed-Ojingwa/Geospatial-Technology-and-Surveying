from fastapi import APIRouter, Depends, HTTPException
from .. import models, database

router = APIRouter()

def get_db():
    return database.supabase

@router.post("/contact", response_model=models.ContactResponse)
def submit_contact(contact: models.ContactCreate, db = Depends(get_db)):
    try:
        data = contact.dict()
        # Insert into supabase table 'contacts'
        response = db.table("contacts").insert(data).execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        # Assuming response.data[0] contains inserted record
        inserted = response.data[0]
        return inserted
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/contacts", response_model=list[models.ContactResponse])
def get_contacts(db = Depends(get_db)):
    try:
        response = db.table("contacts").select("*").execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))