import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Chip,
  Button,
  Radio,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import LocationForm from "../components/LocationForm";

function SidebarComp(props) {
  const [selectedRadio, setSelectedRadio] = useState("");

  useEffect(() => {
    if (props.source) {
      setSelectedRadio(props.source);
    }
  }, [props.source]);

  const handleListItemClick = (index) => {
    props.handleListItemClick(index);
  };

  const handleRadioChange = (event) => {
    const newSource = event.target.value;
    props.onSetRadio(newSource);
  };

  const handleLocationSubmit = async ({ latitude, longitude, type }) => {
    props.onSetParam({
      latitude: latitude,
      longitude: longitude,
      type: type,
    });
  };

  return (
    <Card className="h-[calc(100vh-5rem)] w-full w-[25rem] shadow-xl shadow-blue-gray-900/5">
      <LocationForm onSubmit={handleLocationSubmit} />
      <Card className="mx-[.5em]">
        <List className="flex-row">
          <ListItem className="p-0">
            <label
              htmlFor="horizontal-list-react"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Radio
                  value="darat"
                  checked={selectedRadio === "darat"}
                  onChange={handleRadioChange}
                  name="horizontal-list"
                  id="horizontal-list-react"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="font-medium text-blue-gray-400"
              >
                Darat
              </Typography>
            </label>
          </ListItem>
          <ListItem className="p-0">
            <label
              htmlFor="horizontal-list-vue"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Radio
                  value="udara"
                  checked={selectedRadio === "udara"}
                  onChange={handleRadioChange}
                  name="horizontal-list"
                  id="horizontal-list-vue"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="font-medium text-blue-gray-400"
              >
                Udara
              </Typography>
            </label>
          </ListItem>
        </List>
      </Card>
      <Button
        onClick={() => handleListItemClick([])}
        className="bg-gradient-to-r from-purple-500 to-pink-500 capitalize font-light my-[.5em] mx-[.5em]"
        ripple={false}
      >
        Show All Nearby Devices
      </Button>
      <List className="overflow-auto">
        {props.vehicles.map((vehicle, index) => (
          <Card key={index}>
            <ListItem
              className="group rounded-none py-1.5 px-3 text-sm font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
              onClick={() => handleListItemClick(index)}
              ripple={false}
            >
              <ListItemPrefix className="block">
                <Typography
                  className="grid grid-cols-5"
                  variant="h6"
                  color="blue-gray"
                >
                  {vehicle.DEVICE_ID}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {vehicle.DEVICE_NAME}
                </Typography>
              </ListItemPrefix>
              <ListItemPrefix>
                <Chip
                  value={
                    props.source
                      ? props.source === "darat"
                        ? vehicle.DISTANCE_DARAT
                        : vehicle.DISTANCE_UDARA
                      : ""
                  }
                  variant="ghost"
                  size="sm"
                  className="rounded-full px-2 py-1 text-xs group-hover:bg-white/20 group-hover:text-white"
                />
              </ListItemPrefix>
            </ListItem>
          </Card>
        ))}
      </List>
    </Card>
  );
}

export default SidebarComp;
