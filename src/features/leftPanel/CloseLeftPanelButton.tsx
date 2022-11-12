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
      className="bg-secondary-600 rounded-full"
    >
      <XMarkIcon className="h-5 w-5 text-main-300" aria-hidden />
    </button>
  );
};

export default CloseLeftPanelButton;
