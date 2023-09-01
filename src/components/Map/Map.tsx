import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

import '../utils/fix-map-icon'
import './map.css'
import 'leaflet/dist/leaflet.css'


export const Map = () => {

    return(
        <div className="map">
            <MapContainer center={[52.5386053,19.6987952]} zoom={14}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[52.5386053,19.6987952]}>
                    <Popup >
                        <h2>Płock</h2>
                        <p>Stary Rynek</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}