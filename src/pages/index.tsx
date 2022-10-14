import type { NextPage } from "next";
import LeftPanel from "../components/LeftPanel";
import Map from "../components/Map";

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <LeftPanel />
      <Map />
    </div>
  );
};

export default Home;
