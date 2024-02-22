import { Card, Typography, List, ListItem } from "@material-tailwind/react";

function SidebarComp({ vehicles, setMapCenter, setMapZoom }) {
  const handleListItemClick = (index) => {
    const clickedVehicle = vehicles[index];
    setMapCenter([clickedVehicle.latitude, clickedVehicle.longitude]);
    setMapZoom(15);
  };

  return (
    <Card className="h-[calc(100vh-5rem)] w-full w-[25rem] shadow-xl shadow-blue-gray-900/5">
      <List className="overflow-auto">
        {vehicles.map((vehicle, index) => (
          <Card key={index}>
            <ListItem onClick={() => handleListItemClick(index)} ripple={false}>
              <div>
                <Typography variant="h6" color="blue-gray">
                  {vehicle.nopol}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {vehicle.vehiclename}
                </Typography>
              </div>
            </ListItem>
          </Card>
        ))}
      </List>
    </Card>
  );
}

export default SidebarComp;
