import React, { useState } from "react";
import { Input, Typography, Button } from "@material-tailwind/react";

const LocationForm = ({ onSubmit }) => {
  const [latitude, setLatitude] = useState("-6.961081081779452");
  const [longitude, setLongitude] = useState("107.64059197157621");
  const [type, setType] = useState("ODC");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (latitude && longitude) {
      onSubmit({ latitude, longitude, type });
    } else {
      alert("Please enter both latitude and longitude");
    }
  };

  return (
    <form className="mx-[.5em]" onSubmit={handleSubmit}>
      <div className="mt-2">
        <Typography className="text-sm mb-[2px]">Latitude</Typography>
        <Input
          type="text"
          size="sm"
          placeholder="Enter latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
      </div>
      <div className="mt-2">
        <Typography className="text-sm mb-[2px]">Longitude</Typography>
        <Input
          type="text"
          size="sm"
          placeholder="Enter longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
      </div>
      <div className="mt-2">
        <Typography className="text-sm mb-[2px]">Type</Typography>
        <Input
          type="text"
          size="sm"
          placeholder="Enter type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>
      <div className="text-right">
        <Button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-pink-500 capitalize font-light my-[.5em] mx-[.5em]"
          ripple={false}
        >
          Find Nearest Locations
        </Button>
      </div>
    </form>
  );
};

export default LocationForm;
