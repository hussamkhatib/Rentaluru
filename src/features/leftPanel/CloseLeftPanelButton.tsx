import { XMarkIcon } from "@heroicons/react/20/solid";
import { hideLeftPanel } from "./leftPanelSlice";
import { useAppDispatch } from "../../app/store";

const CloseLeftPanelButton = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      aria-label="close button"
      onClick={() => {
        dispatch(hideLeftPanel());
      }}
      className="bg-[#153757] rounded-full"
    >
      <XMarkIcon className="h-5 w-5 text-[#00FFA4]" aria-hidden />
    </button>
  );
};

export default CloseLeftPanelButton;
