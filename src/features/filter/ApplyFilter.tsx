import { selectFilterPanel } from "../../app/services/filterPanelSlice";
import { useTypedSelector } from "../../app/store";
import BHKFilter from "./BHKFilter";

const ApplyFilter = () => {
  const filterPanel = useTypedSelector(selectFilterPanel);

  return filterPanel ? (
    <div className="fixed right-8 w-64 top-10 z-10 h-screen text-white bg-[#0D2337]">
      <div className="mt-6  px-2">
        <BHKFilter />
      </div>
    </div>
  ) : null;
};

export default ApplyFilter;
