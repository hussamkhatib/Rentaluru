import { Children, useState } from "react";
import { FC } from "react";
import classNames from "classnames";

interface Props {
  tabs: {
    name: string;
  }[];
  children: any;
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
              key={tab.name}
              className={classNames(
                isCurrent
                  ? "border-[#00FFA4]"
                  : "border-transparent hover:border-[#00FFA4]",
                "group text-white inline-flex items-center border-b-2 py-3 px-1 text-sm font-medium"
              )}
            >
              {tab.name}
            </button>
          );
        })}
      </div>
      <div className="border-t border-[#8BA7C1] opacity-20" />
      {Children.toArray(children)[activeTab]}
    </div>
  );
};

export default Tabs;
