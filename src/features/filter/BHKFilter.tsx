import { useAppDispatch, useTypedSelector } from "../../app/store";
import Chip from "../../common/Chip";
import { BHKType } from "./filter.types";
import { selectBhk, setBHKFilter } from "./filterSlice";

const BHKFilter = () => {
  const dispatch = useAppDispatch();
  const BHKFilter = useTypedSelector(selectBhk);

  const clickHandler = (filter: BHKType) => {
    dispatch(setBHKFilter(filter));
  };

  return (
    <div className="py-2">
      <div className="pb-1">BHK type</div>
      <div className="flex gap-2 flex-wrap">
        {BHKFilter.map((filter) => (
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

export default BHKFilter;
