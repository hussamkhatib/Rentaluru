import mapboxgl from "mapbox-gl";
import { useCallback, useState } from "react";
import ReactMap, { Source, Layer } from "react-map-gl";
import getLayerStyles from "./getLayerStyles";
import { useDispatch, useSelector } from "react-redux";
import { openLeftPanel } from "../../redux/leftPanelSlice";
import { setActiveArea } from "../../redux/activeAreaSlice";
import { useGetGeojsonQuery } from "../../redux/filterAPI";
import { selectFilterQuery } from "../../redux/filterQuerySlice";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "";

const Map = () => {
  const dispatch = useDispatch();
  const [viewState, setViewState] = useState({
    longitude: 77.57,
    latitude: 12.89,
    zoom: 10.4,
    pitch: 45,
    bearing: 340,
  });

  const [hoverInfo, setHoverInfo] = useState<any>(null);

  const handleClick = (e: any) => {
    const { features } = e;

    if (features[0]) {
      dispatch(setActiveArea(features[0].properties));
      dispatch(openLeftPanel());
    }
  };

  /* @ts-ignore TODO: //FIX THIS */
  const onHover = useCallback((event) => {
    const {
      features,
      point: { x, y },
    } = event;
    setHoverInfo({ x, y });
    const hoveredFeature = features?.[0] && features[0].properties;
    setHoverInfo(hoveredFeature && { property: hoveredFeature, x, y });
  }, []);

  return (
    <ReactMap
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      interactiveLayerIds={["data"]}
      style={{ width: "100vw", height: "100vh" }}
      mapboxAccessToken={mapboxgl.accessToken}
      onClick={handleClick}
      onMouseMove={onHover}
      mapStyle="mapbox://styles/mapbox/dark-v10"
    >
      <Polygons />
      <ToolTip hoverInfo={hoverInfo} />
    </ReactMap>
  );
};

export default Map;

const Polygons = () => {
  const filterQuery = useSelector(selectFilterQuery);
  const { data, isLoading, isError } = useGetGeojsonQuery(filterQuery);
  if (isLoading || isError) return null;
  const laterStyles = getLayerStyles("avgRent", data.min, data.max);
  return data?.data ? (
    <>
      {/* @ts-ignore TODO: //FIX THIS */}
      <Source id="my-data" type="geojson" data={data.data}>
        <Layer {...laterStyles} />
      </Source>
    </>
  ) : null;
};

const ToolTip = ({ hoverInfo }: any) => {
  if (!hoverInfo) return null;
  return (
    <div
      className="fixed z-10 m-2 p-1 max-w-xs pointer-events-none bg-white rounded-xl px-3"
      style={{ left: hoverInfo.x, top: hoverInfo.y }}
    >
      <span>{hoverInfo?.property?.name}</span>
    </div>
  );
};
