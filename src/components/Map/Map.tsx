import mapboxgl, { GeoJSONSource, MapLayerMouseEvent } from "mapbox-gl";
import { useCallback, useRef, useState } from "react";
import ReactMap, { MapRef } from "react-map-gl";
import { useDispatch, useSelector } from "react-redux";
import {
  removeActiveArea,
  setActiveArea,
  selectIsAreaActive,
} from "../../redux/activeAreaSlice";
import Layers from "./Layers";
import { clusterLayer } from "./Layers/Clusters/clusters.constant";
import ToolTip from "./Tooltip";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "";

const Map = () => {
  const mapRef = useRef<MapRef>(null);
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
    const feature = e.features?.[0];
    console.log(feature);

    if (!feature) return dispatch(removeActiveArea());

    // const mapboxSource = mapRef.current.getSource(
    //   "cluster"
    // ) as GeoJSONSource;

    // mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
    //   if (err) {
    //     return;
    //   }

    //   mapRef.current.easeTo({
    //     center: feature.geometry.coordinates,
    //     zoom,
    //     duration: 500,
    //   });
    // });
    // ("polygon");

    const { source } = feature;
    if (source === "polygon") dispatch(setActiveArea(feature.properties));
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
        isAreaActive ? ["data", "data-highlighted", clusterLayer.id!] : ["data"]
      }
      style={{ width: "100vw", height: "100vh" }}
      mapboxAccessToken={mapboxgl.accessToken}
      onClick={handleClick}
      onMouseMove={onHover}
      mapStyle="mapbox://styles/mapbox/dark-v10"
      ref={mapRef}
    >
      <Layers />
      <ToolTip hoverInfo={hoverInfo} />
    </ReactMap>
  );
};

export default Map;
