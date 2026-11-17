/* Detailseite einer Sehenswürdigkeit (?id=...) */

(function () {
  const root = document.getElementById("detail");
  const id = new URLSearchParams(location.search).get("id");
  const s = id ? sightById(id) : undefined;

  if (!s) {
    document.title = "Nicht gefunden – Reiseführer HH";
    root.innerHTML = `
      <div class="not-found">
        <h1>Ort nicht gefunden</h1>
        <p>Diese Seite gibt es nicht. Schau dir alle Sehenswürdigkeiten an.</p>
        <a class="btn" href="index.html#explorer">Zur Übersicht</a>
      </div>`;
    return;
  }

  const cat = CATEGORIES[s.cat];
  document.title = `${s.name} – Reiseführer HH`;

  const related = SIGHTS.filter((o) => o.cat === s.cat && o.id !== s.id);
  const inRoutes = ROUTES.filter((r) => r.stops.includes(s.id));

  root.innerHTML = `
    <a class="back" href="index.html#explorer">← Zurück zur Übersicht</a>
    <div class="detail-hero" style="--c:${cat.color}" aria-hidden="true">${s.icon}</div>
    <span class="tag" style="--c:${cat.color}">${cat.icon} ${esc(cat.label)}</span>
    <h1>${esc(s.name)}</h1>
    <p class="lead">${esc(s.kurz)}</p>

    <dl class="facts">
      <div><dt>Dauer</dt><dd>${esc(s.dauer)}</dd></div>
      <div><dt>Anfahrt (HVV)</dt><dd>${esc(s.anfahrt)}</dd></div>
    </dl>

    <p>${esc(s.text)}</p>

    <aside class="tip-box">
      <strong>💡 Insider-Tipp</strong>
      <p>${esc(s.tipp)}</p>
    </aside>

    <div id="mini-map" class="map map-small" role="region" aria-label="Lage auf der Karte"></div>
    <p><a class="btn btn-outline" href="${osmLink(s)}" target="_blank" rel="noopener noreferrer">In OpenStreetMap öffnen</a></p>

    ${inRoutes.length ? `
      <section>
        <h2>In diesen Tagesrouten</h2>
        <ul class="plain-list">
          ${inRoutes.map((r) => `<li><a href="routen.html#${esc(r.id)}">${r.icon} ${esc(r.name)}</a></li>`).join("")}
        </ul>
      </section>` : ""}

    ${related.length ? `
      <section>
        <h2>Mehr aus „${esc(cat.label)}“</h2>
        <ul class="plain-list">
          ${related.map((o) => `<li><a href="sehenswuerdigkeit.html?id=${encodeURIComponent(o.id)}">${o.icon} ${esc(o.name)}</a></li>`).join("")}
        </ul>
      </section>` : ""}
  `;

  const map = createMap("mini-map");
  map.setView([s.lat, s.lng], 15);
  L.marker([s.lat, s.lng], { icon: categoryIcon(s.cat), title: s.name }).addTo(map);
})();
