import React from "react";
import { FC } from "react";
import classNames from "classnames";

interface Props {
  tabs: {
    name: string;
  }[];
}

const Tabs: FC<Props> = ({ tabs }) => {
  return (
    <div
      className="flex justify-around pb-2 -mb-px space-x-2"
      aria-label="Tabs"
    >
      {tabs.map((tab) => {
        const isCurrent = false;
        return (
          <span
            key={tab.name}
            className={classNames(
              isCurrent
                ? "border-neutral-900 text-neutral-900"
                : "border-transparent text-white hover:border-[#00FFA4] ",
              "group inline-flex items-center border-b-2 py-3 px-1 text-sm font-medium"
            )}
          >
            {tab.name}
          </span>
        );
      })}
    </div>
  );
};

export default Tabs;
