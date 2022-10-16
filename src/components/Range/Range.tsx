import { useGetGeojsonQuery } from "../../redux/filterAPI";
import {
  getStops,
  linearHeatMapColorsTailclasses,
} from "../Map/getLayerStyles";
import classNames from "classnames";
import { selectFilterQuery } from "../../redux/filterQuerySlice";
import { useSelector } from "react-redux";

const Range = () => {
  const filterQuery = useSelector(selectFilterQuery);

  const { data, isLoading, isError } = useGetGeojsonQuery(filterQuery);
  if (isLoading || isError) return null;

  const range = getStops(data.min, data.max);
  return (
    <div className="fixed z-20 bottom-8 right-8 text-[#a8a8a8]">
      {range.map((stop, idx) => (
        <div key={idx} className="flex gap-x-1 h-6">
          <div
            className={classNames("w-4", linearHeatMapColorsTailclasses[idx])}
          />
          <span>
            {kFormatter(Math.ceil(stop[0]))}{" "}
            {range.length - 1 === idx ? "+" : null}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Range;

function kFormatter(num: any) {
  return Math.abs(num) > 999
    ? // @ts-ignore
      Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
}
