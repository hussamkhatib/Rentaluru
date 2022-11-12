import CommandPalette from "./CommandPallete";
// import CommandPalette from "../CommandPalette";
// import SelectMapType from "./SelectMapType";

const NavView = ({ onNavigate }: any) => {
  return (
    <nav className="fixed w-full top-0 z-30 bg-secondary-800 flex h-10 justify-between items-center px-2 md:px-4">
      <h1 className="text-xl text-white  font-semibold">Rentaluru</h1>
      <CommandPalette onNavigate={onNavigate} />
      {/* FIXME: remove this later */}
      <b />
    </nav>
  );
};

export default NavView;
