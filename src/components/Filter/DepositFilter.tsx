import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDepositFilter,
  setDeposit,
} from "../../app/services/filterSlice";
import Listbox from "../Listbox";
import TextField from "../TextField";

const DepositFilter = () => {
  const depositFilter = useSelector(selectDepositFilter);

  const fromRef = useRef<any>(null);
  const toRef = useRef<any>(null);
  const inputRef = useRef<any>(null!);

  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState<string>(
    depositFilter?.filter || null
  );

  return (
    <div>
      <Listbox
        selected={selectedFilter}
        setSelected={(value) => {
          setSelectedFilter(value as string);
          dispatch(
            setDeposit({
              filter: value as string,
            })
          );
        }}
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
                  setDeposit({
                    filter: selectedFilter,
                    value: [fromRef?.current?.value, toRef.current.value],
                  })
                )
              }
              defaultValue={depositFilter?.value[0] || 0}
              min={0}
              step={1}
            />
            <TextField
              type="number"
              placeholder="to"
              onChange={() =>
                dispatch(
                  setDeposit({
                    filter: selectedFilter,
                    value: [fromRef?.current?.value, toRef.current.value],
                  })
                )
              }
              defaultValue={depositFilter?.value[1] || 0}
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
                setDeposit({
                  filter: selectedFilter,
                  value: inputRef?.current?.value,
                })
              )
            }
            defaultValue={depositFilter?.value || 0}
          />
        ) : null}
      </div>
    </div>
  );
};

export default DepositFilter;
