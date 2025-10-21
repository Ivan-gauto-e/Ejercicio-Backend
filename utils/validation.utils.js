export const requiredFields = ["name", "email", "password"];

export function validateRequiredFields(data, requiredFields) {
  for (let i = 0; i < requiredFields.length; i++) {
    const campoRequerido = requiredFields[i];
    const value = data[campoRequerido];
    if (!value || value.trim().length === 0) {
      console.log("se requiere el campo:", campoRequerido);
      return false;
    }
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
