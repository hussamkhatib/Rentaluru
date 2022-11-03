const ToolTip = ({ hoverInfo }: any) => {
  if (!hoverInfo) return null;
  return (
    <div
      className="fixed z-10 m-2 p-1 max-w-xs pointer-events-none text-[#00FFA4] bg-[#102B44] rounded-xl px-3"
      style={{ left: hoverInfo.x, top: hoverInfo.y }}
    >
      <span>{hoverInfo?.property?.name}</span>
    </div>
  );
};

export default ToolTip;
