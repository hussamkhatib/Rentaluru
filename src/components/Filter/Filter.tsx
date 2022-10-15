import { PlayIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilterPanel,
  toggleFilterPanel,
} from "../../redux/filterPanelSlice";
import Disclosure from "../Disclosure";

const Filter = () => {
  return (
    <>
      <ApplyFilter />
      <ToggleFilter />
    </>
  );
};

export default Filter;

const ToggleFilter = () => {
  const dispatch = useDispatch();

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

const ApplyFilter = () => {
  const filterPanel = useSelector(selectFilterPanel);

  return filterPanel ? (
    <div className="fixed right-8 w-64 top-0 z-10 h-screen text-white bg-[#0D2337]">
      <div className="mt-6" />
      <Disclosure title="Rent">the children</Disclosure>
      <Disclosure title="Rating">the children</Disclosure>
      <Disclosure title="BHK">the children</Disclosure>
      <Disclosure title="Vehicle">the children</Disclosure>
    </div>
  ) : null;
};
