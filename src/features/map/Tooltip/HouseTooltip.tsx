const HouseTooltip = (props: any) => {
  const { title, rent, deposit, typeDesc } = props;

  return (
    <>
      <div className="space-x-2 divide-x">
        <span>Rent: {Math.ceil(rent)}</span>
        <span className="pl-2">Deposit: {deposit}</span>
        <span className="pl-2">{typeDesc}</span>
      </div>
      <span className="text-sm text-gray-400">{title}</span>
    </>
  );
};

export default HouseTooltip;
