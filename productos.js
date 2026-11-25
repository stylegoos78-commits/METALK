/* =====================================================
   TU TIENDA DE HERRAMIENTAS - TUS DATOS
   Este es el único archivo que vas a editar.
   El archivo index.html no se toca nunca.
   ===================================================== */

// Nombre de tu empresa (aparece arriba, en el bloque 1)
const EMPRESA = "NOMBRE DE TU EMPRESA";

// Frase corta debajo del nombre (puedes dejarla vacía: "")
const FRASE = "Herramientas para tu obra y tu taller";

// Tu número de WhatsApp, con código de país y sin + ni espacios.
// Perú = 51. Ejemplo: 51987654321
// IMPORTANTE: cámbialo por el tuyo, este es solo de ejemplo.
const WHATSAPP = "51999999999";

// Símbolo de moneda
const MONEDA = "S/";


/* =====================================================
   BLOQUE 3: CÓMO FUNCIONA NUESTRO ACUERDO
   Cambia los textos por tus condiciones reales
   (pago, entrega, garantía, etc.).
   Para agregar un paso, copia una línea { ... }, y pégala debajo.
   ===================================================== */
const PASOS = [
  { titulo: "Elige tus productos",  texto: "Mira el catálogo y agrega al carrito lo que necesites." },
  { titulo: "Envía tu pedido",      texto: "Con el botón verde, tu pedido nos llega por WhatsApp." },
  { titulo: "Confirmamos contigo",  texto: "Te confirmamos stock, precio final y tiempo de entrega." },
  { titulo: "Pago",                 texto: "Coordinamos la forma de pago contigo (por ejemplo: transferencia, Yape o efectivo)." },
  { titulo: "Entrega",              texto: "Coordinamos el envío o el recojo. Revisa tu producto al recibirlo." }
];

// Nota final del bloque 3 (opcional, puedes dejarla vacía: "")
const NOTA_ACUERDO = "Los precios y el stock pueden cambiar. Todo pedido se confirma por WhatsApp.";


/* =====================================================
   BLOQUE 2: TUS PRODUCTOS

   CÓMO AGREGAR UNO NUEVO:
   1) Sube la foto a la carpeta "img" de GitHub.
   2) Copia un producto completo (desde { hasta },)
   3) Pégalo debajo del último y cambia los datos.

   - nombre:  debe ser DISTINTO en cada producto
   - precio:  solo el número, sin S/ ni comillas
   - imagen:  ruta de la foto. Debe ser IDÉNTICA al nombre del
              archivo en la carpeta img (minúsculas, sin espacios)
   - especificaciones: la lista de características.
              Cada una entre comillas y separada por coma.

   CUIDADO: cada producto termina con coma (,)
   Los productos de abajo son SOLO EJEMPLOS: cámbialos por los tuyos.
   ===================================================== */
const PRODUCTOS = [

  {
    nombre: "TALADRO PERCUTOR 650 W",
    precio: 189,
    imagen: "img/taladro.jpg",
    especificaciones: [
      "Potencia: 650 W",
      "Mandril: 13 mm",
      "Velocidad variable",
      "Incluye maletín"
    ]
  },

  {
    nombre: "AMOLADORA ANGULAR 4 1/2\"",
    precio: 159,
    imagen: "img/amoladora.jpg",
    especificaciones: [
      "Potencia: 850 W",
      "Disco: 115 mm",
      "Interruptor de seguridad"
    ]
  },

  {
    nombre: "JUEGO DE DESTORNILLADORES 32 PIEZAS",
    precio: 79,
    imagen: "img/destornilladores.jpg",
    especificaciones: [
      "32 piezas",
      "Puntas intercambiables",
      "Mango antideslizante",
      "Estuche incluido"
    ]
  },

  {
    nombre: "FLEXÓMETRO 5 M",
    precio: 25,
    imagen: "img/flexometro.jpg",
    especificaciones: [
      "Longitud: 5 metros",
      "Cinta con freno",
      "Carcasa resistente"
    ]
  },

];
