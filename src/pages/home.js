import React, { useState, useEffect } from "react";
import SidebarComp from "../components/SideBar";
import LeafletMap from "../components/LeafletMap";
import { fetchNearestLocationsDaratUdara } from "../store/fromAgregator";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const [mapCenter, setMapCenter] = useState([]);
  const [mapZoom, setMapZoom] = useState(12);
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState("");
  const [params, setParams] = useState({
    latitude: "",
    longitude: "",
    type: "",
  });
  const [tempNearest, setTempNearest] = useState(null);

  useEffect(() => {
    setParams({
      latitude: "-6.961081081779452",
      longitude: "107.64059197157621",
      type: "ODC",
    });
  }, []);

  useEffect(() => {
    if (params.latitude && params.longitude && params.type) {
      if (source === "darat") {
        handleLocationSubmit(params);
      } else {
        handleSetSource("darat");
      }
    }
  }, [params]);

  useEffect(() => {
    if (vehicles.length > 0) {
      setSelectedVehicle(vehicles);
    }
  }, [vehicles]);

  useEffect(() => {
    if (selectedVehicle.length > 0) {
      setMapCenter([selectedVehicle[0].LATITUDE, selectedVehicle[0].LONGITUDE]);
      setMapZoom(selectedVehicle.length <= 1 ? 17 : 15);
    }
  }, [selectedVehicle]);

  useEffect(() => {
    if (source) {
      if (tempNearest) {
        setVehicles(tempNearest[source]);
      } else {
        handleLocationSubmit(params);
      }
    }
  }, [source]);

  const handleListItemClick = (index) => {
    const clickedVehicle = vehicles[index];
    if (index.length === 0) {
      setSelectedVehicle(vehicles);
      return;
    }
    setSelectedVehicle([clickedVehicle]);
  };

  let nearestLocations = {};
  const handleLocationSubmit = async (param) => {
    setLoading(true);
    try {
      if (source === "darat") {
        nearestLocations = await fetchNearestLocationsDaratUdara(
          param.latitude,
          param.longitude,
          param.type
        );
        setTempNearest(nearestLocations);
        setVehicles(nearestLocations[source]);
      }
    } catch (error) {
      console.error("Failed to fetch locations", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSetSource = (data) => {
    setSource(data);
  };

  const handleSetParam = (data) => {
    setParams(data);
    setTempNearest(null);
  };

  return (
    <div className="h-[calc(100%+48px)] flex">
      <div className="flex-none">
        <SidebarComp
          vehicles={vehicles}
          handleListItemClick={(index) => handleListItemClick(index)}
          onSetRadio={handleSetSource}
          source={source}
          onSetParam={handleSetParam}
        />
      </div>
      <div className="flex-1">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <ClipLoader size={50} color={"#123abc"} loading={loading} />
          </div>
        ) : (
          mapCenter.length > 0 && (
            <LeafletMap
              vehicles={selectedVehicle}
              center={mapCenter}
              zoom={mapZoom}
              setLocbyParam={params}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Home;
