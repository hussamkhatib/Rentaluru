
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
        selected ? "bg-main-400" : "bg-secondary-600",
        "font-bold text-sm cursor-pointer px-2 py-1 inline-block"
      )}
    >
      {children}
    </div>
  );
};

export default Chip;

// $r.props.listPageProperties