export const getLocation = (setStatus, setLat, setLon) => {
  if (!navigator.geolocation) {
    setStatus("Geolocation not supported");
  } else {
    setStatus("Locating...");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
        console.log(
          `lat: ${position.coords.latitude} and lon: ${position.coords.longitude}`
        );
      },
      () => {
        setStatus("Can't obtain your location");
      }
    );
  }
};
