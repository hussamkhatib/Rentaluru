import mapboxgl, { GeoJSONSource, MapLayerMouseEvent } from "mapbox-gl";
import { useCallback, useRef, useState } from "react";
import ReactMap, { MapRef } from "react-map-gl";
import { useDispatch, useSelector } from "react-redux";
import {
  removeActiveArea,
  setActiveArea,
  selectIsAreaActive,
} from "../../app/services/activeAreaSlice";
import { ActiveAreaState } from "../../app/types/activeArea";
import NavView from "../nav/NavView";
import Layers from "./Layers";
import { clusterLayer } from "./Layers/Clusters/clusters.constant";
import ToolTip from "./Tooltip";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "";

const MapView = () => {
  const mapRef = useRef<MapRef>(null!);
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

    if (!feature) return dispatch(removeActiveArea());
    const { source } = feature;

    if (source === "cluster") {
      const clusterId = feature.properties?.cluster_id;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const center = feature.geometry?.coordinates;

      const mapboxSource = mapRef.current.getSource("cluster") as GeoJSONSource;
      mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err) return;
        mapRef.current.easeTo({
          center,
          zoom,
          duration: 500,
        });
      });
    }
    if (source === "polygon") {
      const properties = feature.properties as ActiveAreaState;
      dispatch(setActiveArea(properties));
    }
  };

  const onHover = useCallback((event: MapLayerMouseEvent) => {
    const {
      features,
      point: { x, y },
    } = event;
    const hoveredFeature = features?.[0] && features[0].properties;
    setHoverInfo(hoveredFeature && { property: hoveredFeature, x, y });
  }, []);

  const onNavigate = useCallback(
    ({ longitude, latitude }: { longitude: number; latitude: number }) => {
      mapRef.current?.flyTo({ center: [longitude, latitude], duration: 2000 });
    },
    []
  );

  return (
    <>
      <NavView onNavigate={onNavigate} />
      <ReactMap
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        interactiveLayerIds={
          isAreaActive
            ? ["data", "data-highlighted", clusterLayer.id!]
            : ["data"]
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
    </>
  );
};

export default MapView;
