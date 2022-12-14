import { useGetGeojsonQuery } from "../../app/services/filterAPI";
import classNames from "classnames";
import { kFormatter } from "./legend.helper";
import {
  getStops,
  linearHeatMapColors,
  linearHeatMapColorsTailclasses,
} from "../map/Layers/Polygons/polygons.utils";
import { useTypedSelector } from "../../app/store";
import { selectFilterQueryParams } from "../filter/filterSlice";

const LegendView = () => {
  const filterQuery = useTypedSelector(selectFilterQueryParams);
  const { data, isLoading, isError } = useGetGeojsonQuery(filterQuery);

  if (isLoading || isError) return null;

  const range = getStops(data.min, data.max)(linearHeatMapColors);
  return (
    <div className="fixed z-20 bottom-4 left-8 text-[#a8a8a8]">
      {range.map((stop: any, idx: number) => (
        <div key={idx} className="flex gap-x-1 h-6">
          <div
            className={classNames(
              "w-4 border-black border-b-[1px]",
              linearHeatMapColorsTailclasses[idx]
            )}
          />
          <span>{kFormatter(Math.ceil(stop[0]))} </span>
        </div>
      ))}
    </div>
  );
};

export default LegendView;
