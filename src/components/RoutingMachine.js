import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import 'leaflet-routing-machine';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const RoutingMachine = ({ vehicle, position }) => {
  const map = useMap();
  const routingControlRef = useRef(null);

  useEffect(() => {
    if (!map) return;

    if (routingControlRef.current) {
      routingControlRef.current.setWaypoints([L.latLng(position), L.latLng(vehicle)]);
    } else {
      routingControlRef.current = L.Routing.control({
        waypoints: [L.latLng(position), L.latLng(vehicle)],
        lineOptions: {
          styles: [{ color: "#6FA1EC", weight: 12 }]
        },
        createMarker: () => null,
      }).addTo(map);
    }
  }, [map, vehicle, position]);

  return null;
}

export default RoutingMachine;
