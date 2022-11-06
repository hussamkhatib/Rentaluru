import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import { useSelector } from "react-redux";
import { useGetAreaDetailsQuery } from "../../redux/areaAPI";
import { selectFilterQuery } from "../../redux/filterQuerySlice";
import Loader from "../Loader";

const Details = () => {
  const filterQuery = useSelector(selectFilterQuery);
  const activeArea = useSelector((state: any) => state.activeArea);
  const { data, isLoading, isError } = useGetAreaDetailsQuery({
    area_id: activeArea.area_id,
    queryParam: filterQuery,
  });

  if (isLoading) return <Loader />;
  if (isError) return <div className="text-white">Somthing went wrong</div>;
  const { data: details } = data;
  if (!details[0])
    return (
      <div className="text-white">
        Noone has submitted their room details in this area at the specified
        filter if any.
      </div>
    );
  const { avgRent, maxRent, minRent, avgDeposit, minDeposit, maxDeposit } =
    details[0];

  return (
    <>
      <DetailsCard title="Rent" avg={avgRent} min={minRent} max={maxRent} />
      <DetailsCard
        title="Deposit"
        avg={avgDeposit}
        min={minDeposit}
        max={maxDeposit}
      />
    </>
  );
};
export default Details;

const DetailsCard = ({
  title,
  avg,
  min,
  max,
}: {
  title: string;
  avg: number;
  min: number;
  max: number;
}) => {
  return (
    <div className="py-3 px-4">
      <div className="bg-[#153757] rounded mt-2  px-2 py-1 text-white text-lg flex justify-between">
        <span>Average {title}</span>
        <span className="text-[#00FFA4]">₹{Math.ceil(avg)}</span>
      </div>
      <div>
        <div className="  mt-1  px-2 text-white text-lg flex justify-between">
          <span className="flex items-center">
            <ArrowTrendingDownIcon className="text-[#00FFA4] h-6 px-1 " /> Min $
            {title}
          </span>
          <span className="">₹{min}</span>
        </div>
        <div className="  mt-1  px-2 text-white text-lg flex justify-between">
          <span className="flex items-center">
            <ArrowTrendingUpIcon className="text-red-500 h-6 px-1 " /> Max $
            {title}
          </span>
          <span className="">₹{max}</span>
        </div>
      </div>
    </div>
  );
};
