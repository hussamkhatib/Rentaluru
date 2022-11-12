import { useTypedSelector } from "../../app/store";
import { houseDetails } from "./leftPanel.constant";
import { selectActiveHouse } from "./leftPanelSlice";

const HouseDetails = () => {
  const activeHouse = useTypedSelector(selectActiveHouse);

  return (
    <div className="grid grid-cols-2 py-2 gap-3">
      {houseDetails.map((detail) => {
        if (!activeHouse?.[detail.key]) return null;

        return (
          <div
            key={detail.key}
            className="w-40 h-36 rounded-xl bg-secondary-700 space-y-1.5  flex flex-col items-center justify-center  text-white"
          >
            {detail?.name ? (
              <>
                <span className="text-lg font-semibold">
                  {activeHouse[detail.key]}
                </span>
                <span className="text-gray-400 text-sm">{detail.name} </span>
              </>
            ) : (
              <>
                <span className="text-lg font-semibold">
                  {activeHouse[detail.key]}
                </span>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HouseDetails;
