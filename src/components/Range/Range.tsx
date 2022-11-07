import { useGetGeojsonQuery } from "../../redux/filterAPI";
import {
  getStops,
  linearHeatMapColors,
  linearHeatMapColorsTailclasses,
} from "../Map/Layers/Polygons/polygons.utils";
import classNames from "classnames";
import { selectFilterQuery } from "../../redux/filterQuerySlice";
import { useSelector } from "react-redux";

const Range = () => {
  const filterQuery = useSelector(selectFilterQuery);

  const { data, isLoading, isError } = useGetGeojsonQuery(filterQuery);
  if (isLoading || isError) return null;

  const range = getStops(data.min, data.max)(linearHeatMapColors);
  return (
    <div className="fixed z-20 bottom-8 right-8 text-[#a8a8a8]">
      {range.map((stop: any, idx: number) => (
        <div key={idx} className="flex gap-x-1 h-6">
          <div
            className={classNames("w-4", linearHeatMapColorsTailclasses[idx])}
          />
          <span>{kFormatter(Math.ceil(stop[0]))} </span>
        </div>
      ))}
    </div>
  );
};

export default Range;

function kFormatter(num: number) {
  return Math.abs(num) > 999 ? Math.floor(num / 1000).toFixed(0) + "k" : num;
}
