import { selectFilterPanel } from "../../app/services/filterPanelSlice";
import { useTypedSelector } from "../../app/store";
import BHKFilter from "./BHKFilter";
import RentFilter from "./RentFilter";
import VehicleFilter from "./VehicleFilter";

const ApplyFilter = () => {
  const filterPanel = useTypedSelector(selectFilterPanel);

  return filterPanel ? (
    <div className="fixed right-8 w-64 top-10 z-10 h-screen text-white bg-secondary-800">
      <div className="mt-6 px-2">
        <RentFilter />
        <BHKFilter />
        <VehicleFilter />
      </div>
    </div>
  ) : null;
};

export default ApplyFilter;
