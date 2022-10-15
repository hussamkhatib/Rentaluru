import type { NextPage } from "next";
import Filter from "../components/Filter";
import LeftPanel from "../components/LeftPanel";
import Map from "../components/Map";
import Range from "../components/Range";

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <LeftPanel />
      <Map />
      <Range />
      <Filter />
    </div>
  );
};

export default Home;
