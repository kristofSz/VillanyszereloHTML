function initMap() {
    // The location of Uluru
    const gyor = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: gyor,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: gyor,
        map: map,
    });
}
