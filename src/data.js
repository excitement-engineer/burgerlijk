const SINGLE = "SINGLE";
const MULTIPLE = "MULTIPLE";

const createSingle = (question, amount) => ({
  type: SINGLE,
  question,
  amount
});

const createMultiple = (question, amount) => ({
  type: MULTIPLE,
  question,
  amount
});

export default [
  createSingle("Sta je in het weekend vóór 9 uur op?", 30),
  createSingle("Sta je doordeweeks na 9 uur op?", -30),
  createSingle("Loop je door de supermarkt met een winkelwagen?", 20),
  createSingle("Doe je dit samen met je partner?", 10),
  createSingle(
    "Gebruik je de winkelwagen alleen maar om al die bierkratjes mee te nemen?",
    -40
  ),
  createSingle(
    "Denk je maandag na over wat je de rest van de week gaat eten?",
    20
  ),
  createSingle(
    "Doe je boodschappen bij twee verschillende supermarkten omdat die havermout bij de Lidl toch echt 13 cent goedkoper is?",
    40
  ),

  createSingle("Kijk je al  weken uit naar dat bezoek aan de Ikea?", 20),
  createSingle(
    "Spaar je koopzegels zodat je alweer een messenset bij de Albert Heijn kunt halen?",
    20
  ),
  createSingle(
    "Weiger je naar de bioscoop te gaan omdat de film pas om 11 uur is afgelopen?",
    30
  ),
  createMultiple(
    "Aantal alcoholconsumpties (punt per consumptie per week)",
    -5
  ),
  createSingle("Praat je in de 'we'  vorm?", 30),
  createSingle("Heb je een auto?", 10),
  createSingle("Is dit een Opel Astra?", 20),
  createSingle("Heb je dezelfde ochtendjas als je partner?", 40),
  createSingle("Heb je een vriezer met lades?", 20),
  createSingle(
    "Je kan niet stappen met je vrienden tijdens kerst omdat je al gaat gourmetten met je schoonouders?",
    30
  ),
  createSingle("Kun je een dubbele Windsor leggen?", 20),
  createSingle("Heb je geen idee wat een dubbele Windsor is?", -20),
  createSingle("Praat je tijdens een feestje over je hypotheek?", 40),
  createSingle("Maak je op zondag een boswandeling?", 20),
  createSingle("Doe je dit samen met je partner?", 10),
  createSingle("Serveer je blokjes kaas tijdens een feestje?", 20),
  createSingle("Ga je op vakantie naar Centerparcs?", 50),
  createSingle("Ben je in het bezit van bloembakken?", 20),
  createSingle("Ben je in het bezit van bloembakken met geraniums?", 40),
  createSingle("Heb je een hond of kat met je partner?", 40),
  createSingle(
    "Bezit je een decoratiestuk met de tekst 'Home is where the heart is'?",
    20
  ),
  createSingle(
    "Zijn spontane avondjes verdwenen en plan je afspraken met vrienden via Datumprikker?",
    30
  ),
  createSingle("Heb je toegang tot de agenda van je partner?", 10),
  createSingle("Kijk je met je vrienden naar Jackass?", -40),
  createSingle(
    "Kijk je met je partner naar 'The Notebook' of een andere romantisch drama?",
    40
  ),
  createSingle("Vraag je een waterkoker voor je verjaardag?", 40),
  createSingle(
    "Kijk je met je familie en partner naar de nieuwjaarsspecial van Boer zoekt vrouw?",
    30
  ),
  createSingle(
    "Vind je deze lijst maar pretentieus en discriminerend, terwijl je in je muntthee roert?",
    100
  )
];
