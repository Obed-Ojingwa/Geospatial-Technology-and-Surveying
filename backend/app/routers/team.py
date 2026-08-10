from fastapi import APIRouter, Depends, HTTPException
from .. import models, database
from typing import List
from datetime import datetime

router = APIRouter()

def get_db():
    return database.supabase

@router.post("/team", response_model=models.TeamMemberResponse)
def create_team_member(member: models.TeamMemberCreate, db = Depends(get_db)):
    try:
        data = member.dict()
        data["created_at"] = datetime.utcnow().isoformat()
        # Insert into supabase table 'team_members'
        response = db.table("team_members").insert(data).execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        # Assuming response.data[0] contains inserted record
        inserted = response.data[0]
        return inserted
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/team", response_model=list[models.TeamMemberResponse])
def get_team_members(db = Depends(get_db)):
    try:
        response = db.table("team_members").select("*").execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/team/{member_id}", response_model=models.TeamMemberResponse)
def get_team_member(member_id: int, db = Depends(get_db)):
    try:
        response = db.table("team_members").select("*").eq("id", member_id).execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        if not response.data:
            raise HTTPException(status_code=404, detail="Team member not found")
        return response.data[0]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/team/{member_id}", response_model=models.TeamMemberResponse)
def update_team_member(member_id: int, member: models.TeamMemberCreate, db = Depends(get_db)):
    try:
        data = member.dict()
        data["updated_at"] = datetime.utcnow().isoformat()
        response = db.table("team_members").update(data).eq("id", member_id).execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        if not response.data:
            raise HTTPException(status_code=404, detail="Team member not found")
        return response.data[0]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/team/{member_id}")
def delete_team_member(member_id: int, db = Depends(get_db)):
    try:
        response = db.table("team_members").delete().eq("id", member_id).execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        return {"message": "Team member deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
