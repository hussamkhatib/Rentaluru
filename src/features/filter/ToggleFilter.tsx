import { PlayIcon } from "@heroicons/react/24/outline";
import { toggleFilterPanel } from "../../app/services/filterPanelSlice";
import { useAppDispatch } from "../../app/store";

const ToggleFilter = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="fixed right-0 top-0 z-10 h-screen bg-[#0D2337]">
      <div className="w-8 rotate-90 text-white mt-16">
        <button
          onClick={() => dispatch(toggleFilterPanel())}
          className="flex space-x-2 items-center focus:outline-none focus-visible:ring focus-visible:ring-[#00FFA4] focus-visible:ring-opacity-75"
        >
          <PlayIcon className="h-4 w-4" aria-hidden />
          <span className="text-sm">Filters</span>
        </button>
      </div>
    </div>
  );
};

export default ToggleFilter;
