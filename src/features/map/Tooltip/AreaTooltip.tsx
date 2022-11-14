const AreaTooltip = (props: any) => {
  const { name, avgRent, minRent, maxRent } = props;

  const avgRentCeil = Math.ceil(avgRent);
  const minRentCeil = Math.ceil(minRent);
  const maxRentCeil = Math.ceil(maxRent);

  return (
    <>
      <span>{name}</span>
      {avgRent && (
        <div className="space-x-2 text-sm text-gray-400 divide-x">
          <span>Avg Rent: {avgRentCeil}</span>
          <span className="pl-2">Min Rent: {minRentCeil}</span>
          <span className="pl-2">Max Rent: {maxRentCeil}</span>
        </div>
      )}
    </>
  );
};

export default AreaTooltip;
