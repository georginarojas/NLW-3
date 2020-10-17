// Create Map
// setView([latitude, longitude], zoom)
const map = L.map("mapid").setView([-12.9491183, -38.4341287], 15);

// create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// Create popup overlay
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Lar das meninas <a href=" orphanage.html?id=1" \
              class="choose-orphanage"> \
              <img src="./public/images/arrow-white.svg"> </a> '
);

// Create and add marker
// In js when the name of object and class is the same we put only one name
// { icon : icon} != {icon: map}
L.marker([-12.9491183, -38.4341287], { icon }).addTo(map).bindPopup(popup);

