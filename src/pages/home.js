import React, { useState } from "react";
import SidebarComp from "../components/SideBar";
import LeafletMap from "../components/LeafletMap";
import vehiclelist from "../store/dummy/vehicle";

const Home = () => {
  const [mapCenter, setMapCenter] = useState([
    vehiclelist.data.vehicles[0].latitude,
    vehiclelist.data.vehicles[0].longitude,
  ]);
  const [mapZoom, setMapZoom] = useState(12);
  const vehicles = vehiclelist.data.vehicles;

  return (
    <div className="h-[calc(100%+48px)] flex">
      <div className="flex-none">
        <SidebarComp
          vehicles={vehicles}
          setMapCenter={setMapCenter}
          setMapZoom={setMapZoom}
        />
      </div>
      <div className="flex-1">
        <LeafletMap vehicles={vehicles} center={mapCenter} zoom={mapZoom} />
      </div>
    </div>
  );
};

export default Home;
