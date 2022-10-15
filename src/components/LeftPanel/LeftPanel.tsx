import Tabs from "../Tabs";
import { useDispatch, useSelector } from "react-redux";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { closeLeftPanel } from "../../redux/leftPanelSlice";
import DetailsCard from "../DetailsCard";
import ReviewCard from "../ReviewCard";
import RatingsCard from "../RatingsCard";

const tabs = [
  {
    name: "Details",
  },
  {
    name: "Reviews",
  },
  {
    name: "Ratings",
  },
];

const LeftPanel = () => {
  const dispatch = useDispatch();
  const leftPanelOpen = useSelector((state: any) => state.leftPanel);

  return leftPanelOpen ? (
    <div className="fixed z-10 h-3/4 bg-[#0D2337] w-[25rem] p-4 m-5 rounded-2xl overflow-auto overflow-y-scroll scrollbar-thin scrollbar-thumb-[#102B44] scrollbar-track-blue-300 ">
      <div className="flex justify-between ">
        <p className="text-white">Indira nagar</p>
        <button
          aria-label="close button"
          onClick={() => dispatch(closeLeftPanel())}
          className="bg-[#153757] rounded-full"
        >
          <XMarkIcon className="h-6 w-6 text-[#00FFA4]" aria-hidden />
        </button>
      </div>
      <Tabs tabs={tabs}>
        <DetailsCard />
        <div className="">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
        <div><RatingsCard/></div>
      </Tabs>
    </div>
  ) : null;
};

export default LeftPanel;
