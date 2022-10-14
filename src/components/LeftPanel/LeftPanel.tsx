import Tabs from "../Tabs";

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
  return (
    <div className="fixed z-10 h-full bg-[#0D2337] w-[25rem]">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default LeftPanel;
