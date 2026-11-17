/* Startseite: Karte, Filter, Suche, Liste, Insider-Tipps */

(function () {
  const state = { cat: "alle", query: "" };
  const markers = new Map();

  const map = createMap("map");
  const layer = L.layerGroup().addTo(map);

  SIGHTS.forEach((s) => {
    const m = L.marker([s.lat, s.lng], { icon: categoryIcon(s.cat), title: s.name, keyboard: true })
      .bindPopup(popupHtml(s));
    markers.set(s.id, m);
  });

  const filtersEl = document.getElementById("filters");
  const listEl = document.getElementById("list");
  const countEl = document.getElementById("count");
  const searchEl = document.getElementById("search");

  function renderFilters() {
    const items = [{ key: "alle", label: "Alle", icon: "🗺️" }].concat(
      Object.entries(CATEGORIES).map(([key, c]) => ({ key, label: c.label, icon: c.icon }))
    );
    filtersEl.innerHTML = items.map((i) =>
      `<button type="button" class="chip" data-cat="${i.key}" aria-pressed="${i.key === state.cat}">${i.icon} ${esc(i.label)}</button>`
    ).join("");
  }

  function matches(s) {
    if (state.cat !== "alle" && s.cat !== state.cat) return false;
    const q = state.query.trim().toLowerCase();
    if (!q) return true;
    return (s.name + " " + s.kurz + " " + CATEGORIES[s.cat].label).toLowerCase().includes(q);
  }

  function render() {
    const visible = SIGHTS.filter(matches);
    layer.clearLayers();
    visible.forEach((s) => layer.addLayer(markers.get(s.id)));

    if (visible.length) {
      const bounds = L.latLngBounds(visible.map((s) => [s.lat, s.lng]));
      map.fitBounds(bounds, { padding: [30, 30], maxZoom: 14 });
      listEl.innerHTML = visible.map(cardHtml).join("");
    } else {
      listEl.innerHTML = '<p class="empty">Keine Treffer. Versuche eine andere Kategorie oder Suche.</p>';
    }
    countEl.textContent = visible.length === 1 ? "1 Ort gefunden" : `${visible.length} Orte gefunden`;

    document.querySelectorAll("#filters .chip").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.cat === state.cat))
    );
  }

  filtersEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    state.cat = btn.dataset.cat;
    render();
  });

  searchEl.addEventListener("input", () => {
    state.query = searchEl.value;
    render();
  });

  listEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".show-on-map");
    if (!btn) return;
    const s = sightById(btn.dataset.id);
    document.getElementById("map").scrollIntoView({ behavior: "smooth", block: "center" });
    map.setView([s.lat, s.lng], 15);
    markers.get(s.id).openPopup();
  });

  function renderTips() {
    const tips = SIGHTS.filter((s) => s.tipp).slice(0, 6);
    document.getElementById("tips").innerHTML = tips.map((s) => `
      <article class="tip">
        <span class="tip-icon" aria-hidden="true">${s.icon}</span>
        <div>
          <h3><a href="sehenswuerdigkeit.html?id=${encodeURIComponent(s.id)}">${esc(s.name)}</a></h3>
          <p>${esc(s.tipp)}</p>
        </div>
      </article>`).join("");
  }

  renderFilters();
  renderTips();
  render();
})();
