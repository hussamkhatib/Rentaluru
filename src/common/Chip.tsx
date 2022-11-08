import classnames from "classnames";
import { FC } from "react";

type Props = {
  selected: boolean;
  clickHandler: <T>(filter: T) => void;
  children: string;
};

const Chip: FC<Props> = ({ selected, children, clickHandler }) => {
  return (
    <div
      onClick={clickHandler}
      className={classnames(
        selected ? "bg-[#00FFA4] text-[#102B44]" : "bg-[#153757] text-white",
        "font-bold text-sm cursor-pointer px-2 py-1 inline-block"
      )}
    >
      {children}
    </div>
  );
};

export default Chip;
