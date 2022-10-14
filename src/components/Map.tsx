import mapboxgl from "mapbox-gl";
import { useState } from "react";
import ReactMap, { Source, Layer } from "react-map-gl";
import geojson from "../data";
import layerStyle from "../layerStyles";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "";

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
      mapStyle="mapbox://styles/mapbox/dark-v10"
    >
      {/* @ts-ignore TODO: //FIX THIS */}
      <Source id="my-data" type="geojson" data={geojson}>
        {/* @ts-ignore TODO: //FIX THIS */}
        <Layer {...layerStyle} />
      </Source>
    </ReactMap>
  );
};

export default Map;
