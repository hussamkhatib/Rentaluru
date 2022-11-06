import { FC } from "react";
// import CommandPalette from "../CommandPalette";
// import SelectMapType from "./SelectMapType";

const Nav: FC = () => {
  return (
    <nav className="fixed w-full top-0 z-30 bg-[#0D2337] flex h-10 justify-between items-center px-2 md:px-4">
      <h1 className="text-xl text-white  font-semibold">Rentaluru</h1>
      {/* <CommandPalette onSelectCity={onSelectCity} />
      <SelectMapType /> */}
    </nav>
  );
};

export default Nav;
