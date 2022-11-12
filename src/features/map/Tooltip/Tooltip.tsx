import AreaTooltip from "./AreaTooltip";
import HouseTooltip from "./HouseTooltip";

const ToolTip = ({ hoverInfo }: any) => {
  if (!hoverInfo) return null;
  const { property, x, y } = hoverInfo;

  return (
    <div
      className="fixed z-10 m-2 p-1 max-w-xs pointer-events-none text-white bg-secondary-700 rounded-xl flex flex-col px-3"
      style={{ left: x, top: y }}
    >
      {property?.title && <HouseTooltip {...property} />}
      {property?.name && <AreaTooltip {...property} />}
      {property?.point_count && (
        <span>Number of Houses: {hoverInfo.property.point_count}</span>
      )}
    </div>
  );
};

export default ToolTip;
