import { selectActiveArea } from "../../app/services/activeAreaSlice";
import { useTypedSelector } from "../../app/store";
import Tabs from "../../common/Tabs";
import CloseLeftPanelButton from "./CloseLeftPanelButton";
import Details from "./Details";
import { tabs } from "./leftPanel.constant";
// import Rating from "./Rating";

const LeftPanelView = () => {
  const activeArea = useTypedSelector(selectActiveArea);
  const isPanelOpen = activeArea !== null;

  return isPanelOpen ? (
    <div className="fixed z-10 mt-16 h-3/4 bg-[#0D2337] w-[25rem] p-4 m-5 rounded-2xl overflow-auto overflow-y-scroll scrollbar-thin scrollbar-thumb-[#102B44] scrollbar-track-blue-300 ">
      <div className="flex justify-between">
        <p className="text-white">{activeArea?.name}</p>
        <CloseLeftPanelButton />
      </div>
      <Tabs tabs={tabs}>
        <Details />
        <></>
        {/* <Rating /> */}
      </Tabs>
    </div>
  ) : null;
};

export default LeftPanelView;
