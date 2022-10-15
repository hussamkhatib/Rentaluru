import mapboxgl from "mapbox-gl";
import { useCallback, useState } from "react";
import ReactMap, { Source, Layer, FullscreenControl } from "react-map-gl";
import layerStyle from "../layerStyles";
import { useDispatch } from "react-redux";
import { openLeftPanel } from "../redux/leftPanelSlice";
import { useGetGeojsonQuery } from "../redux/filterAPI";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "";

const Map = () => {
  const dispatch = useDispatch();
  const [viewState, setViewState] = useState({
    longitude: 77.47,
    latitude: 12.89,
    zoom: 10.4,
    pitch: 45,
    bearing: 340,
  });

  const handleClick = (e: any) => {
    const { features } = e;
    if (features[0]) dispatch(openLeftPanel(true));
  };

  /* @ts-ignore TODO: //FIX THIS */
  const onHover = useCallback((event) => {
    const { features } = event;
    // console.log({ features });
    const hoveredFeature = features && features[0];
    // console.log(hoveredFeature);
  }, []);

  return (
    <ReactMap
      {...viewState}
      onMove={(evt) => {
        // console.log(evt);
        setViewState(evt.viewState);
      }}
      interactiveLayerIds={["data"]}
      style={{ width: "100vw", height: "100vh" }}
      mapboxAccessToken={mapboxgl.accessToken}
      onClick={handleClick}
      onMouseMove={onHover}
      mapStyle="mapbox://styles/mapbox/dark-v10"
    >
      <Polygons />
    </ReactMap>
  );
};

export default Map;

const Polygons = () => {
  const { data, isLoading } = useGetGeojsonQuery();
  if (isLoading) return null;

  return data?.data ? (
    <>
      {/* @ts-ignore TODO: //FIX THIS */}
      <Source id="my-data" type="geojson" data={data.data}>
        <Layer {...layerStyle} />
      </Source>
    </>
  ) : null;
};
