document.addEventListener("DOMContentLoaded", () => {
  const normalizeName = (name) => name.trim().toLowerCase();
  const platoImages = {
    "arroz a lo muki": "Images/Arroz a lo muki.png",
    "buen provecho": "Images/Buen provecho.png",
    "causita libertador": "Images/Causita libertador.png",
    "causita noble y elegante": "Images/Causita noble y elegante.png",
    "causita peru": "Images/Causita Peru.png",
    "ceviche a lo muki": "Images/Ceviche a lo muki.png",
    "ceviche mixto especial": "Images/Ceviche mixto especial.png",
    "chaufa a lo muki": "Images/Chaufa a lo muki.png",
    "doncella a lo muki": "Images/Doncella a lo muki.png",
    "el comandante": "Images/El comandante.png",
    "leche a lo muki": "Images/Leche a lo muki.png",
    "medallones a lo muki": "Images/Medallones a lo muki.png",
    "pollo a lo muki": "Images/Pollo a lo muki.png",
    "saltado de lomo a lo muki": "Images/Saltado de lomo a lo muki.png",
    "saltado de rigatoni": "Images/Saltado de rigatoni.png",
    "tesoro vraino": "Images/Tesoro vraino.png"
  };

  const platosData = [
    {
      name: "RECOMENDACIONES DE LA CASA",
      open: true,
      items: [
        { name: "Tesoro Vraino", price: "S/ 25.00", desc: "Caldo de sabores exoticos preparado con tres variedades de cilantro, dos tipos de ajies, pescado de rio, productos del mar y yucas doradas." },
        { name: "Leche a lo Muki", price: "S/ 25.00", desc: "Pescado en zumo de limon, salsa picante de aji limo y fumet casero, coronado con chalaquita de pota y acompanado con tiras de chicharron de pota." },
        { name: "Ceviche a lo Muki", price: "S/ 45.00", desc: "Ceviche afrodisiaco con pulpo y pescado de rio Doncella, marinado con limon y aji charapita, acompanado con yucas y camotes." },
        { name: "Ceviche Mixto Especial", price: "S/ 48.00", desc: "Ceviche afrodisiaco con pulpo y pescado de rio Doncella, marinado con limon y aji charapita, acompanado con yucas y camotes." },
        { name: "Arroz a lo Muki", price: "S/ 38.00", desc: "Seleccion de mariscos flameados con pisco, risotados con dos tipos de queso y salsa madre a base de verduras, acompanado con porcion de ceviche y shot de leche de tigre." },
        { name: "Chaufa a lo Muki", price: "S/ 38.00", desc: "Chaufa con cecina ahumada, chorizo ahumado, champinones organicos, mix de verduras, holantao, brocoli, frejol chino, pimentones, aceite de ajonjoli, salsa de soya, maduritos, tortilla de huevo, chicharron de langostinos, suflado de arroz y salsa agridulce casera." },
        { name: "Jalea a lo Muki", price: "S/ 38.00", desc: "Paco frito con chicharron de mariscos: camaron, langostino, calamar, pulpo y choros, acompanado de yucas doradas y salsa criolla." },
        { name: "Alom", price: "S/ 40.00", desc: "Paco frito sin piel, crocante, acompanado con tocto de paco, salsa de sacha culantro, salsa de cocona, maduritos fritos, yucas doradas y ensalada criolla." },
        { name: "Misterio Vraino", price: "S/ 40.00", desc: "Paco, pina y maduritos al grill banados con chimichurri tropical, acompanado con salsa de aji de cocona, porcion de arroz y ensalada criolla." },
        { name: "Doncella a lo Muki", price: "S/ 40.00", desc: "Doncella a la plancha banada en salsa de la casa con langostinos y hongos organicos, acompanada con yucas doradas, mix de ensaladas frescas organicas y porcion de arroz." },
        { name: "Rey", price: "S/ 38.00", desc: "Lenguado frito con mix de mariscos flameados con pisco, banados en salsa de la casa con toque picante opcional, acompanado con arroz y yucas doradas." },
        { name: "Causita Peru", price: "S/ 38.00", desc: "Dos masas de causa con aji amarillo y rocoto desflemado, rellenas con langostinos y palta, acompanadas con chicharron de pescado, shot de leche de tigre y salsa de aji escabeche con hierbas andinas." },
        { name: "Causita Noble y Elegante", price: "S/ 40.00", desc: "Masas clasica y morada rellenas con langostinos desmechados, banadas en salsa de aceituna, acompanadas con chicharron de pota y shot de leche de tigre." },
        { name: "Causita Libertador", price: "S/ 35.00", desc: "Causa inspirada en la expedicion libertadora del Peru, con tres masas rellenas con filete de atun, banadas con salsas caseras, chimichurri tropical, salsa de aji de cocona, porcion de arroz y ensalada criolla." },
        { name: "Causa Acevichada", price: "S/ 33.00", desc: "Causa de langostino acompanada con ceviche clasico." },
        { name: "Buen Provecho", price: "S/ 42.00", desc: "Medallon de lomo fino aromatizado con sal de Maras, banado con roux de salsa de osobuco reducido por 3 horas, acompanado de maduritos, verduras organicas y salsa de frutos rojos." },
        { name: "Medallones a lo Muki", price: "S/ 40.00", desc: "Lomo fino con chimichurri andino servido sobre vegetales organicos al grill, esparragos, zucchini y choclito baby, acompanado de papas nativas fritas, ensalada organica y salsa andina." },
        { name: "El Calentadito", price: "S/ 39.00", desc: "Tortilla de frijoles aromatizada con curcuma, lomo fino al grill, maduritos, huevo frito, dos salsas andinas y ensalada organica." },
        { name: "El Comandante", price: "S/ 38.00", desc: "Bistec de lomo fino de textura suave, acompanado con maduritos, huevo frito y ensalada organica." },
        { name: "Saltado de Lomo a lo Muki", price: "S/ 38.00", desc: "Trozos de carne flameados con pisco, acompanados con papas nativas, arroz y huevo frito." },
        { name: "Pollo a lo Muki", price: "S/ 33.00", desc: "Pechuga de pollo deshuesada con vegetales a la parrilla, aromatizada con chimichurri andino, acompanada con papas nativas, esparragos, cebollines, zucchini y ensalada organica." },
        { name: "Alma del Viejo Continente", price: "S/ 45.00", desc: "Plato con 500 g de carne de osobuco, acompanado con fetuccini en salsa de la casa." },
        { name: "Fettuccine a lo Muki / Fetuccini Moyuc", price: "S/ 30.00", desc: "Fettuccini con langostinos y champinones flameados, banados en salsa de la casa con leche y mantequilla." },
        { name: "Saltado de Rigatoni", price: "S/ 35.00", desc: "Dados de lomo fino saltados al wok con sabor criollo." }
      ]
    },
    {
      name: "PIQUEOS",
      items: [
        { name: "Tequenos", price: "S/ 25.00", desc: "15 unidades de tequenos rellenos de queso, acompanados con salsa andina." },
        { name: "Alitas Broster - Piqueo", price: "S/ 40.00", desc: "10 unidades de alitas broster acompanadas con papas doradas." },
        { name: "Alitas a la BBQ", price: "S/ 20.00", desc: "Alitas doradas banadas en salsa BBQ, acompanadas con papas nativas, ensalada y salsas de la casa." },
        { name: "Alitas a la BBQ Picante", price: "S/ 20.00", desc: "Alitas doradas banadas en salsa BBQ picante, acompanadas con papas nativas, ensaladas y cremas caseras." },
        { name: "Alitas Broster", price: "S/ 20.00", desc: "Alitas broster acompanadas con papas nativas, ensaladas y cremas caseras." }
      ]
    },
    {
      name: "SOPAS, CALDOS Y FONDOS CALIENTES",
      items: [
        { name: "Sopa de Pollo con Vegetales", price: "S/ 18.00", desc: "Sopa de pollo con vegetales frescos." },
        { name: "Caldo Arrecho con Cangrejo Popeye / Peludo", price: "S/ 30.00", desc: "Caldo arrecho preparado con cangrejo popeye o peludo." },
        { name: "Caldo Arrecho con Cangrejo Moro", price: "S/ 38.00", desc: "Caldo arrecho preparado con cangrejo moro." }
      ]
    },
    {
      name: "CEVICHES Y LECHES DE TIGRE",
      items: [
        { name: "Leche de Tigre", price: "S/ 15.00", desc: "Preparacion marina citrica a base de jugo de ceviche, pescado, ajies y condimentos de la casa." },
        { name: "Leche de Pantera", price: "S/ 25.00", desc: "Preparacion marina intensa, variante de leche de tigre con insumos marinos y toque de la casa." },
        { name: "Ceviche Clasico", price: "S/ 28.00", desc: "Ceviche tradicional con pescado, limon, aji, cebolla y acompanamientos." },
        { name: "Ceviche Mixto", price: "S/ 30.00", desc: "Ceviche con pescado y mariscos, marinado en limon, aji y condimentos de la casa." },
        { name: "Ceviche de Langostinos", price: "S/ 35.00", desc: "Ceviche preparado con langostinos, limon, aji y acompanamientos." },
        { name: "Ceviche de Conchas Negras", price: "S/ 45.00", desc: "Ceviche preparado con conchas negras, limon, aji y condimentos marinos." },
        { name: "Ceviche - Carta Noche", price: "S/ 28.00", desc: "Ceviche de la casa servido con acompanamientos clasicos." }
      ]
    },
    {
      name: "CHICHARRONES, JALEAS Y FRITURAS MARINAS",
      items: [
        { name: "Chicharron de Pescado", price: "S/ 25.00", desc: "Trozos de pescado crocante, acompanados con guarnicion y salsas de la casa." },
        { name: "Chicharron Mixto", price: "S/ 38.00", desc: "Chicharron preparado con pescado y mariscos variados." },
        { name: "Chicharron de Pota", price: "S/ 28.00", desc: "Pota crocante acompanada con guarnicion y salsas." },
        { name: "Chicharron de Doncella", price: "S/ 35.00", desc: "Chicharron de pescado doncella de rio, acompanado con guarnicion." },
        { name: "Jalea Mixta", price: "S/ 30.00", desc: "Fritura mixta de pescados y mariscos, acompanada con salsa criolla y guarnicion." }
      ]
    },
    {
      name: "ARROCES Y CHAUFAS",
      items: [
        { name: "Arroz con Mariscos", price: "S/ 25.00", desc: "Arroz preparado con mariscos, verduras y sazon marina de la casa." },
        { name: "Arroz con Langostinos", price: "S/ 32.00", desc: "Arroz preparado con langostinos y aderezos de la casa." },
        { name: "Chaufa de Mariscos", price: "S/ 25.00", desc: "Arroz chaufa con mariscos, verduras y sazon oriental." },
        { name: "Chaufa de Pescado", price: "S/ 25.00", desc: "Arroz chaufa con pescado, verduras y sazon oriental." },
        { name: "Chaufa de Langostino", price: "S/ 35.00", desc: "Arroz chaufa con langostinos, verduras y sazon oriental." },
        { name: "Chaufa de Verduras", price: "S/ 20.00", desc: "Chaufa con champinones organicos, brocoli, holantao, frejol chino, col china, huevo e ingredientes orientales." }
      ]
    },
    {
      name: "PESCADOS FRITOS",
      items: [
        { name: "Paco Frito", price: "S/ 20.00 / S/ 25.00 / S/ 30.00", desc: "Paco frito crocante, acompanado con guarniciones y salsas de la casa." },
        { name: "Doncella Frita", price: "S/ 38.00", desc: "Pescado doncella frito, acompanado con guarnicion y salsa." },
        { name: "Bagre Frito", price: "S/ 25.00 / S/ 30.00", desc: "Bagre frito acompanado con guarnicion y salsa." },
        { name: "Chupadora Frita", price: "S/ 25.00 / S/ 30.00", desc: "Pescado chupadora frito, acompanado con guarnicion y salsa." }
      ]
    },
    {
      name: "CHILCANOS",
      items: [
        { name: "Chilcano de Bagre", price: "S/ 15.00 / S/ 20.00", desc: "Chilcano caliente preparado con bagre, hierbas, limon y condimentos de la casa." },
        { name: "Chilcano de Carachama", price: "S/ 20.00 / S/ 25.00 / S/ 28.00", desc: "Chilcano caliente preparado con carachama, hierbas, limon y condimentos de la casa." },
        { name: "Chilcano de Paco", price: "S/ 20.00 / S/ 25.00 / S/ 30.00", desc: "Chilcano caliente preparado con paco, hierbas, limon y condimentos de la casa." },
        { name: "Chilcano de Chupadora", price: "S/ 25.00 / S/ 30.00", desc: "Chilcano caliente preparado con chupadora, hierbas, limon y condimentos de la casa." }
      ]
    },
    {
      name: "SUDADOS",
      items: [
        { name: "Sudado de Bagre", price: "S/ 25.00 / S/ 30.00", desc: "Sudado preparado con bagre, tomate, cebolla, ajies, hierbas y caldo de pescado." },
        { name: "Sudado de Carachama", price: "S/ 25.00 / S/ 30.00", desc: "Sudado preparado con carachama, tomate, cebolla, ajies, hierbas y caldo de pescado." },
        { name: "Sudado de Paco", price: "S/ 25.00 / S/ 30.00 / S/ 35.00", desc: "Sudado preparado con paco, tomate, cebolla, ajies, hierbas y caldo de pescado." },
        { name: "Sudado de Chupadora", price: "S/ 25.00 / S/ 30.00", desc: "Sudado preparado con chupadora, tomate, cebolla, ajies, hierbas y caldo de pescado." }
      ]
    },
    {
      name: "PARIHUELAS",
      items: [
        { name: "Parihuela Mixta de Bagre", price: "S/ 32.00 / S/ 35.00", desc: "Parihuela marina con bagre, mariscos, caldo concentrado y sazon de la casa." },
        { name: "Parihuela Mixta de Doncella", price: "S/ 40.00 / S/ 45.00", desc: "Parihuela marina con doncella, mariscos, caldo concentrado y sazon de la casa." },
        { name: "Parihuela Mixta de Tramboyo", price: "S/ 35.00 / S/ 40.00", desc: "Parihuela marina con tramboyo, mariscos, caldo concentrado y sazon de la casa." }
      ]
    },
    {
      name: "PLATOS CON CECINA Y CHORIZO AHUMADO",
      items: [
        { name: "Tacacho con Cecina y Chorizo Ahumado", price: "S/ 30.00", desc: "Tacacho acompanado con cecina ahumada y chorizo ahumado." },
        { name: "Chaufa de Cecina y Chorizo Ahumado", price: "S/ 33.00", desc: "Arroz chaufa con cecina ahumada, chorizo ahumado y sazon oriental." }
      ]
    },
    {
      name: "POLLOS Y CARNES",
      items: [
        { name: "Pollo a la Plancha", price: "S/ 28.00", desc: "Pechuga de pollo deshuesada al grill, acompanada con arroz, papas fritas, ensalada fresca con tomate cherry y vinagreta casera." },
        { name: "Batallador", price: "S/ 20.00", desc: "Rigatoni con salsa de carne y hortalizas estofadas, ligado con tomate y acompanado con papas fritas." },
        { name: "La Improvisada", price: "S/ 20.00", desc: "Dos capas de arroz rellenas con salsa de carne, huevo y maduritos fritos." }
      ]
    },
    {
      name: "PASTAS Y FUSIONES",
      items: [
        { name: "Fusion Divina", price: "S/ 35.00", desc: "Fetuccini en salsa de aji escabeche desflemado con queso andino, acompanado con lomo fino salteado y salsa de frutos rojos." },
        { name: "Peruanizado", price: "S/ 35.00", desc: "Fetuccini con salsa verde de albahaca y espinaca, toques de pecanas, lomo fino y huevo frito." }
      ]
    },
    {
      name: "DUOS MARINOS",
      items: [
        { name: "Duo Clasico 1", price: "S/ 30.00", desc: "Chicharron de pescado con ceviche clasico." },
        { name: "Duo Clasico 2", price: "S/ 30.00", desc: "Arroz con mariscos con ceviche clasico." },
        { name: "Duo Oriental", price: "S/ 30.00", desc: "Chaufa de mariscos con ceviche clasico." },
        { name: "Duo Seco 1", price: "S/ 30.00", desc: "Chicharron de pescado con arroz con mariscos." },
        { name: "Duo Seco 2", price: "S/ 30.00", desc: "Chicharron de pescado con chaufa de mariscos." },
        { name: "Duo Carretillero", price: "S/ 30.00", desc: "Chicharron de pota con ceviche clasico." },
        { name: "Duo Fusion", price: "S/ 35.00", desc: "Chaufa mixta de cecina y chorizo con ceviche clasico." },
        { name: "Duo Rio y Mar", price: "S/ 40.00", desc: "Chicharron de doncella con ceviche clasico." },
        { name: "Duo Sabor Selvatico", price: "S/ 45.00", desc: "Chicharron de doncella con ceviche de doncella." }
      ]
    },
    {
      name: "TRIOS MARINOS",
      items: [
        { name: "Trio Clasico", price: "S/ 35.00", desc: "Arroz con mariscos, ceviche clasico y chicharron de pescado." },
        { name: "Trio Sabor Oriental", price: "S/ 35.00", desc: "Chaufa de mariscos, ceviche clasico y chicharron de pescado." },
        { name: "Trio Carretillero", price: "S/ 35.00", desc: "Arroz con mariscos, ceviche clasico y chicharron de pota." },
        { name: "Trio Fusion 1 Selva Costa", price: "S/ 38.00", desc: "Chaufa selvatica con cecina y chorizo, ceviche clasico y chicharron de pescado." },
        { name: "Trio Fusion 2 Selva Costa", price: "S/ 45.00", desc: "Chaufa selvatica con cecina y chorizo, ceviche clasico y chicharron de doncella." },
        { name: "Trio Selvatico", price: "S/ 55.00", desc: "Chaufa selvatica con cecina y chorizo, ceviche de doncella y chicharron de doncella." }
      ]
    }
  ];

  const bebidasData = [
    {
      name: "COCTELES DE LA CASA",
      open: true,
      items: [
        { name: "Universo", price: "S/ 18.00", desc: "Coctel refrescante con vodka Absolut, gin Bombay y mezcla de la casa." },
        { name: "Atardecer Vraino", price: "S/ 18.00", desc: "Coctel refrescante inspirado en los colores de la naturaleza y la puesta del sol, preparado con ron Flor de Cana 4 anos, crema de menta y jugo de naranja natural." },
        { name: "La Pishcota", price: "S/ 18.00", desc: "Coctel con ron blanco Flor de Cana, macerado de frutos rojos y zumo natural de camu camu." },
        { name: "El Secreto del Muki", price: "S/ 25.00", desc: "Coctel con tequila rubio 1800, licor de cafe, Cointreau y zumo de citricos." },
        { name: "La Nina de Moyuc", price: "S/ 15.00", desc: "Coctel dulce con pisco Biondi, fresa, leche evaporada y espuma tipo froth." },
        { name: "Siempre Dama", price: "S/ 15.00", desc: "Coctel cremoso con crema de whisky, Kahlua, crema de durazno, leche evaporada y petalos de rosa." },
        { name: "Calientito de Pisco al Estilo Muki", price: "S/ 15.00", desc: "Bebida caliente con pisco Biondi, jugo de naranja natural, miel pura y hierba luisa." },
        { name: "La Diosa Mayahuel", price: "S/ 20.00", desc: "Coctel en honor a la diosa de la fertilidad, preparado con tequila rubia, tequila silver, Cointreau, jugo de citricos y sal de Maras." },
        { name: "Sonqollay", price: "S/ 18.00", desc: "Bebida a base de vino blanco, hierbas aromaticas, esencia de vainilla, vodka y crema de granadina." }
      ]
    },
    {
      name: "TRAGOS EXOTICOS",
      items: [
        { name: "Shot RC", price: "S/ 10.00", desc: "Shot afrodisiaco y vigorizante, preparado con macerado de raices y plantas medicinales de arboles estimulantes." },
        { name: "Shot Siete Raices", price: "S/ 10.00", desc: "Shot de propiedades medicinales preparado con siete raices: chuchuhuasi, huacapurana, tahuari, murare coja, fierro caspi y cumaceba." },
        { name: "Chuchuhuasi", price: "S/ 10.00", desc: "Elixir natural afrodisiaco y vigorizante, usado tradicionalmente para problemas pulmonares y articulaciones." }
      ]
    },
    {
      name: "COCTELES CLASICOS CON PISCO",
      items: [
        { name: "Pisco Sour Clasico", price: "S/ 15.00", desc: "Coctel clasico peruano preparado con pisco, limon, jarabe de goma, clara de huevo y amargo de angostura." },
        { name: "Sour de Camu Camu", price: "S/ 16.00", desc: "Variante de sour con pisco y camu camu." },
        { name: "Pisco Sour Variante", price: "S/ 16.00", desc: "Pisco sour con frutas de temporada como maracuya, granada, fresa o arandano." },
        { name: "Algarrobina", price: "S/ 14.00", desc: "Coctel cremoso a base de pisco y algarrobina." },
        { name: "Chilcano Clasico", price: "S/ 14.00", desc: "Coctel con pisco, ginger ale, limon y hielo." },
        { name: "Machu Picchu", price: "S/ 14.00", desc: "Coctel peruano por capas con pisco, jugos frutales y licores de color." }
      ]
    },
    {
      name: "COCTELES CON TEQUILA",
      items: [
        { name: "Margarita con Jose Cuervo", price: "S/ 15.00", desc: "Margarita clasica preparada con tequila Jose Cuervo, limon y licor de naranja." },
        { name: "Margarita con 1800", price: "S/ 20.00", desc: "Margarita premium preparada con tequila 1800, limon y licor de naranja." },
        { name: "Shot Tequila Jose Cuervo", price: "S/ 12.00", desc: "Shot de tequila Jose Cuervo." },
        { name: "Shot Tequila 1800", price: "S/ 20.00", desc: "Shot de tequila 1800." }
      ]
    },
    {
      name: "COCTELES CON WHISKY",
      items: [
        { name: "Orgasmo", price: "S/ 15.00", desc: "Coctel cremoso preparado con licor y base de whisky o crema de whisky." },
        { name: "Whisky en las Rocas Red Label", price: "S/ 15.00", desc: "Whisky Red Label servido con hielo." },
        { name: "Whisky Black Label 12 anos", price: "S/ 20.00", desc: "Whisky Black Label de 12 anos servido en las rocas o puro." },
        { name: "Whisky Chivas 12 anos", price: "S/ 22.00", desc: "Whisky Chivas Regal de 12 anos servido en las rocas o puro." }
      ]
    },
    {
      name: "COCTELES CON RON",
      items: [
        { name: "Mojito Clasico", price: "S/ 15.00", desc: "Coctel con ron, hierbabuena, limon, azucar, soda y hielo." },
        { name: "Mojito Variante", price: "S/ 16.00", desc: "Mojito con frutas de temporada como maracuya, granada, fresa o arandano." },
        { name: "Pina Colada", price: "S/ 15.00", desc: "Coctel tropical con ron, pina y crema de coco." },
        { name: "Daiquiri de Mango", price: "S/ 15.00", desc: "Coctel frozen con ron, mango, limon y azucar." },
        { name: "Cuba Libre Habana Anejo", price: "S/ 13.00", desc: "Coctel con ron Habana Anejo, gaseosa cola, limon y hielo." }
      ]
    },
    {
      name: "COCTELES CON VODKA",
      items: [
        { name: "Laguna Azul con Skyy", price: "S/ 15.00", desc: "Coctel refrescante con vodka Skyy, curacao azul, limon y soda." },
        { name: "Destornillador con Skyy", price: "S/ 15.00", desc: "Coctel con vodka Skyy y jugo de naranja." }
      ]
    },
    {
      name: "TRAGOS EN JARRA",
      items: [
        { name: "Jarra Calientito Clasico - 1 litro", price: "S/ 40.00", desc: "Bebida caliente clasica servida en jarra de 1 litro." },
        { name: "Jarra de Chilcano Clasico - 1 litro", price: "S/ 40.00", desc: "Chilcano clasico preparado en jarra de 1 litro." },
        { name: "Jarra de Pisco Sour - 1 litro", price: "S/ 50.00", desc: "Pisco sour clasico preparado en jarra de 1 litro." },
        { name: "Jarra de Cuba Libre - 1 litro", price: "S/ 45.00", desc: "Cuba libre preparado en jarra de 1 litro." }
      ]
    },
    {
      name: "VINOS BOTELLA",
      items: [
        { name: "Vino Santiago Queirolo", price: "S/ 40.00", desc: "Vino embotellado Santiago Queirolo." },
        { name: "Vino Tabernero", price: "S/ 50.00", desc: "Vino embotellado Tabernero." },
        { name: "Vino Tacama de la Vina", price: "S/ 60.00", desc: "Vino embotellado Tacama de la Vina." },
        { name: "Vino de Amor Tacama", price: "S/ 70.00", desc: "Vino embotellado Tacama, linea Vino de Amor." },
        { name: "Vino Finca Las Moras - Seco", price: "S/ 85.00", desc: "Vino seco Finca Las Moras." },
        { name: "Vino Barsol - Dulce", price: "S/ 130.00", desc: "Vino dulce Barsol." }
      ]
    },
    {
      name: "ESPUMANTES",
      items: [
        { name: "Primadonna", price: "S/ 60.00", desc: "Espumante Primadonna." },
        { name: "Riccadonna", price: "S/ 130.00", desc: "Espumante Riccadonna." }
      ]
    },
    {
      name: "BEBIDAS SIN ALCOHOL",
      items: [
        { name: "Vaso de Limonada Gasificada de Fresa", price: "S/ 10.00", desc: "Limonada gasificada sabor fresa." },
        { name: "Vaso de Limonada Gasificada de Maracuya", price: "S/ 8.00", desc: "Limonada gasificada sabor maracuya." },
        { name: "Vaso de Limonada Gasificada de Airampo", price: "S/ 8.00", desc: "Limonada gasificada sabor airampo." },
        { name: "Vaso de Limonada de Fresa sin Gas", price: "S/ 8.00", desc: "Limonada de fresa sin gas." }
      ]
    },
    {
      name: "JARRAS SIN ALCOHOL",
      items: [
        { name: "Jarra Morada - 1 litro", price: "S/ 15.00", desc: "Bebida morada servida en jarra de 1 litro." },
        { name: "Jarra de Camu Camu - 1 litro", price: "S/ 16.00", desc: "Refresco de camu camu servido en jarra de 1 litro." },
        { name: "Jarra de Cocona - 1 litro", price: "S/ 12.00", desc: "Refresco de cocona servido en jarra de 1 litro." },
        { name: "Jarra de Limonada Frozen - 1 litro", price: "S/ 18.00", desc: "Limonada frozen servida en jarra de 1 litro." }
      ]
    },
    {
      name: "BEBIDAS CALIENTES - MATES DE AUTOR",
      items: [
        { name: "Dulces Suenos", price: "S/ 8.00", desc: "Infusion de hierbas y frutas deshidratadas; combinacion pensada para reducir ansiedad, estres, flatulencia y favorecer el descanso." },
        { name: "Libertad", price: "S/ 8.00", desc: "Te antiestres con hinojo, canela y cascara de citricos." },
        { name: "Noble y Elegante", price: "S/ 8.00", desc: "Infusion con flor de hibiscus y moras, con antioxidantes y aporte energetico." }
      ]
    },
    {
      name: "MATES CLASICOS",
      items: [
        { name: "Toronjil", price: "S/ 6.00", desc: "Infusion clasica de toronjil." },
        { name: "Muna", price: "S/ 5.00", desc: "Infusion clasica de muna." },
        { name: "Cedron", price: "S/ 6.00", desc: "Infusion clasica de cedron." },
        { name: "Coca", price: "S/ 4.00", desc: "Infusion clasica de hoja de coca." },
        { name: "Hierba Luisa", price: "S/ 4.00", desc: "Infusion clasica de hierba luisa." }
      ]
    },
    {
      name: "LECHE, CAFE Y FRAPPES",
      items: [
        { name: "Leche Caliente", price: "S/ 6.00", desc: "Leche caliente servida en taza." },
        { name: "Cafe Prensa Francesa", price: "S/ 6.00", desc: "Cafe preparado en prensa francesa." },
        { name: "Cafe Americano", price: "S/ 5.00", desc: "Cafe americano caliente." },
        { name: "Cafe Espresso", price: "S/ 6.00", desc: "Cafe espresso concentrado." },
        { name: "Frappe de Arandano", price: "S/ 8.00", desc: "Bebida fria tipo frappe sabor arandano." },
        { name: "Frappe de Mango", price: "S/ 8.00", desc: "Bebida fria tipo frappe sabor mango." },
        { name: "Frappe de Fresa", price: "S/ 8.00", desc: "Bebida fria tipo frappe sabor fresa." }
      ]
    },
    {
      name: "CERVEZA ARTESANAL - CHOP",
      items: [
        { name: "Chop Pilsener", price: "S/ 11.00", desc: "Cerveza artesanal Pilsener, 10 IBU, 5% vol." },
        { name: "Chop Coca", price: "S/ 11.00", desc: "Cerveza artesanal sabor coca, 10 IBU, 5% vol." },
        { name: "Chop Radler Limon", price: "S/ 12.00", desc: "Cerveza artesanal Radler sabor limon, 7.5 IBU, 3.8% vol." },
        { name: "Chop Cranberry Arandano", price: "S/ 12.00", desc: "Cerveza artesanal sabor arandano, 7.5 IBU, 3.8% vol." },
        { name: "Chop Vraina Naranja", price: "S/ 12.00", desc: "Cerveza artesanal sabor naranja, 7.5 IBU, 3.8% vol." }
      ]
    },
    {
      name: "CERVEZA ARTESANAL - YARDA DE 1.5 LITROS",
      items: [
        { name: "Yarda Pilsener - 1.5 litros", price: "S/ 48.00", desc: "Cerveza artesanal Pilsener, 10 IBU, 5% vol." },
        { name: "Yarda Coca - 1.5 litros", price: "S/ 48.00", desc: "Cerveza artesanal sabor coca, 10 IBU, 5% vol." },
        { name: "Yarda Radler Limon - 1.5 litros", price: "S/ 50.00", desc: "Cerveza artesanal Radler sabor limon, 7.5 IBU, 3.8% vol." },
        { name: "Yarda Cranberry Arandano - 1.5 litros", price: "S/ 50.00", desc: "Cerveza artesanal sabor arandano, 7.5 IBU, 3.8% vol." }
      ]
    },
    {
      name: "CERVEZA ARTESANAL - YARDA DE 3 LITROS",
      items: [
        { name: "Yarda Pilsener - 3 litros", price: "S/ 93.00", desc: "Cerveza artesanal Pilsener, 10 IBU, 5% vol." },
        { name: "Yarda Coca - 3 litros", price: "S/ 93.00", desc: "Cerveza artesanal sabor coca, 10 IBU, 5% vol." },
        { name: "Yarda Radler Limon - 3 litros", price: "S/ 98.00", desc: "Cerveza artesanal Radler sabor limon, 7.5 IBU, 3.8% vol." },
        { name: "Yarda Cranberry Arandano - 3 litros", price: "S/ 98.00", desc: "Cerveza artesanal sabor arandano, 7.5 IBU, 3.8% vol." }
      ]
    }
  ];

  const groupMenuData = (data, featuredName, classicName) => [
    {
      ...data[0],
      name: featuredName
    },
    {
      name: classicName,
      items: data.slice(1).flatMap((category) => category.items)
    }
  ];

  const platosGroupedData = groupMenuData(
    platosData,
    "PLATOS RECOMENDADOS POR LA CASA",
    "PLATOS CLASICOS"
  );
  const bebidasGroupedData = groupMenuData(
    bebidasData,
    "BEBIDAS RECOMENDADAS POR LA CASA",
    "BEBIDAS CLASICAS"
  );

  const menuModal = document.createElement("div");
  menuModal.className = "menu-modal";
  menuModal.setAttribute("aria-hidden", "true");
  menuModal.innerHTML = `
    <div class="menu-modal__backdrop" data-close-modal></div>
    <section class="menu-modal__panel" role="dialog" aria-modal="true" aria-labelledby="menu-modal-title">
      <button class="menu-modal__close" type="button" aria-label="Cerrar carta" data-close-modal>&times;</button>
      <h2 class="menu-modal__title" id="menu-modal-title"></h2>
      <div class="menu-modal__content"></div>
    </section>
  `;
  document.body.appendChild(menuModal);

  const menuModalPanel = menuModal.querySelector(".menu-modal__panel");
  const menuModalTitle = menuModal.querySelector(".menu-modal__title");
  const menuModalContent = menuModal.querySelector(".menu-modal__content");
  const menuModalClose = menuModal.querySelector(".menu-modal__close");

  const buildModalItem = (item, kind) => {
    const imageSrc = kind === "food" ? platoImages[normalizeName(item.name)] : "";

    return `
      <article class="menu-modal-item">
        <div class="menu-modal-item__header">
          <h4 class="menu-modal-item__name">${item.name}</h4>
          <span class="menu-modal-item__price">${item.price}</span>
        </div>
        ${imageSrc ? `<img class="menu-modal-item__image" src="${imageSrc}" alt="${item.name}" loading="lazy">` : ""}
        ${item.desc ? `<p class="menu-modal-item__description">${item.desc}</p>` : ""}
      </article>
    `;
  };

  const openMenuModal = (title, categories, kind) => {
    menuModalTitle.textContent = title;
    menuModalContent.innerHTML = categories.map((category) => `
      <section class="menu-modal-category">
        <h3 class="menu-modal-category__title">${category.name}</h3>
        <div class="menu-modal-category__grid">
          ${category.items.map((item) => buildModalItem(item, kind)).join("")}
        </div>
      </section>
    `).join("");

    menuModalPanel.scrollTop = 0;
    menuModal.classList.add("open");
    menuModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("menu-modal-open");
    menuModalClose.focus();
  };

  const closeMenuModal = () => {
    menuModal.classList.remove("open");
    menuModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-modal-open");
  };

  menuModal.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-modal]")) {
      closeMenuModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuModal.classList.contains("open")) {
      closeMenuModal();
    }
  });

  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      if (button.dataset.filter === "platos") {
        openMenuModal("PLATOS", platosGroupedData, "food");
      } else {
        openMenuModal("BEBIDAS", bebidasGroupedData, "drink");
      }
    });
  });
});
