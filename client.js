require('leaflet');
require('esri-leaflet');

var mapDiv = document.createElement('div')
mapDiv.setAttribute('id', 'mapDiv');
mapDiv.setAttribute('style', 'position: fixed; top: 0; bottom: 0; left: 0; right: 0;')
document.body.appendChild(mapDiv);

var map = L.map('mapDiv').setView([42.36, -71.06], 13);
L.esri.basemapLayer('Gray').addTo(map);

console.log(L.version);
console.log(L.esri.VERSION);
