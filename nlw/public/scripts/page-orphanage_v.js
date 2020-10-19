const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};


// Get lat and lng
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;


// Create Map
// setView([latitude, longitude], zoom)
const map = L.map("mapid", options).setView([lat, lng], 15);

// create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// Create and add marker
// In js when the name of object and class is the same we put only one name
// { icon : icon} != {icon: map}
L.marker([lat, lng], { icon }).addTo(map);

// Image gallery
function selectImage(event) {
  const button = event.currentTarget;

  //Steps
  // 1. Remove all the .active class
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  // 2. Select the image clicked
  const image = button.children[0];
  const imageContainer = document.querySelector('.orphanage-details > img');

  // 3. Update the image's container
  imageContainer.src = image.src;

  // 4. Add the .active class to new button
  button.classList.add('active');
}
