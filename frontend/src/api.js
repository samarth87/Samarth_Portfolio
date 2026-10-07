const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

export async function sendContactMessage(payload) {
  let res;
  try {
    res = await fetch(`${API_BASE}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error("Could not reach the server. Make sure the backend is running on port 8000.");
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    if (res.status === 422 && Array.isArray(data.detail)) {
      const first = data.detail[0];
      const field = first?.loc?.[first.loc.length - 1] ?? "form";
      throw new Error(`Please check the ${field} field: ${first?.msg ?? "invalid value"}.`);
    }
    throw new Error(data.detail || "Something went wrong. Please try again.");
  }
  return data;
}
