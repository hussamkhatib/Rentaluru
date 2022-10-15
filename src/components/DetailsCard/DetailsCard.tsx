import {
  HomeModernIcon,
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const DetailsCard = () => {
  return (
    <div className="py-2 px-4">
      <div className="bg-[#153757] flex rounded-full px-2 py-3 w-10 h-10 items-center ">
        <HomeModernIcon className="text-white h-6 w-6 " />
      </div>
      <div className="bg-[#153757] rounded mt-2  px-2 py-1 text-white text-lg flex justify-between">
        <span>Average deposit</span>
        <span className="text-green-500">₹9000</span>
      </div>
      <div>
        <div className=" rounded mt-1  px-2 text-white text-lg flex justify-between">
          <span className="flex items-center">
            <ArrowTrendingDownIcon className="text-green-700 h-6 px-1 " /> Min
            deposit
          </span>
          <span className="">₹9000</span>
        </div>
        <div className=" rounded mt-1  px-2 text-white text-lg flex justify-between">
          <span className="flex items-center">
            <ArrowTrendingUpIcon className="text-orange-700 h-6 px-1 " /> Max
            deposit
          </span>
          <span className="">₹9000</span>
        </div>
      </div>
      <div className="bg-[#153757] rounded mt-2  px-2 py-1 text-white text-lg flex justify-between">
        <span>Average rent</span>
        <span className="text-green-500">₹9000</span>
      </div>
      <div>
        <div className="  mt-1  px-2 text-white text-lg flex justify-between">
          <span className="flex items-center">
            <ArrowTrendingDownIcon className="text-green-700 h-6 px-1 " /> Min
            Rent
          </span>
          <span className="">₹9000</span>
        </div>
        <div className="  mt-1  px-2 text-white text-lg flex justify-between">
          <span className="flex items-center">
            <ArrowTrendingUpIcon className="text-orange-700 h-6 px-1 " /> Max
            rent
          </span>
          <span className="">₹9000</span>
        </div>
      </div>
    </div>
  );
};
export default DetailsCard;
