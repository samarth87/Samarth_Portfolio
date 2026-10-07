from fastapi import APIRouter, HTTPException

from schemas.contact import ContactRequest, ContactResponse
from services.contact_service import handle_contact

router = APIRouter(prefix="/api", tags=["contact"])


@router.post("/contact", response_model=ContactResponse)
def submit_contact(payload: ContactRequest) -> ContactResponse:
    try:
        handle_contact(payload)
    except OSError:
        raise HTTPException(status_code=500, detail="Could not save your message. Please try again.")
    return ContactResponse(
        success=True,
        message="Thanks, your message was received. It has been saved on the server; no email was sent.",
    )
