import { useAppDispatch, useTypedSelector } from "../../app/store";
import Chip from "../../common/Chip";
import { BHKType } from "./filter.types";
import { setBHK } from "./filterSlice";

const BHKFilter = () => {
  const BHKFilter = useTypedSelector((state) => state.filter.bhk);
  const dispatch = useAppDispatch();

  const clickHandler = (filter: BHKType) => {
    dispatch(setBHK(filter));
  };

  return (
    <>
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
    </>
  );
};

export default BHKFilter;
