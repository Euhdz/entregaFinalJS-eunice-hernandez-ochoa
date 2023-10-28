function enviarEmail() {
  const recipient = "euhdz8a@gmail.com";

  const subject = "Información sobre un paquete";

  const body = `La persona ${
    document.getElementById("nombreContacto").value
  } con el correo ${
    document.getElementById("emailContacto").value
  } de la empresa ${
    document.getElementById("empresaContacto").value
  } con teléfono ${
    document.getElementById("telefonoContacto").value
  } requiete información ${document.getElementById("detalleContacto").value}`;

  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
}
