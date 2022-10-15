import { useGetGeojsonQuery } from "../../redux/filterAPI";
import {
  getStops,
  linearHeatMapColorsTailclasses,
} from "../Map/getLayerStyles";
import classNames from "classnames";

const Range = () => {
  const { data, isLoading, isError } = useGetGeojsonQuery();
  if (isLoading || isError) return null;

  const range = getStops(data.min, data.max);
  return (
    <div className="fixed z-20 bottom-8 right-2 text-[#a8a8a8]">
      {range.map((stop, idx) => (
        <div key={idx} className="flex gap-x-1 h-6">
          <div
            className={classNames("w-4", linearHeatMapColorsTailclasses[idx])}
          />
          <span>
            {Math.ceil(stop[0])} {range.length - 1 === idx ? "+" : null}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Range;
