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

// PENDIENTE: todo este bloque es material de memoriales de PERSONAS.
// Reemplazar por video y fotos de mascotas subidos a un R2 propio.
export const media = {
  heroVideo:
    'https://pub-aa35b927bb064c1e8c7e97ebdbbec0c1.r2.dev/WhatsApp%20Video%202026-07-29%20at%2020.56.49.mp4',
  // Imagen fija que se ve mientras carga el video. Vacio = sin poster.
  heroPoster: '',
  splitPrimary: 'https://pub-aa35b927bb064c1e8c7e97ebdbbec0c1.r2.dev/3a.jpeg',
  splitSecondary: 'https://pub-aa35b927bb064c1e8c7e97ebdbbec0c1.r2.dev/1a.jpeg',
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
