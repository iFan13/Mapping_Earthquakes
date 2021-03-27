// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [37.6213, -102.3790],
    zoom: 5
});

// Coordinates for each point to be used in the line.
let line = [
    [37.6213, -122.3790], //SFO
    [30.1975, -97.6664], //AUS
    [43.6777, -79.6248], //YYZ
    [40.6413, -73.7781] //JFK
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    weight: 4,
    opacity: 0.5,
    dashArray: 8
    
 }).addTo(map);

// create the tile layer that will be the background of our map.
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //id: " <chosen from https://docs.mapbox.com/api/maps/styles/> ",
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "satellite-streets-v11",
    maxZoom: 18,
    accessToken: API_KEY
});

// add 'graymap' tile layer to the map.
streets.addTo(map);
