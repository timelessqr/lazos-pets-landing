// Configuracion central de marca, contacto y multimedia.
//
// IMPORTANTE: todo lo marcado PENDIENTE todavia apunta a los datos de
// Lazos de Vida (memoriales de personas). Estan puestos para que la landing
// funcione y se vea completa, pero HAY QUE REEMPLAZARLOS antes de publicar.
// Cambiando este archivo se actualiza toda la landing.

export const brand = {
  name: 'Lazos de Vida Pets',
  shortName: 'Lazos Pets',
  description:
    'Lazos de Vida Pets: honra la memoria de tu mascota con un codigo QR que guarda sus fotos, sus videos y su historia.',
};

export const contact = {
  // PENDIENTE: numero de WhatsApp propio del proyecto de mascotas.
  whatsapp: 'https://wa.me/56933783343',
  // PENDIENTE: correo propio del proyecto de mascotas.
  email: 'Lazosdevidaqr@gmail.com',
};

// PENDIENTE: cuentas propias del proyecto de mascotas.
export const social = {
  facebook: 'https://www.facebook.com/qr_lazosdevida',
  instagram: 'https://www.instagram.com/qr_lazosdevida',
  tiktok: 'https://www.tiktok.com/@qr_lazosdevida',
};

// Material propio de mascotas.
const r2 = 'https://pub-aa35b927bb064c1e8c7e97ebdbbec0c1.r2.dev';

export const media = {
  heroVideo: `${r2}/0808.mp4`,
  // Imagen fija que se ve mientras carga el video. Vacio = sin poster.
  // PENDIENTE: subir el frame exportado y apuntarlo aca.
  heroPoster: '',
  // Rincon del recuerdo (placa + foto + vela).
  splitPrimary: `${r2}/rincon.jpeg`,
  // Escaneo de la placa con el telefono.
  splitSecondary: `${r2}/escaneo.jpeg`,
};

// Logos de medios de pago: son marca-neutrales, sirven igual para este proyecto.
const paymentBase = 'https://pub-aa35b927bb064c1e8c7e97ebdbbec0c1.r2.dev';
export const paymentLogos = {
  applePay: `${paymentBase}/apple-pay-payment-mark-seeklogo.png`,
  visa: `${paymentBase}/visa-seeklogo.png`,
  mastercard: `${paymentBase}/mastercard-modern-design-.svg`,
  paypal: `${paymentBase}/paypal-3.svg`,
  amex: `${paymentBase}/american-express-seeklogo.png`,
  mercadoPago: `${paymentBase}/mercado-pago-seeklogo.png`,
};
