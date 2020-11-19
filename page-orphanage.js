const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollwheelZoom: false,
  zoomControl: false,
};

// create map
const map = L.map("mapid", options).setView([-29.9433219, -50.9960814], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popAnchor: [170, 2],
});

// create and add marker
L.marker([-29.9433219, -50.9960814], { icon }).addTo(map);

/* image gallery */

function selectImage(event) {
  const button = event.currentTarget;

  console.log(button.children);

  // remove all .active classes
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  // select the clicked image
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  // update the image container
  imageContainer.src = image.src;

  // add the .active class to the clicked button
  button.classList.add("active");
}
