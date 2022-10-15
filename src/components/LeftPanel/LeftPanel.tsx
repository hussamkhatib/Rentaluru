import Tabs from "../Tabs";
import { useDispatch, useSelector } from "react-redux";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { closeLeftPanel } from "../../redux/leftPanelSlice";
import DetailsCard from "../DetailsCard";

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
    <div className="fixed z-10 h-full bg-[#0D2337] w-[25rem] p-4">
      <div className="flex justify-between ">
        <p>Indira nagar</p>
        <button
          onClick={() => dispatch(closeLeftPanel())}
          className="bg-[#153757] rounded-full"
        >
          <XMarkIcon className="h-6 w-6 text-[#00FFA4]" aria-hidden />
        </button>
      </div>
      <Tabs tabs={tabs}></Tabs>
      <div className="border-t border-[#8BA7C1]"></div>
      <DetailsCard/>
    </div>
  ) : null;
};

export default LeftPanel;
