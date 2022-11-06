import { Source, Layer } from "react-map-gl";
import { useSelector } from "react-redux";
import { useGetAreaDetailsQuery } from "../../../../redux/areaAPI";
import { selectFilterQuery } from "../../../../redux/filterQuerySlice";
import Loader from "../../../Loader";
import { clusterLayer } from "./clusters.constant";

const Clusters = () => {
  const filterQuery = useSelector(selectFilterQuery);
  const activeArea = useSelector((state: any) => state.activeArea);
  const { data, isLoading, isError } = useGetAreaDetailsQuery(
    {
      area_id: activeArea?.area_id,
      queryParam: filterQuery,
    },
    {
      skip: !activeArea?.area_id,
    }
  );
  if (!activeArea) return null;
  if (isLoading) return <Loader />;

  if (isError || !data) return null;

  return (
    <Source
      id="earthquakes"
      type="geojson"
      data={data.points}
      cluster={true}
      clusterMaxZoom={14}
      clusterRadius={50}
    >
      <Layer {...clusterLayer} />
    </Source>
  );
};
export default Clusters;
