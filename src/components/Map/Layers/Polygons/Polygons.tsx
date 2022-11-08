import { Source, Layer } from "react-map-gl";
import { useSelector } from "react-redux";
import { selectActiveAreaId } from "../../../../app/services/activeAreaSlice";
import { useGetGeojsonQuery } from "../../../../app/services/filterAPI";
import { useTypedSelector } from "../../../../app/store";
import { getQueryParams } from "../../../../features/filter/filter.helper";
import getLayerStyles from "./polygons.utils";

const Polygons = () => {
  const activeAreaId = useSelector(selectActiveAreaId);

  const filters = useTypedSelector((state) => state.filter);

  const { data, isLoading, isError } = useGetGeojsonQuery(
    getQueryParams(filters)
  );

  if (isLoading || isError) return null;
  const { layer, highlightedLayer } = getLayerStyles(
    activeAreaId,
    "avgRent",
    data.min,
    data.max
  );

  return (
    <Source id="polygon" type="geojson" data={data.data}>
      <Layer {...layer} />
      {activeAreaId && <Layer {...highlightedLayer} />}
    </Source>
  );
};

export default Polygons;
