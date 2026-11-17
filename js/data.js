/* Daten für den Reiseführer HH.
   Koordinaten sind ungefähre Werte (für die Kartenansicht). */

const CATEGORIES = {
  kultur:   { label: "Kultur",   icon: "🎭", color: "#b03a2e" },
  hafen:    { label: "Hafen",    icon: "⚓", color: "#1f6fa5" },
  natur:    { label: "Natur",    icon: "🌳", color: "#2e8b57" },
  essen:    { label: "Essen",    icon: "🥪", color: "#c77d00" },
  shopping: { label: "Shopping", icon: "🛍️", color: "#7d3c98" }
};

const SIGHTS = [
  {
    id: "elbphilharmonie", name: "Elbphilharmonie", cat: "kultur", icon: "🎼",
    lat: 53.5413, lng: 9.9841, dauer: "1–2 Std.", anfahrt: "U Baumwall / Bus",
    kurz: "Konzerthaus mit Panorama-Plaza über dem Hafen.",
    text: "Die Elbphilharmonie steht auf dem ehemaligen Kaispeicher A in der HafenCity und wurde 2017 eröffnet. Die öffentliche Plaza liegt in rund 37 Metern Höhe und bietet einen weiten Blick über Hafen und Stadt. Der Besuch der Plaza ist in der Regel kostenlos, es wird aber ein Zeitfenster-Ticket empfohlen. Bitte vorab auf der offiziellen Webseite prüfen.",
    tipp: "Zum Sonnenuntergang hinaufgehen und das Ticket früh sichern."
  },
  {
    id: "rathaus", name: "Rathaus", cat: "kultur", icon: "🏛️",
    lat: 53.5504, lng: 9.9922, dauer: "1 Std.", anfahrt: "U Rathaus / S Jungfernstieg",
    kurz: "Prachtvolles Rathaus im Stil der Neorenaissance.",
    text: "Das Hamburger Rathaus ist Sitz von Bürgerschaft und Senat und wurde 1897 fertiggestellt. Der Turm ist 112 Meter hoch. Vor dem Gebäude liegt der Rathausmarkt, im Inneren werden Führungen angeboten.",
    tipp: "Den Innenhof mit dem Hygieia-Brunnen anschauen. Er ist frei zugänglich."
  },
  {
    id: "michel", name: "St. Michaelis (Michel)", cat: "kultur", icon: "⛪",
    lat: 53.5489, lng: 9.9786, dauer: "1–1,5 Std.", anfahrt: "S Stadthausbrücke / U Baumwall",
    kurz: "Wahrzeichen der Stadt mit Aussichtsplattform im Turm.",
    text: "Der Michel ist die bekannteste Hauptkirche Hamburgs und ein Wahrzeichen der Stadt. Im Turm gibt es eine Aussichtsplattform mit Blick auf Hafen und Innenstadt. Außerdem kann man die Krypta besichtigen.",
    tipp: "Bei klarem Wetter kommen, dann ist die Aussicht am besten."
  },
  {
    id: "wunderland", name: "Miniatur Wunderland", cat: "kultur", icon: "🚂",
    lat: 53.5437, lng: 9.9889, dauer: "2–4 Std.", anfahrt: "U Baumwall / U Messberg",
    kurz: "Größte Modelleisenbahn-Anlage der Welt in der Speicherstadt.",
    text: "Das Miniatur Wunderland liegt mitten in der Speicherstadt und zeigt detailreiche Miniaturwelten mit Zügen, Flughafen und Städten. Es ist ein beliebtes Ziel für Familien und für alle, die Details mögen.",
    tipp: "Tickets vorab online buchen, um lange Wartezeiten zu vermeiden."
  },
  {
    id: "kunsthalle", name: "Hamburger Kunsthalle", cat: "kultur", icon: "🖼️",
    lat: 53.5530, lng: 10.0000, dauer: "2 Std.", anfahrt: "Hauptbahnhof",
    kurz: "Eines der großen Kunstmuseen Deutschlands am Hauptbahnhof.",
    text: "Die Kunsthalle liegt direkt am Hauptbahnhof und zeigt Kunst vom Mittelalter bis zur Gegenwart. Neben der ständigen Sammlung gibt es wechselnde Sonderausstellungen.",
    tipp: "Aktuelle Sonderausstellungen vorab auf der Webseite prüfen."
  },
  {
    id: "chilehaus", name: "Chilehaus", cat: "kultur", icon: "🧱",
    lat: 53.5499, lng: 10.0020, dauer: "30 Min.", anfahrt: "U Messberg",
    kurz: "Backstein-Kontorhaus in Form eines Schiffsbugs.",
    text: "Das Chilehaus wurde 1924 vollendet und gehört zum UNESCO-Welterbe Kontorhausviertel. Die spitze Ecke erinnert an den Bug eines Schiffes. Das Gebäude ist ein Beispiel für den Backsteinexpressionismus.",
    tipp: "Die spitze Ecke sieht man am besten von der Straße aus. Dort entstehen die schönsten Fotos."
  },
  {
    id: "reeperbahn", name: "Reeperbahn", cat: "kultur", icon: "🎤",
    lat: 53.5496, lng: 9.9588, dauer: "Abend", anfahrt: "S Reeperbahn / U St. Pauli",
    kurz: "Hamburgs berühmte Vergnügungsmeile in St. Pauli.",
    text: "Die Reeperbahn in St. Pauli ist bekannt für Theater, Musikclubs und Bars. Auch der Beatles-Platz ist ein beliebtes Ziel. Am lebendigsten ist die Gegend am Abend.",
    tipp: "Abends auf die persönlichen Sachen achten und in der Gruppe bleiben."
  },
  {
    id: "landungsbruecken", name: "Landungsbrücken", cat: "hafen", icon: "🚢",
    lat: 53.5459, lng: 9.9693, dauer: "1 Std.", anfahrt: "S/U Landungsbrücken",
    kurz: "Schwimmende Anleger: Start für Hafenrundfahrten und Fähren.",
    text: "An den Landungsbrücken legen Hafenrundfahrten und die HVV-Fähren ab. Von hier aus hat man einen schönen Blick auf den Hafen und die Elbe.",
    tipp: "Mit einem normalen HVV-Ticket kann man die Fähre (z. B. Linie 62) als günstige Mini-Hafenrundfahrt nutzen."
  },
  {
    id: "speicherstadt", name: "Speicherstadt", cat: "hafen", icon: "🏭",
    lat: 53.5446, lng: 9.9930, dauer: "1–2 Std.", anfahrt: "U Baumwall / U Messberg",
    kurz: "Historischer Lagerhaus-Komplex aus rotem Backstein, UNESCO-Welterbe.",
    text: "Die Speicherstadt ist ein großer historischer Lagerhauskomplex mit Backsteinbauten an den Fleeten. Sie gehört seit 2015 zum UNESCO-Welterbe. Es lohnt sich, sie tagsüber und abends zu sehen.",
    tipp: "Am Abend, wenn die Gebäude beleuchtet sind, ist die Stimmung besonders schön."
  },
  {
    id: "elbtunnel", name: "Alter Elbtunnel", cat: "hafen", icon: "🚇",
    lat: 53.5412, lng: 9.9672, dauer: "45 Min.", anfahrt: "S/U Landungsbrücken",
    kurz: "Fußgängertunnel unter der Elbe mit Blick auf die Skyline.",
    text: "Der Alte Elbtunnel wurde 1911 eröffnet und verbindet die Landungsbrücken mit dem anderen Elbufer. Fußgänger und Radfahrer können ihn nutzen. Auf der anderen Seite hat man einen guten Blick auf die Hamburger Skyline.",
    tipp: "Auf der Südseite die Skyline fotografieren und dann zurückgehen."
  },
  {
    id: "planten", name: "Planten un Blomen", cat: "natur", icon: "🌸",
    lat: 53.5619, lng: 9.9795, dauer: "1–2 Std.", anfahrt: "U Stephansplatz / S Dammtor",
    kurz: "Park mit Japanischem Garten und Wasserlichtkonzerten.",
    text: "Planten un Blomen ist ein großer Park mitten in der Stadt. Es gibt einen Japanischen Garten, Gewächshäuser und im Sommer abends die Wasserlichtkonzerte.",
    tipp: "Im Sommer abends zu den Wasserlichtkonzerten gehen."
  },
  {
    id: "alster", name: "Alster & Jungfernstieg", cat: "natur", icon: "⛵",
    lat: 53.5530, lng: 9.9940, dauer: "1–2 Std.", anfahrt: "S/U Jungfernstieg",
    kurz: "Binnen- und Außenalster zum Spazieren und für Bootsfahrten.",
    text: "Mitten in der Stadt liegen Binnenalster und Außenalster. Am Jungfernstieg starten die Alsterschiffe. Wer mag, kann die Außenalster zu Fuß umrunden. Der Weg ist etwa 7 km lang.",
    tipp: "Eine Alsterrundfahrt ist ein entspannter Weg, um einen ersten Überblick zu bekommen."
  },
  {
    id: "blankenese", name: "Blankenese", cat: "natur", icon: "🏘️",
    lat: 53.5640, lng: 9.8070, dauer: "Halber Tag", anfahrt: "S1 Blankenese",
    kurz: "Ehemaliges Fischerdorf mit Treppenviertel und Elbstrand.",
    text: "Blankenese liegt am Westrand von Hamburg. Das Treppenviertel mit seinen schmalen Wegen und Treppen ist besonders bekannt. Unten gibt es den Elbstrand.",
    tipp: "Mit der S1 hinfahren und Zeit für die Treppen und den Strand einplanen."
  },
  {
    id: "bruecke10", name: "Fischbrötchen an Brücke 10", cat: "essen", icon: "🐟",
    lat: 53.5453, lng: 9.9697, dauer: "30 Min.", anfahrt: "S/U Landungsbrücken",
    kurz: "Der Hamburger Klassiker: Fischbrötchen direkt am Hafen.",
    text: "Ein Fischbrötchen gehört zu einem Hamburg-Besuch dazu. An den Landungsbrücken gibt es viele Stände. Beliebt sind Matjes, Backfisch und Krabben.",
    tipp: "Das Brötchen am Wasser essen und auf die Möwen achten."
  },
  {
    id: "fischmarkt", name: "Fischmarkt St. Pauli", cat: "essen", icon: "🐠",
    lat: 53.5446, lng: 9.9455, dauer: "1–2 Std.", anfahrt: "S Königstraße / Bus",
    kurz: "Sonntagsmarkt am frühen Morgen mit Frühstück in der Fischauktionshalle.",
    text: "Der Fischmarkt findet sonntags früh am Elbufer statt. Neben Fisch gibt es Obst, Blumen und Imbissstände. In der Fischauktionshalle spielen oft Bands.",
    tipp: "Früh kommen, denn gegen Mittag ist der Markt schon vorbei."
  },
  {
    id: "schanze", name: "Schanzenviertel", cat: "shopping", icon: "🎨",
    lat: 53.5636, lng: 9.9657, dauer: "2 Std.", anfahrt: "S/U Sternschanze",
    kurz: "Kreatives Viertel mit kleinen Läden, Cafés und Street-Art.",
    text: "Das Schanzenviertel ist bekannt für unabhängige Läden, Second-Hand, Cafés und Street-Art. Besonders die Straße Schulterblatt ist belebt.",
    tipp: "Samstags gibt es den Flohmarkt Flohschanze auf dem Schlachthof-Gelände."
  },
  {
    id: "moenckeberg", name: "Mönckebergstraße", cat: "shopping", icon: "🛒",
    lat: 53.5502, lng: 10.0000, dauer: "1–2 Std.", anfahrt: "U Mönckebergstraße / Hauptbahnhof",
    kurz: "Die klassische Einkaufsstraße zwischen Hauptbahnhof und Rathaus.",
    text: "Die Mönckebergstraße, kurz Mö, verbindet den Hauptbahnhof mit dem Rathausmarkt. Es gibt viele Geschäfte und Kaufhäuser. Sie lässt sich gut mit dem Rathaus oder der Kunsthalle verbinden.",
    tipp: "Mit einem Besuch im Rathaus oder in der Kunsthalle kombinieren."
  }
];

const ROUTES = [
  {
    id: "klassiker", name: "Hamburg-Klassiker", icon: "⭐", dauer: "ca. 6 Std.",
    kurz: "Die bekanntesten Orte an einem Tag.",
    stops: ["rathaus", "michel", "landungsbruecken", "elbphilharmonie", "speicherstadt"]
  },
  {
    id: "hafen", name: "Hafen & Speicherstadt", icon: "⚓", dauer: "ca. 5 Std.",
    kurz: "Hafenflair, Fischbrötchen und Backstein-Architektur.",
    stops: ["landungsbruecken", "elbtunnel", "bruecke10", "elbphilharmonie", "speicherstadt", "wunderland"]
  },
  {
    id: "gruen", name: "Grün & Kunst", icon: "🌳", dauer: "ca. 4 Std.",
    kurz: "Ruhige Route durch Parks, Alster und Museum.",
    stops: ["planten", "alster", "kunsthalle"]
  },
  {
    id: "abend", name: "Szene & Abend", icon: "🌙", dauer: "ca. 4 Std.",
    kurz: "Kreative Viertel, Nachtleben und Fischmarkt.",
    stops: ["schanze", "reeperbahn", "fischmarkt"]
  }
];
