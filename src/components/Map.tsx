import mapboxgl from "mapbox-gl";
import { useState } from "react";
import ReactMap, { Source, Layer } from "react-map-gl";
import { data } from "../temp";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "";

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Polygon", coordinates: data },
    },
  ],
};

const layerStyle = {
  id: "area",
  type: "fill",
  paint: {
    // "fill-opacity": 0.7,
    "fill-outline-color": "rgb(52,51,50)",
    "fill-color": "#007cbf",
  },
};

const Map = () => {
  const [viewState, setViewState] = useState({
    longitude: 77.47,
    latitude: 12.89,
    zoom: 11,
  });

  return (
    <ReactMap
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width: "100vw", height: "100vh" }}
      mapboxAccessToken={mapboxgl.accessToken}
      mapStyle="mapbox://styles/mapbox/dark-v9"
    >
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
    </ReactMap>
  );
};

export default Map;
