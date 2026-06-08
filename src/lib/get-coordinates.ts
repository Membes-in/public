function success(position: GeolocationPosition): [number, number] {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  return [lat, lon];
}

export default function getCoordinates(): Promise<[number, number] | null> {
  if (!navigator.geolocation) {
    return Promise.resolve(null);
  }

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(success(position));
      },
      () => {
        // Location unavailable or denied — treat as optional, continue without it
        resolve(null);
      }
    );
  });
}