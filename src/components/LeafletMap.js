import React, { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapMarkerAccountIcon, MapMarkerIcon2 } from "./iconSVG/pin";
import { Typography } from "@material-tailwind/react";

const LeafletMap = ({ vehicles, center, zoom, setLocbyParam }) => {
  const mapRef = useRef(null);
  const [mapKey, setMapKey] = useState(Date.now());

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(center, mapRef.current.getZoom());
    }
    refreshMap();
  }, [center]);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setZoom(zoom);
    }
    refreshMap();
  }, [zoom]);

  const handleMapCreated = (mapInstance, mapRef) => {
    mapRef.current = mapInstance;
  };

  const refreshMap = () => {
    setMapKey(Date.now());
  };

  return (
    <MapContainer
      key={mapKey}
      center={center}
      zoom={zoom}
      whenCreated={(mapInstance) => handleMapCreated(mapInstance, mapRef)}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        key="me_loc01"
        position={[setLocbyParam.latitude, setLocbyParam.longitude]}
        // eslint-disable-next-line no-undef
        icon={L.divIcon({
          html: ReactDOMServer.renderToString(<MapMarkerIcon2 />),
          iconSize: [32, 32],
        })}
      ></Marker>
      {vehicles.map((vehicle) => (
        <Marker
          key={vehicle.DEVICE_ID}
          position={[vehicle.LATITUDE, vehicle.LONGITUDE]}
          // eslint-disable-next-line no-undef
          icon={L.divIcon({
            html: ReactDOMServer.renderToString(<MapMarkerAccountIcon />),
            iconSize: [32, 32],
          })}
        >
          <Popup>
            <div>
              <Typography variant="h5" className="mb-2">
                {vehicle.DEVICE_NAME}
              </Typography>
              <table className="w-full min-w-max table-auto text-left">
                <tbody>
                  <tr>
                    <td>Device Id</td>
                    <td>: {vehicle.DEVICE_ID}</td>
                  </tr>
                  <tr>
                    <td>Device Location</td>
                    <td>: {vehicle.DEVICE_LOCATION}</td>
                  </tr>
                  <tr>
                    <td>Device Type</td>
                    <td>: {vehicle.DEVICE_TYPE}</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>: {vehicle.DEVICE_ADDRESS}</td>
                  </tr>
                  <tr>
                    <td>Land Distance</td>
                    <td>: {vehicle.DISTANCE_DARAT}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;
