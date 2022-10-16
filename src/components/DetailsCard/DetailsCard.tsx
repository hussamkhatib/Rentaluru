import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import { useSelector } from "react-redux";
import { useGetAreaDetailsQuery } from "../../redux/areaAPI";
import { selectFilterQuery } from "../../redux/filterQuerySlice";

const DetailsCard = () => {
  const filterQuery = useSelector(selectFilterQuery);
  const activeArea = useSelector((state: any) => state.activeArea);
  const { data, isLoading, isError } = useGetAreaDetailsQuery({
    area_id: activeArea.area_id,
    queryParam: filterQuery,
  });
  if (isLoading || isError) return <div>Loading ...</div>;
  const { avgRent, maxRent, minRent } = data[0];

  return (
    <div className="py-2 px-4">
      <div className="bg-[#153757] rounded mt-2  px-2 py-1 text-white text-lg flex justify-between">
        <span>Average rent</span>
        <span className="text-[#00FFA4]">₹{Math.ceil(avgRent)}</span>
      </div>
      <div>
        <div className="  mt-1  px-2 text-white text-lg flex justify-between">
          <span className="flex items-center">
            <ArrowTrendingDownIcon className="text-green-700 h-6 px-1 " /> Min
            Rent
          </span>
          <span className="">₹{minRent}</span>
        </div>
        <div className="  mt-1  px-2 text-white text-lg flex justify-between">
          <span className="flex items-center">
            <ArrowTrendingUpIcon className="text-orange-700 h-6 px-1 " /> Max
            rent
          </span>
          <span className="">₹{maxRent}</span>
        </div>
      </div>
    </div>
  );
};
export default DetailsCard;
