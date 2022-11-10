import { useAppDispatch } from "../../app/store";
import TextField from "../../common/TextField";
import { RentFilterPayload } from "./filter.types";
import { setRentFilter } from "./filterSlice";
import debounce from "lodash.debounce";
import { useCallback, useMemo } from "react";

const RentFilter = () => {
  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    ({ type, value }: RentFilterPayload) => {
      dispatch(
        setRentFilter({
          type,
          value,
        })
      );
    },
    [dispatch]
  );

  const debouncedEventHandler = useMemo(
    () => debounce(handleChange, 300),
    [handleChange]
  );

  return (
    <div className="py-2">
      <div className="pb-1">Rent Range</div>
      <div className="flex gap-x-4">
        <TextField
          min={0}
          step={500}
          type="number"
          placeholder="min"
          onChange={(e) =>
            debouncedEventHandler({ type: "minRent", value: +e.target.value })
          }
        />
        <TextField
          min={0}
          step={500}
          max={500000}
          type="number"
          onChange={(e) =>
            debouncedEventHandler({ type: "maxRent", value: +e.target.value })
          }
          placeholder="max"
        />
      </div>
    </div>
  );
};

export default RentFilter;
