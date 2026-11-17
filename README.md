# Reiseführer HH

Responsive Webanwendung für Hamburg-Touristen (Mobile First). HTML, CSS und JavaScript ohne Framework und ohne Build-Schritt.

## Starten

`index.html` im Browser öffnen. Eine Internetverbindung ist für die Kartenkacheln (OpenStreetMap) nötig.
Optional mit lokalem Server: `npx serve reisefuehrer-hh`

## Struktur

| Datei                           | Inhalt                                                              |
| ------------------------------- | ------------------------------------------------------------------- |
| `index.html`                    | Startseite mit Karte, Kategorie-Filter, Suche, Liste, Insider-Tipps |
| `sehenswuerdigkeit.html?id=...` | Detailseite mit Mini-Karte                                          |
| `routen.html#id`                | Tagesrouten mit nummerierten Stationen                              |
| `js/data.js`                    | **Alle Inhalte** (Kategorien, Orte, Routen). Hier Inhalte ergänzen  |
| `js/common.js`                  | Karte, Marker, Hilfsfunktionen                                      |
| `css/style.css`                 | Mobile-First-Styles, Breakpoints bei 600 px und 960 px              |
| `vendor/leaflet/`               | Leaflet 1.9.4 (lokal)                                               |

Kartenkacheln: Esri World Street Map (ohne API-Schlüssel). `tile.openstreetmap.org` blockiert Anfragen ohne Referer (z. B. beim Öffnen per Doppelklick), CARTO verlangt inzwischen einen Schlüssel.

## Mögliche Verbesserungen (Backlog-Ideen)

- Mehrsprachigkeit (DE/EN/ES) mit Sprachumschalter
- Fotos mit freier Lizenz statt Emojis
- Favoriten-Liste (localStorage)
- Echte Fußwege auf der Karte statt Luftlinie
- Mehr Orte und Routen

## Neuen Ort hinzufügen

Eintrag in `SIGHTS` (`js/data.js`) mit `id`, `name`, `cat`, `icon`, `lat`, `lng`, `dauer`, `anfahrt`, `kurz`, `text`, `tipp` ergänzen. Optional die `id` in einer Route unter `ROUTES` eintragen.

## Hinweise

- Logo und Titelbild liegen in `img/` (optimierte Versionen: `hero-hamburg.jpg` für Desktop, `hero-hamburg-small.jpg` für Smartphones). Das Titelbild ist eine illustrative, KI-generierte Darstellung. Die Orte selbst werden mit Emojis dargestellt. Weitere Fotos nur mit freier Lizenz einbinden (z. B. Wikimedia Commons).
- Koordinaten sind ungefähre Werte. Preise und Öffnungszeiten sind bewusst nicht enthalten.
