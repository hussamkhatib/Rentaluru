import { Source, Layer } from "react-map-gl";
import { selectActiveAreaId } from "../../../../app/services/activeAreaSlice";
import { useGetGeojsonQuery } from "../../../../app/services/filterAPI";
import { useTypedSelector } from "../../../../app/store";
import { getQueryParams } from "../../../../features/filter/filter.helper";
import getLayerStyles from "./polygons.utils";

const Polygons = () => {
  const area_id = useTypedSelector(selectActiveAreaId);
  const filters = useTypedSelector((state) => state.filter);

  const { data, isLoading, isError } = useGetGeojsonQuery(
    getQueryParams(filters)
  );

  if (isLoading || isError || !area_id) return null;
  const { layer, highlightedLayer } = getLayerStyles(
    area_id,
    "avgRent",
    data.min,
    data.max
  );

  return (
    <Source id="polygon" type="geojson" data={data.data}>
      <Layer {...layer} />
      {area_id && <Layer {...highlightedLayer} />}
    </Source>
  );
};

export default Polygons;
