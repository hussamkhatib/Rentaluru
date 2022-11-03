// import { useMemo } from "react";
import { Source, Layer } from "react-map-gl";
import { useSelector } from "react-redux";
import { selectActiveAreaId } from "../../../redux/activeAreaSlice";
import { useGetGeojsonQuery } from "../../../redux/filterAPI";
import { selectFilterQuery } from "../../../redux/filterQuerySlice";
import { getLayerStyles } from "./polygons.utils";

const Polygons = () => {
  const filterQuery = useSelector(selectFilterQuery);
  const activeAreaId = useSelector(selectActiveAreaId);

  const { data, isLoading, isError } = useGetGeojsonQuery(filterQuery);
  if (isLoading || isError) return null;
  const { layer, highlightedLayer } = getLayerStyles(
    activeAreaId,
    "avgRent",
    data.min,
    data.max
  );

  return data?.data ? (
    <>
      <Source id="my-data" type="geojson" data={data.data}>
        <Layer {...layer} />
        {activeAreaId && <Layer {...highlightedLayer} />}
      </Source>
    </>
  ) : null;
};

export default Polygons;
