// create the tile layer that will be the background of our map.
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //id: " <chosen from https://docs.mapbox.com/api/maps/styles/> ",
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "streets-v11",
    maxZoom: 18,
    accessToken: API_KEY
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "satellite-streets-v11",
    maxZoom: 18,
    accessToken: API_KEY
});

let baseMaps = {"Streets" : streets, "Satellite Streets": satelliteStreets};

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [43.7, -79.3],
    zoom: 11,
    layers:[streets]
});


// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let torontoNeighbourhoods = "https://raw.githubusercontent.com/iFan13/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Create a style for the lines.
let myStyle = {
    color: "blue",
    weight: 1,
    fillColor: "yellow",
    fillOpacity: 0.5
}

// Grabbing our GeoJSON data.
d3.json(torontoNeighbourhoods).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data ,
    {
        style: myStyle,
        onEachFeature: function(feature,layer)
            {
                layer.bindPopup(`<h3>Neighbourhood: ${feature.properties.AREA_NAME}</h3>`);//<hr><h3>Destination: ${feature.properties.dst}</h3>`);
            }
        }
        ).addTo(map);});