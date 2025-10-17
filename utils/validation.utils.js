export function validateRequiredFields(data, requiredFields) {
  const missing = requiredFields.filter((f) => {
    const v = data[f];
    return (
      v === undefined ||
      v === null ||
      (typeof v === "string" && v.trim() === "")
    );
  });
  if (missing.length > 0) {
    throw new Error(`Faltan campos requeridos: ${missing.join(", ")}`);
  }
  return true;
}

export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function isValidPassword(password, minLength = 6) {
  return typeof password === "string" && password.length >= minLength;
}

export function handleError(error, res) {
  console.error(error);
  const msg = error && error.message ? error.message : "Error desconocido";

  const lower = msg.toLowerCase();
  let status = 400;
  if (/(no encontrado|not found|404)/.test(lower)) status = 404;
  else if (/(error del servidor|server error|500)/.test(lower)) status = 500;
  else status = 400;

  res.status(status).json({ success: false, message: msg });
}
