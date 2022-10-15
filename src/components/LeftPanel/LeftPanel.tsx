import Tabs from "../Tabs";
import { useSelector } from "react-redux";

const tabs = [
  {
    name: "Details",
  },
  {
    name: "Reviews",
  },
  {
    name: "Ratings",
  },
];

const LeftPanel = () => {
  const leftPanelOpen = useSelector((state: any) => state.leftPanel);

  return leftPanelOpen ? (
    <div className="fixed z-10 h-full bg-[#0D2337] w-[25rem]">
      <Tabs tabs={tabs} />
    </div>
  ) : null;
};

export default LeftPanel;
