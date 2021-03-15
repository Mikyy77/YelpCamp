mapboxgl.accessToken = mapBoxToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-74.5, 40],
    center: campground.geometry.coordinates,
    zoom: 4
})

map.addControl(new mapboxgl.NavigationControl())

new mapboxgl.Marker()
.setLngLat(campground.geometry.coordinates)
.setPopup(
    new mapboxgl.Popup({offset: 25})
    .setHTML(
        `<h3>${campground.title}<p>${campground.location}</p></h3>`
    )
)
.addTo(map)