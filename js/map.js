var map = L.map('map', {
center: [-17.645875, -71.345271],
zoom: 18,
minZoom: 10,
maxZoom: 20,
maxBounds: [[-17.8681,-71.5245], [-15.9593,-69.9777]]
});
var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var colegios = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_colegios_ilo/wms?", {
layers: "proyecto_colegios_ilo:colegios", //gisweb:colegios
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
colegios.addTo(map);

var departamentos = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_colegios_ilo/wms?", {
layers: "proyecto_colegios_ilo:departamentos", //gisweb:departamentos
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
departamentos.addTo(map);

var distritos = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_colegios_ilo/wms?", {
layers: "proyecto_colegios_ilo:distritos", //gisweb:distritos
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
distritos.addTo(map);

var provincias = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_colegios_ilo/wms?", {
layers: "proyecto_colegios_ilo:provincias", //gisweb:provincias
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
provincias.addTo(map);

var baseMaps = {
"OSM": basemapOSM
};
var overlayMaps = {
"proyecto_colegios_ilo:departamentos": departamentos,
"proyecto_colegios_ilo:provincias": provincias,
"proyecto_colegios_ilo:distritos": distritos,
"proyecto_colegios_ilo:colegios": colegios
};
L.control.layers(baseMaps, overlayMaps,{
position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
collapsed: false // true
}).addTo(map);