import {
  BoltIcon,
  CloudIcon,
  MapIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useSelector } from "react-redux";
import { useGetAreaDetailsQuery } from "../../app/services/areaAPI";
import Loader from "../Loader";

const Rating = () => {
  const activeArea = useSelector((state: any) => state.activeArea);
  const { data, isLoading, isError } = useGetAreaDetailsQuery({
    area_id: activeArea.area_id,
    // queryParam: filterQuery,
  });
  if (isLoading || isError) return <Loader />;
  if (!data[0])
    return (
      <div className="text-white">
        Noone has submitted their room details in this area at the specified
        filter if any.
      </div>
    );
  const { avgElectricity, avgWater, avgTransportation } = data[0];

  return (
    <div className="p-2">
      <div className="grid grid-cols-2 gap-3">
        <RatingCard
          title="Electricity"
          icon={<BoltIcon className="h-6 w-6 text-[#00FFA4]" aria-hidden />}
          stars={Math.ceil(avgElectricity)}
        />
        <RatingCard
          title="Water"
          icon={<CloudIcon className="h-6 w-6 text-[#00FFA4]" aria-hidden />}
          stars={Math.ceil(avgWater)}
        />
        <RatingCard
          title="Transport"
          icon={<MapIcon className="h-6 w-6 text-[#00FFA4]" aria-hidden />}
          stars={Math.ceil(avgTransportation)}
        />
      </div>
    </div>
  );
};

export default Rating;

const RatingCard = ({ icon, title, stars }: any) => {
  return (
    <div className="">
      <div className="w-40 h-36 rounded-xl bg-[#102B44]  flex items-center justify-center text-white">
        <div className="flex-col h-full justify-evenly flex  items-center">
          <div className="bg-[#153757] flex rounded-full px-2 py-3 w-10 h-10 items-center ">
            {icon}
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm">{title}</span>

            <div className="flex items-center">
              {Array.from({ length: 5 }, (_, i) => {
                return stars > i ? (
                  <StarIcon className="h-4 w-4 text-[#00FFA4]" key={i} />
                ) : (
                  <OutlineStarIcon className="h-4 w-4 text-[#00FFA4]" key={i} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
