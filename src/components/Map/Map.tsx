import mapboxgl, { MapLayerMouseEvent } from "mapbox-gl";
import { useCallback, useState } from "react";
import ReactMap from "react-map-gl";
import { useDispatch, useSelector } from "react-redux";
import {
  removeActiveArea,
  setActiveArea,
  selectIsAreaActive,
} from "../../redux/activeAreaSlice";
import Polygons from "./Polygons";
import ToolTip from "./Tooltip";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "";

const Map = () => {
  const dispatch = useDispatch();
  const isAreaActive = useSelector(selectIsAreaActive);
  const [viewState, setViewState] = useState({
    longitude: 77.57,
    latitude: 12.89,
    zoom: 10.4,
    pitch: 45,
    bearing: 340,
  });

  const [hoverInfo, setHoverInfo] = useState<any>(null);

  const handleClick = (e: MapLayerMouseEvent) => {
    const { features } = e;

    features?.[0]
      ? dispatch(setActiveArea(features[0].properties))
      : dispatch(removeActiveArea());
  };

  const onHover = useCallback((event: MapLayerMouseEvent) => {
    const {
      features,
      point: { x, y },
    } = event;
    const hoveredFeature = features?.[0] && features[0].properties;
    setHoverInfo(hoveredFeature && { property: hoveredFeature, x, y });
  }, []);

  return (
    <ReactMap
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      interactiveLayerIds={
        isAreaActive ? ["data", "data-highlighted"] : ["data"]
      }
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
