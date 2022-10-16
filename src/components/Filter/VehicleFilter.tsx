import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setVehicle } from "../../redux/filterSlice";

const VehicleFilter = () => {
  const dispatch = useDispatch();

  const twoWRef = useRef<any>(null);
  const fourWRef = useRef<any>(null);

  const handleOnChange = () => {
    dispatch(
      setVehicle({
        twoW: twoWRef.current.checked,
        fourW: fourWRef.current.checked,
      })
    );
  };

  return (
    <div className="flex gap-x-2">
      <div className="flex gap-x-1">
        <input onChange={handleOnChange} ref={twoWRef} type="checkbox" />
        <label>2 wheeler</label>
      </div>
      <div className="flex gap-x-1">
        <input onChange={handleOnChange} ref={fourWRef} type="checkbox" />
        <label>4 wheeler</label>
      </div>
    </div>
  );
};

export default VehicleFilter;
