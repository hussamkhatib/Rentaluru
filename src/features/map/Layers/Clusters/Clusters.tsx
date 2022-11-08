import { Source, Layer } from "react-map-gl";
import { selectActiveAreaId } from "../../../../app/services/activeAreaSlice";
import { useGetAreaDetailsQuery } from "../../../../app/services/areaAPI";
import { useTypedSelector } from "../../../../app/store";
import { selectFilterQueryParams } from "../../../filter/filterSlice";
import {
  clusterCountLayer,
  clusterLayer,
  unclusteredPointLayer,
} from "./clusters.constant";

const Clusters = () => {
  const queryParam = useTypedSelector(selectFilterQueryParams);
  const area_id = useTypedSelector(selectActiveAreaId);

  const { data, isFetching, isError } = useGetAreaDetailsQuery(
    {
      area_id,
      queryParam,
    },
    {
      skip: !area_id,
    }
  );

  if (!area_id || isFetching) return null;
  if (isError || !data) return null;

  return (
    <Source
      id="cluster"
      type="geojson"
      data={data.points}
      cluster={true}
      clusterMaxZoom={14}
      clusterRadius={50}
    >
      <Layer {...clusterLayer} />
      <Layer {...clusterCountLayer} />
      <Layer {...unclusteredPointLayer} />
    </Source>
  );
};
export default Clusters;
