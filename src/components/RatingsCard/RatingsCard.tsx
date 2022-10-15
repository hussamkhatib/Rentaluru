import { HomeModernIcon, MapIcon, StarIcon } from "@heroicons/react/20/solid";
import React from "react";

const RatingsCard = () => {
  return (
    <div className="p-2 ">
      <div className="grid grid-cols-2 gap-3">
        <div className="">
          <div className="w-40 h-36 rounded-xl bg-[#102B44]  flex items-center justify-center text-white">
            <div className="flex-col justify-center items-center">
              <div className="bg-[#153757] flex rounded-full px-2 py-3 w-10 h-10 items-center ">
                <HomeModernIcon className="text-white h-6 w-6 " />
              </div>
              <div className="flex items-center">
                <StarIcon className="h-5 w-5 text-green-500" />
                <StarIcon className="h-5 w-5 text-green-500" />
                <StarIcon className="h-5 w-5 text-green-500" />
                <StarIcon className="h-5 w-5 text-green-500" />
                <StarIcon className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-40 h-36 rounded-xl bg-[#102B44]  flex items-center justify-center text-white">
            <div className="flex-col justify-center items-center">
              <div className="bg-[#153757] flex rounded-full px-2 py-3 w-10 h-10 items-center ">
                <HomeModernIcon className="text-white h-6 w-6 " />
              </div>
              <div className="flex items-center">
                <StarIcon className="h-5 w-5 text-green-500" />
                <StarIcon className="h-5 w-5 text-green-500" />
                <StarIcon className="h-5 w-5 text-green-500" />
                <StarIcon className="h-5 w-5 text-green-500" />
                <StarIcon className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-40 h-36 rounded-xl bg-[#102B44]  flex items-center justify-center text-white">
            <div className="flex-col justify-center items-center">
              <div className="bg-[#153757] flex rounded-full px-2 py-3 w-10 h-10 items-center ">
                <HomeModernIcon className="text-white h-6 w-6 " />
              </div>
              <div className="flex items-center">
                <StarIcon className="h-5 w-5 text-green-500" />
                <StarIcon className="h-5 w-5 text-green-500" />
                <StarIcon className="h-5 w-5 text-green-500" />
                <StarIcon className="h-5 w-5 text-green-500" />
                <StarIcon className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-40 h-36 rounded-xl bg-[#102B44]  flex items-center justify-center text-white">
            <div className="flex-col justify-center items-center">
              <div className="bg-[#153757] flex rounded-full px-2 py-3 w-10 h-10 items-center ">
                <HomeModernIcon className="text-white h-6 w-6 " />
              </div>
              <div className="flex items-center">
                <StarIcon className="h-5 w-5 text-green-500" />
                <StarIcon className="h-5 w-5 text-green-500" />
                <StarIcon className="h-5 w-5 text-green-500" />
                <StarIcon className="h-5 w-5 text-green-500" />
                <StarIcon className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingsCard;
