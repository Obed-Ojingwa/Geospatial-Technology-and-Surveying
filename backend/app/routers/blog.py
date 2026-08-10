from fastapi import APIRouter, Depends, HTTPException
from .. import models, database
from typing import List
from datetime import datetime

router = APIRouter()

def get_db():
    return database.supabase

@router.get("/blog", response_model=list[models.BlogResponse])
def get_blog_posts(db = Depends(get_db)):
    try:
        response = db.table("blog_posts").select("*").execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/blog", response_model=models.BlogResponse)
def create_blog_post(blog: models.BlogCreate, db = Depends(get_db)):
    try:
        data = blog.dict()
        data["created_at"] = datetime.utcnow().isoformat()
        response = db.table("blog_posts").insert(data).execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        inserted = response.data[0]
        return inserted
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/blog/{blog_id}", response_model=models.BlogResponse)
def get_blog_post(blog_id: int, db = Depends(get_db)):
    try:
        response = db.table("blog_posts").select("*").eq("id", blog_id).execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        if not response.data:
            raise HTTPException(status_code=404, detail="Blog post not found")
        return response.data[0]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/blog/{blog_id}", response_model=models.BlogResponse)
def update_blog_post(blog_id: int, blog: models.BlogCreate, db = Depends(get_db)):
    try:
        data = blog.dict()
        data["updated_at"] = datetime.utcnow().isoformat()
        response = db.table("blog_posts").update(data).eq("id", blog_id).execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        if not response.data:
            raise HTTPException(status_code=404, detail="Blog post not found")
        return response.data[0]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/blog/{blog_id}")
def delete_blog_post(blog_id: int, db = Depends(get_db)):
    try:
        response = db.table("blog_posts").delete().eq("id", blog_id).execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        return {"message": "Blog post deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Get blog posts by slug (for SEO-friendly URLs)
@router.get("/blog/slug/{slug}", response_model=models.BlogResponse)
def get_blog_post_by_slug(slug: str, db = Depends(get_db)):
    try:
        response = db.table("blog_posts").select("*").eq("slug", slug).execute()
        if response.error:
            raise HTTPException(status_code=400, detail=str(response.error))
        if not response.data:
            raise HTTPException(status_code=404, detail="Blog post not found")
        return response.data[0]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
