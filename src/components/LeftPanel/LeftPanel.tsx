import Tabs from "../Tabs";
import { useDispatch, useSelector } from "react-redux";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { closeLeftPanel } from "../../redux/leftPanelSlice";
import Details from "../Details";
import ReviewCard from "../ReviewCard";
import Rating from "../Rating";
import { removeActiveArea } from "../../redux/activeAreaSlice";

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
  const activeArea = useSelector((state: any) => state.activeArea);
  const leftPanelOpen = useSelector((state: any) => state.leftPanel);

  return leftPanelOpen ? (
    <div className="fixed z-10 h-3/4 bg-[#0D2337] w-[25rem] p-4 m-5 rounded-2xl overflow-auto overflow-y-scroll scrollbar-thin scrollbar-thumb-[#102B44] scrollbar-track-blue-300 ">
      <div className="flex justify-between">
        <p className="text-white">{activeArea.name}</p>
        <button
          aria-label="close button"
          onClick={() => {
            dispatch(closeLeftPanel());
            dispatch(removeActiveArea());
          }}
          className="bg-[#153757] rounded-full"
        >
          <XMarkIcon className="h-6 w-6 text-[#00FFA4]" aria-hidden />
        </button>
      </div>
      <Tabs tabs={tabs}>
        <Details />
        <div className="">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
        <Rating />
      </Tabs>
    </div>
  ) : null;
};

export default LeftPanel;
