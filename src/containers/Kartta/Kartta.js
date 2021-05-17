import React from "react";

import { Map, Marker, Popup, TileLayer } from "react-leaflet";
//import "leaflet/dist/leaflet.css";

const position = [62.600818, 29.762092];

const fakeData = [
  { name: "Tori", geoJson: { lat: 62.600818, lon: 29.762092 } },
  { name: "Iso-Myy", geoJson: { lat: 62.601934, lon: 29.763317 } },
];

function Kartta(props) {
  return (
    <Map style={{ height: "400px" }} center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {fakeData.map((location) => (
        < Marker position={[location.geoJson.lat, location.geoJson.lon]} >
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </Map >
  );
}

export default Kartta;