import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  HomeModernIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

const ReviewCard = () => {
  return (
    <div className="py-2 px-2">
      <div className="bg-[#102B44] rounded-xl p-2">
        <div className="flex gap-3 items-center">
          <UserCircleIcon className="text-white h-8 w-8 " />
          <span className="text-white">User</span>
        </div>
        <div className="text-white text-sm mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus labore
          architecto repellat eveniet itaque, sequi at aut! Distinctio ab itaque
          fuga. Dolorem amet sed doloribus soluta mollitia? Non, animi
          inventore.
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
