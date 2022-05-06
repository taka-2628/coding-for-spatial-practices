mapboxgl.accessToken = 'pk.eyJ1IjoidGgtdGgiLCJhIjoiY2t3N2Q1YmNxOW8wajMxczE4ZndqaDRuNCJ9.UWfb1rN9Hl6lBXJGLC6Vrw';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/th-th/cl2pjz7ll000915of2t12waa2',
  center: [-110, 54],
  zoom: 2.75
});
/* style original: mapbox://styles/mapbox/light-v10  */
   
// add markers to map
for (const feature of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement('div');
  el.className = 'marker';
   
  // make a marker for each feature and add it to the map
  new mapboxgl.Marker(el)
  .setLngLat(feature.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML(
        `<h3>${feature.properties.title}</h3>`
      )
  )
  .addTo(map);
}