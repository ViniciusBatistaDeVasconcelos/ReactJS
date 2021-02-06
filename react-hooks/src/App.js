import React, { useState, useEffect } from "react";

export default function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived);

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  function handlePositionReceived({ coords }) {
    const { latitude, longitude } = coords;

    setLocation({ latitude, longitude });
  }

  return (
    <div>
      <h1>Latitude: {location.latitude}</h1> <br />
      <h1>Longitude: {location.longitude}</h1>
    </div>
  );
}