import { Children, useState } from "react";
import { FC } from "react";
import classNames from "classnames";

interface Props {
  tabs: string[];
  children: JSX.Element[];
}

const Tabs: FC<Props> = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div
        className="flex justify-around pb-2 -mb-px space-x-2"
        aria-label="Tabs"
      >
        {tabs.map((tab, idx) => {
          const isCurrent = activeTab === idx;
          return (
            <button
              onClick={() => setActiveTab(idx)}
              key={tab}
              className={classNames(
                isCurrent
                  ? "border-main-300"
                  : "border-transparent hover:border-main-300",
                "group text-white inline-flex items-center border-b-2 p-1 text-sm font-medium"
              )}
            >
              {tab}
            </button>
          );
        })}
      </div>
      {Children.toArray(children)[activeTab]}
    </div>
  );
};

export default Tabs;
