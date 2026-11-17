/* Gemeinsame Hilfsfunktionen */

const HAMBURG_CENTER = [53.5511, 9.9937];

function esc(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));
}

function sightById(id) {
  return SIGHTS.find((s) => s.id === id);
}

function createMap(elementId) {
  const map = L.map(elementId, {
    scrollWheelZoom: false
  }).setView(HAMBURG_CENTER, 12);
  // Esri World Street Map: kostenlos, ohne API-Schlüssel und ohne Referer-Pflicht,
  // funktioniert daher auch beim Öffnen per Doppelklick (file://).
  // tile.openstreetmap.org blockiert Anfragen ohne Referer, CARTO verlangt einen Schlüssel.
  L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 18,
    attribution: 'Tiles &copy; Esri &mdash; Esri, HERE, Garmin, OpenStreetMap-Mitwirkende und die GIS-Community'
  }).addTo(map);
  // Karte neu berechnen, wenn sich die Containergröße ändert (z. B. Fenster oder Gerät drehen/skalieren).
  if ("ResizeObserver" in window) {
    new ResizeObserver(() => map.invalidateSize()).observe(map.getContainer());
  }
  // Mausrad-Zoom erst nach Klick auf die Karte, damit das Scrollen der Seite nicht stört.
  map.on("focus", () => map.scrollWheelZoom.enable());
  map.on("blur", () => map.scrollWheelZoom.disable());
  return map;
}

function categoryIcon(catKey, label) {
  const cat = CATEGORIES[catKey];
  const text = label !== undefined ? esc(label) : cat.icon;
  return L.divIcon({
    className: "pin",
    html: `<span style="background:${cat.color}">${text}</span>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -18]
  });
}

function popupHtml(sight) {
  return `<strong>${esc(sight.name)}</strong><br>${esc(sight.kurz)}<br>` +
    `<a href="sehenswuerdigkeit.html?id=${encodeURIComponent(sight.id)}">Details ansehen →</a>`;
}

function osmLink(sight) {
  return `https://www.openstreetmap.org/?mlat=${sight.lat}&mlon=${sight.lng}#map=17/${sight.lat}/${sight.lng}`;
}

function cardHtml(sight) {
  const cat = CATEGORIES[sight.cat];
  return `
    <article class="card" data-id="${esc(sight.id)}">
      <a class="card-thumb" href="sehenswuerdigkeit.html?id=${encodeURIComponent(sight.id)}"
         style="--c:${cat.color}" aria-hidden="true" tabindex="-1">${sight.icon}</a>
      <div class="card-body">
        <span class="tag" style="--c:${cat.color}">${cat.icon} ${esc(cat.label)}</span>
        <h3><a href="sehenswuerdigkeit.html?id=${encodeURIComponent(sight.id)}">${esc(sight.name)}</a></h3>
        <p>${esc(sight.kurz)}</p>
        <button type="button" class="btn-link show-on-map" data-id="${esc(sight.id)}">📍 Auf Karte zeigen</button>
      </div>
    </article>`;
}