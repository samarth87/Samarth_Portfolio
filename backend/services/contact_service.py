"""Contact message handling.

No email service is configured, so messages are validated and appended to a
local JSON Lines file (backend/data/messages.jsonl). Nothing is emailed.
To send real email later, add the integration in `handle_contact` only.
"""
import json
import logging
from datetime import datetime, timezone
from pathlib import Path

from schemas.contact import ContactRequest

logger = logging.getLogger("portfolio.contact")
DATA_FILE = Path(__file__).resolve().parent.parent / "data" / "messages.jsonl"


def handle_contact(payload: ContactRequest) -> None:
    record = {
        "received_at": datetime.now(timezone.utc).isoformat(),
        **payload.model_dump(),
    }
    DATA_FILE.parent.mkdir(parents=True, exist_ok=True)
    with DATA_FILE.open("a", encoding="utf-8") as f:
        f.write(json.dumps(record, ensure_ascii=False) + "\n")
    logger.info("Contact message stored from %s", payload.email)
