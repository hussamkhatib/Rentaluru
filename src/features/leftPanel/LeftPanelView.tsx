import { useTypedSelector } from "../../app/store";
import Tabs from "../../common/Tabs";
import CloseLeftPanelButton from "./CloseLeftPanelButton";
import AreaDetails from "./AreaDetails";
import { tabs } from "./leftPanel.constant";
import { selectActiveArea, selectActiveHouse } from "./leftPanelSlice";
import HouseDetails from "./HouseDetails";

const LeftPanelView = () => {
  const activeArea = useTypedSelector(selectActiveArea);
  const activeHouse = useTypedSelector(selectActiveHouse);
  const isPanelOpen = Boolean(activeArea);

  return isPanelOpen ? (
    <div className="fixed z-10 mt-16 h-3/4  bg-secondary-800 w-[25rem] p-4 m-5 rounded-2xl overflow-auto overflow-y-scroll scrollbar-thin scrollbar-thumb-secondary-700 scrollbar-track-blue-300 ">
      <div className="flex pb-1 justify-between border-b-2 border-main-300">
        <p className=" text-main-300">{activeArea?.name}</p>
        <CloseLeftPanelButton />
      </div>
      {activeHouse?.title ? (
        <p className="text-sm pt-1 text-white">{activeHouse.title}</p>
      ) : null}
      {activeHouse ? (
        <Tabs tabs={tabs}>
          <HouseDetails />
          <></>
        </Tabs>
      ) : (
        <Tabs tabs={tabs}>
          <AreaDetails />
          <></>
        </Tabs>
      )}
    </div>
  ) : null;
};

export default LeftPanelView;
