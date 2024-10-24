import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import RoutingMachine from "./RoutingMachine";
import { MapMarkerAccountIcon, MapMarkerIcon2 } from "./iconSVG/pin";
import ReactDOMServer from "react-dom/server";
import { Typography } from "@material-tailwind/react";

const RoutingMap = ({ vehicles, center, zoom, setLocbyParam }) => {
  const v = vehicles[0];
  const vLat = vehicles[0]?.LATITUDE;
  const vLong = vehicles[0]?.LONGITUDE;
  return (
    <MapContainer center={center} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <RoutingMachine
        position={[setLocbyParam.latitude, setLocbyParam.longitude]}
        vehicle={[vLat, vLong]}
      />
      <Marker
        key="me_loc01"
        // eslint-disable-next-line no-undef
        icon={L.divIcon({
          html: ReactDOMServer.renderToString(<MapMarkerIcon2 />),
          iconSize: [32, 32],
        })}
        position={[setLocbyParam.latitude, setLocbyParam.longitude]}
      ></Marker>
      <Marker
        key="me_loc02"
        // eslint-disable-next-line no-undef
        icon={L.divIcon({
          html: ReactDOMServer.renderToString(<MapMarkerAccountIcon />),
          iconSize: [32, 32],
        })}
        position={[vLat, vLong]}
      >
        <MarkerDetails v={v} />
      </Marker>
    </MapContainer>
  )
}

export const MarkerDetails = ({v}) => {
  const distance = v.DISTANCE_DARAT || v.DISTANCE_DARAT_GRAPHOOPER || v.DISTANCE_DARAT_OSRM;
  return (
    <Popup>
      <div>
        <Typography variant="h5" className="mb-2">
          {v.DEVICE_NAME}
        </Typography>
        <table className="w-full min-w-max table-auto text-left">
          <tbody>
            <tr>
              <td>Device Id</td>
              <td>: {v.DEVICE_ID}</td>
            </tr>
            <tr>
              <td>Device Location</td>
              <td>: {v.DEVICE_LOCATION}</td>
            </tr>
            <tr>
              <td>Device Type</td>
              <td>: {v.DEVICE_TYPE}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>: {v.DEVICE_ADDRESS}</td>
            </tr>
            <tr>
              <td>Land Distance</td>
              <td>: {distance}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Popup>
  )
};

export default RoutingMap;
