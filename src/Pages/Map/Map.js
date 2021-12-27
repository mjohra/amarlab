import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  return (
    <div className="mt-5 mb-5">
      <MapContainer center={[23.755672552465157, 90.44116845500815]} zoom={12} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[23.755672552465157, 90.44116845500815]}>
          <Popup>
          South Banashree,Rampura. <br /> Dhaka,Bangladesh.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
