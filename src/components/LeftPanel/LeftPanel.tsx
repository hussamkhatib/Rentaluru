import Tabs from "../Tabs";
import { useDispatch, useSelector } from "react-redux";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Details from "../Details";
import Rating from "../Rating";
import {
  removeActiveArea,
  selectActiveArea,
  selectIsAreaActive,
} from "../../redux/activeAreaSlice";

const tabs = [
  {
    name: "Details",
  },
  {
    name: "Ratings",
  },
];

const LeftPanel = () => {
  const dispatch = useDispatch();
  const activeArea = useSelector(selectActiveArea);
  const leftPanelOpen = useSelector(selectIsAreaActive);

  return leftPanelOpen ? (
    <div className="fixed z-30 mt-16 h-3/4 bg-[#0D2337] w-[25rem] p-4 m-5 rounded-2xl overflow-auto overflow-y-scroll scrollbar-thin scrollbar-thumb-[#102B44] scrollbar-track-blue-300">
      <div className="flex justify-between">
        <p className="text-white">{activeArea.name}</p>
        <button
          aria-label="close button"
          onClick={() => {
            dispatch(removeActiveArea());
          }}
          className="bg-[#153757] rounded-full"
        >
          <XMarkIcon className="h-6 w-6 text-[#00FFA4]" aria-hidden />
        </button>
      </div>
      <Tabs tabs={tabs}>
        <Details />
        <Rating />
      </Tabs>
    </div>
  ) : null;
};

export default LeftPanel;
