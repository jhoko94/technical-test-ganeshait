import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchNearestLocationsDaratUdara = async (
  latitude,
  longitude,
  type
) => {
  try {
    const formData = new FormData();
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("type", type);

    const response = await axios.post(
      `${API_BASE_URL}/datafromagregator/FindDevicebyLatLon`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching nearest locations:", error);
    throw error;
  }
};
