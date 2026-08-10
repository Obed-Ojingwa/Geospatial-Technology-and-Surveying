from fastapi import APIRouter, Depends, HTTPException
from .. import models, database
from typing import List

router = APIRouter()

def get_db():
    return database.supabase

@router.post("/projects", response_model=models.ProjectResponse)
def create_project(project: models.ProjectCreate, db = Depends(get_db)):
    try:
        data = project.dict()
        # Convert datetime to string for storage if needed
        data["created_at"] = datetime.utcnow().isoformat()
        # Insert into supabase table 'projects'
        response = db.table("projects").insert(data).execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        # Assuming response.data[0] contains inserted record
        inserted = response.data[0]
        return inserted
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/projects", response_model=list[models.ProjectResponse])
def get_projects(db = Depends(get_db)):
    try:
        response = db.table("projects").select("*").execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/projects/{project_id}", response_model=models.ProjectResponse)
def get_project(project_id: int, db = Depends(get_db)):
    try:
        response = db.table("projects").select("*").eq("id", project_id).execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        if not response.data:
            raise HTTPException(status_code=404, detail="Project not found")
        return response.data[0]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/projects/{project_id}", response_model=models.ProjectResponse)
def update_project(project_id: int, project: models.ProjectCreate, db = Depends(get_db)):
    try:
        data = project.dict()
        data["updated_at"] = datetime.utcnow().isoformat()
        response = db.table("projects").update(data).eq("id", project_id).execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        if not response.data:
            raise HTTPException(status_code=404, detail="Project not found")
        return response.data[0]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/projects/{project_id}")
def delete_project(project_id: int, db = Depends(get_db)):
    try:
        response = db.table("projects").delete().eq("id", project_id).execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        return {"message": "Project deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
