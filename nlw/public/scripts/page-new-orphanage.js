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
});

// Create and add marker
let marker;

map.on('click', (event) =>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    

    // Remove icon
    marker && map.removeLayer(marker)

    // Add icon layer
    marker = L.marker([lat, lng], { icon}).addTo(map);
})

// Add photo
function addPhotoField(){
    // Get the photo container #images
    const container = document.querySelector('#images');

    // Duplicate the container
    const fieldsContainer = document.querySelectorAll('.new-upload');

    // Clone the last image added
    // ** cloneNode(true) copy all the element (input and span)
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true);

    // Verify if the field is empty
    const input = newFieldContainer.children[0];
    if(input.value == ""){
        return
    }

    // Clean the fiel before to add in container
    input.value = '';

    // Add the clone in container images
    container.appendChild(newFieldContainer);
}

function deleteField(event){
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
        // Clean field
        span.parentNode.children[0].value = "";
        return
    }

    // Delete field
    span.parentNode.remove();
}

// Select Yes or No
function toggleSelect(event){
    // Remove the class "active"
    document.querySelectorAll('.button-select button').forEach(button => button.classList.remove('active'));

    // Put the class "active" in the button clicked
    const button = event.currentTarget;
    button.classList.add('active');

    // Update the input hidden with the value selected
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value;
}