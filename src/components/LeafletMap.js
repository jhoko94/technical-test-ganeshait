import React from "react";
import ReactDOMServer from "react-dom/server";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapMarkerAccountIcon from "./iconSVG/pin";

const LeafletMap = ({ vehicles, center, zoom }) => {
  return (
    <MapContainer center={center} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {vehicles.map((vehicle) => (
        <Marker
          key={vehicle.vehicleid}
          position={[vehicle.latitude, vehicle.longitude]}
          // eslint-disable-next-line no-undef
          icon={L.divIcon({
            html: ReactDOMServer.renderToString(<MapMarkerAccountIcon />),
            iconSize: [32, 32],
          })}
        >
          <Popup>
            <div>
              <h2>{vehicle.vehiclename}</h2>
              <p>Nopol: {vehicle.nopol}</p>
              <p>Merk: {vehicle.merkname}</p>
              <p>Tipe: {vehicle.tipename}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;
