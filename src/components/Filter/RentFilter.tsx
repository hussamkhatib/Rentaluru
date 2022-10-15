import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { setRent } from "../../redux/filterSlice";
import Listbox from "../Listbox";
import TextField from "../TextField";

const RentFilter = () => {
  const fromRef = useRef<any>(null);
  const toRef = useRef<any>(null);
  const inputRef = useRef<any>(null!);

  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState<string>();

  return (
    <div>
      <Listbox
        selected={selectedFilter}
        setSelected={setSelectedFilter}
        list={["in range", "above", "below", "exact"]}
      />
      <div className="mt-2">
        {selectedFilter === "in range" ? (
          <div className="flex gap-2">
            <TextField
              type="number"
              placeholder="from"
              ref={fromRef}
              onChange={() =>
                dispatch(
                  setRent({
                    filter: selectedFilter,
                    value: [fromRef?.current?.value, toRef.current.value],
                  })
                )
              }
              min={0}
              step={1}
            />
            <TextField
              type="number"
              placeholder="to"
              onChange={() =>
                dispatch(
                  setRent({
                    filter: selectedFilter,
                    value: [fromRef?.current?.value, toRef.current.value],
                  })
                )
              }
              ref={toRef}
              min={0}
              step={1}
            />
          </div>
        ) : selectedFilter ? (
          <TextField
            ref={inputRef}
            type="number"
            onChange={() =>
              dispatch(
                setRent({
                  filter: selectedFilter,
                  value: inputRef?.current?.value,
                })
              )
            }
            defaultValue={0}
          />
        ) : null}
      </div>
    </div>
  );
};

export default RentFilter;
