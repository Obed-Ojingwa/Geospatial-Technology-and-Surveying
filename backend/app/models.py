from pydantic import BaseModel, EmailStr

class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str | None = None
    message: str | None = None

class ContactResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    phone: str | None = None
    message: str | None = None
    created_at: str

    class Config:
        orm_mode = True