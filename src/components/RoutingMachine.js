import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import 'leaflet-routing-machine';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const RoutingMachine = ({ vehicle, position }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(position), L.latLng(vehicle)],
      routeWhileDragging: true,
      lineOptions: {
        styles: [{ color: "#6FA1EC", weight: 4 }]
      },
    }).addTo(map);

    return () => {
      if (map && routingControl) {
        routingControl.getPlan().setWaypoints([]);
        map.removeControl(routingControl);
      }
    };
  }, [map, vehicle, position]);

  return null;
}

export default RoutingMachine;
