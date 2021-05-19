import React, { useState } from "react";

import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { icon as leafletIcon } from "leaflet";
//import "leaflet/dist/leaflet.css";

import gitHub from "../../resources/images/github.jpg";
const position = [62.600818, 29.762092];
const fakeData = [
  {
    name: "Tori",
    geoJson: { lat: 62.600818, lng: 29.762092 },
    image: gitHub
  },
  {
    name: "Iso-Myy",
    geoJson: { lat: 62.601934, lng: 29.763317 },
    image: gitHub
  },
];

function Kartta(props) {
  const [markersData, setMarkersData] = useState(fakeData);

  const onClick = (event) => {
    setMarkersData([
      ...markersData,
      {
        name: "Uusi",
        geoJson: {
          lat: event.latlng.lat,
          lng: event.latlng.lng,
        },
        image: gitHub,
      },
    ]);
  };
  const customMarkerIcon = leafletIcon({
    iconUrl: gitHub,
    iconSize: [16, 16],
    iconAnchor: [12, 12],
    popupAnchor: [-3, -36],
  });
  return (
    <Map
      style={{ height: "400px" }}
      center={position}
      zoom={13}
      onClick={(event) => onClick(event)}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="http://tile.thunderforest.com/landscape/{z}/{x}/{y}.png"
      />
      <TileLayer
        url="https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png"
      />
      {markersData.map((location) => (
        <Marker
          key={JSON.stringify(location.geoJson)}
          position={[location.geoJson.lat, location.geoJson.lng]}
          icon={customMarkerIcon}
        >
          <Popup>
            <img src={location.image} />
            {location.name}
          </Popup>
        </Marker>
      ))}
    </Map>
  );
}

export default Kartta;
