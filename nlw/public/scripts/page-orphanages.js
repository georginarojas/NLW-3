// Create Map
// setView([latitude, longitude], zoom)
const map = L.map("mapid").setView([-12.9491183, -38.4341287], 15);

// create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// Pass a object's argument
function addMarker({id, name, lat, lng}){
    // >> Create popup overlay
    const popup = L.popup({
      closeButton: false,
      className: "map-popup",
      minWidth: 240,
      minHeight: 240,
    }).setContent(
      `${name} <a href="/orphanage?id=${id}"> \
                  <img src="/images/arrow-white.svg"></a> `
    );

    // .setContent(
    //   'Lar das meninas <a href=" orphanage?id=1" \
    //               class="choose-orphanage"> \
    //               <img src="/images/arrow-white.svg"> </a> '
    

    // >> Create and add marker
    // In js when the name of object and class is the same we put only one name
    // { icon : icon} != {icon: map}
    L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);

}

const orphanagesSpan = document.querySelectorAll('.orphanages span');
orphanagesSpan.forEach( span => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng
  }

  addMarker(orphanage);
})
















