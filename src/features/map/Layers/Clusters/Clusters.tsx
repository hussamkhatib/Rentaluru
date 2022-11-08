import { Source, Layer } from "react-map-gl";
import { useSelector } from "react-redux";
import { useGetAreaDetailsQuery } from "../../../../app/services/areaAPI";
import { selectFilterQuery } from "../../../../app/services/filterQuerySlice";
import {
  clusterCountLayer,
  clusterLayer,
  unclusteredPointLayer,
} from "./clusters.constant";

const Clusters = () => {
  const filterQuery = useSelector(selectFilterQuery);
  const activeArea = useSelector((state: any) => state.activeArea);
  const { data, isFetching, isError } = useGetAreaDetailsQuery(
    {
      area_id: activeArea?.area_id,
      queryParam: filterQuery,
    },
    {
      skip: !activeArea?.area_id,
    }
  );
  if (!activeArea || isFetching) return null;
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
