import { useAppDispatch, useTypedSelector } from "../../app/store";
import Chip from "../../common/Chip";
import { Vehicle } from "./filter.constant";
import { ArrayFilter } from "./filter.types";
import { selectVehicle, setVehicleFilter } from "./filterSlice";

const VehicleFilter = () => {
  const dispatch = useAppDispatch();
  const vehicleFilter = useTypedSelector(selectVehicle);

  const clickHandler = (filter: ArrayFilter<Vehicle>) =>
    dispatch(setVehicleFilter(filter));

  return (
    <div className="py-2">
      <div className="pb-1">Vehicle Filter</div>
      <div className="flex gap-2 flex-wrap">
        {vehicleFilter.map((filter) => (
          <Chip
            key={filter.type}
            selected={filter.selected}
            clickHandler={() => clickHandler(filter)}
          >
            {filter.name}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default VehicleFilter;
