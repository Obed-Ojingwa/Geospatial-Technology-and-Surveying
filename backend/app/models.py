from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    message: Optional[str] = None

class ContactResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    phone: Optional[str] = None
    message: Optional[str] = None
    created_at: str

    class Config:
        orm_mode = True

# Service Models
class ServiceBase(BaseModel):
    title: str
    icon: str
    description: str

class ServiceCreate(ServiceBase):
    pass

class ServiceResponse(ServiceBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True

# Portfolio/Project Models
class ProjectBase(BaseModel):
    title: str
    category: str
    image_url: str
    description: str
    technologies: List[str]
    client: str
    duration: str
    location: str
    highlights: List[str]

class ProjectCreate(ProjectBase):
    pass

class ProjectResponse(ProjectBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True

# Team/Staff Models
class TeamMemberBase(BaseModel):
    name: str
    title: str
    bio: str
    image_url: str
    specialties: List[str]
    email: EmailStr
    phone: Optional[str] = None

class TeamMemberCreate(TeamMemberBase):
    pass

class TeamMemberResponse(TeamMemberBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True

# Blog/News Models
class BlogBase(BaseModel):
    title: str
    slug: str
    excerpt: str
    image_url: str
    content: str
    author: str
    date: str
    category: str
    tags: List[str]

class BlogCreate(BlogBase):
    pass

class BlogResponse(BlogBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True

# Testimonial Models
class TestimonialBase(BaseModel):
    name: str
    title: str
    company: str
    image_url: str
    rating: int
    content: str
    date: str
    location: str

class TestimonialCreate(TestimonialBase):
    pass

class TestimonialResponse(TestimonialBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True
