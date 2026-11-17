/* Tagesrouten: Auswahl, Karte mit nummerierten Stationen, Liste */

(function () {
  const tabsEl = document.getElementById("route-tabs");
  const infoEl = document.getElementById("route-info");
  const map = createMap("route-map");
  const layer = L.layerGroup().addTo(map);

  function routeFromHash() {
    const id = decodeURIComponent(location.hash.replace("#", ""));
    return ROUTES.find((r) => r.id === id) || ROUTES[0];
  }

  function renderTabs(active) {
    tabsEl.innerHTML = ROUTES.map((r) =>
      `<button type="button" class="chip" data-id="${esc(r.id)}" aria-pressed="${r.id === active.id}">${r.icon} ${esc(r.name)}</button>`
    ).join("");
  }

  function show(route, updateHash) {
    const stops = route.stops.map(sightById).filter(Boolean);
    renderTabs(route);
    if (updateHash) history.replaceState(null, "", "#" + route.id);

    layer.clearLayers();
    const points = stops.map((s) => [s.lat, s.lng]);
    L.polyline(points, {
      color: "#9b2d20",
      weight: 4,
      opacity: 0.8,
      dashArray: "8 8"
    }).addTo(layer);
    stops.forEach((s, i) => {
      L.marker([s.lat, s.lng], {
        icon: categoryIcon(s.cat, String(i + 1)),
        title: `${i + 1}. ${s.name}`
      })
        .bindPopup(popupHtml(s))
        .addTo(layer);
    });
    map.fitBounds(L.latLngBounds(points), {
      padding: [30, 30],
      maxZoom: 15
    });

    infoEl.innerHTML = `
      <h2>${route.icon} ${esc(route.name)}</h2>
      <p class="lead">${esc(route.kurz)} Dauer: ${esc(route.dauer)}</p>
      <ol class="stops">
        ${stops.map((s) => `
          <li>
            <span class="stop-no" style="--c:${CATEGORIES[s.cat].color}" aria-hidden="true">${s.icon}</span>
            <div>
              <a href="sehenswuerdigkeit.html?id=${encodeURIComponent(s.id)}"><strong>${esc(s.name)}</strong></a>
              <p>${esc(s.kurz)}</p>
              <small>⏱ ${esc(s.dauer)} · 🚇 ${esc(s.anfahrt)}</small>
            </div>
          </li>`).join("")}
      </ol>`;
  }

  tabsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    show(ROUTES.find((r) => r.id === btn.dataset.id), true);
  });

  window.addEventListener("hashchange", () => show(routeFromHash(), false));

  show(routeFromHash(), false);
})();