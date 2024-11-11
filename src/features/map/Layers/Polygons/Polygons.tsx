import { Source, Layer } from "react-map-gl";
import { selectActiveAreaId } from "../../../leftPanel/leftPanelSlice";
import { useGetGeojsonQuery } from "../../../../app/services/filterAPI";
import { useTypedSelector } from "../../../../app/store";
import { selectFilterQueryParams } from "../../../filter/filterSlice";
import getLayerStyles from "./polygons.utils";

const Polygons = () => {
  const area_id = useTypedSelector(selectActiveAreaId);
  const queryParam = useTypedSelector(selectFilterQueryParams);

  const { data, isLoading, isError } = useGetGeojsonQuery(queryParam);

  if (isLoading || isError) return null;
  const { layer, highlightedLayer } = getLayerStyles(
    area_id,
    "avgRent",
    data.min,
    data.max
  );

  if (area_id === 244) {
    console.log(data.data, layer, highlightedLayer);
  }

  return (
    <Source id="polygon" type="geojson" data={data.data}>
      <Layer {...layer} />
      {area_id && <Layer {...highlightedLayer} />}
    </Source>
  );
};

export default Polygons;
