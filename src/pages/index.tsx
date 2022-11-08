import type { NextPage } from "next";
import LeftPanel from "../components/LeftPanel";
import Map from "../components/Map";
import Range from "../components/Range";
import Head from "next/head";
import FilterView from "../features/filter/FilterView";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rentaluru</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="overflow-hidden">
        <LeftPanel />
        <Map />
        <Range />
        <FilterView />
      </div>
    </>
  );
};

export default Home;
