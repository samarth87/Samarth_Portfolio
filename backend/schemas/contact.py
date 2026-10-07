from pydantic import BaseModel, EmailStr, Field, field_validator


class ContactRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=3, max_length=150)
    message: str = Field(..., min_length=10, max_length=3000)

    @field_validator("name", "subject", "message")
    @classmethod
    def strip_and_require_text(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("must not be blank")
        return v


class ContactResponse(BaseModel):
    success: bool
    message: str


class HealthResponse(BaseModel):
    status: str
    service: str
