import mapboxgl, { GeoJSONSource, MapLayerMouseEvent } from "mapbox-gl";
import { useCallback, useRef, useState } from "react";
import ReactMap, { MapRef } from "react-map-gl";
import {
  hideLeftPanel,
  setActiveArea,
  selectIsAreaActive,
  setActiveHouse,
} from "../leftPanel/leftPanelSlice";
import { useAppDispatch, useTypedSelector } from "../../app/store";
import { ActiveAreaState } from "../leftPanel/leftPanel.types";
import NavView from "../nav/NavView";
import Layers from "./Layers";
import {
  clusterLayer,
  unclusteredPointLayer,
} from "./Layers/Clusters/clusters.constant";
import ToolTip from "./Tooltip";
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "";

const MapView = () => {
  const mapRef = useRef<MapRef>(null!);
  const dispatch = useAppDispatch();
  const isAreaActive = useTypedSelector(selectIsAreaActive);
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

    if (!feature) return dispatch(hideLeftPanel());
    const { source, layer, properties, geometry } = feature;

    if (source === "cluster") {
      if (layer?.id === "unclustered-point") {
        dispatch(setActiveHouse(properties));
      } else {
        const clusterId = properties?.cluster_id;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const center = geometry?.coordinates;

        const mapboxSource = mapRef.current.getSource(
          "cluster"
        ) as GeoJSONSource;
        mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
          if (err || !zoom) return;
          mapRef.current.easeTo({
            center,
            zoom,
            duration: 500,
          });
        });
      }
    }

    if (source === "polygon") {
      dispatch(setActiveArea(properties as ActiveAreaState));
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
            ? [
              "data",
              "data-highlighted",
              clusterLayer.id!,
              unclusteredPointLayer.id!,
            ]
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
