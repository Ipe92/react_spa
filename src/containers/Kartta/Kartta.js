import React from 'react';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css"

const position = [62.60081, 29.76191];
const isoMyyPosition = [62.601934, 29.763317];

function Kartta(props) {
    return (
        <MapContainer style={{ height: "400px" }} center={position} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>Tori</Popup>
            </Marker>
            <Marker position={isoMyyPosition}>
                <Popup>Iso-Myy</Popup>
            </Marker>
        </MapContainer>
    );
}

export default Kartta;