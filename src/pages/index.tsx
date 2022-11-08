import type { NextPage } from "next";
import Head from "next/head";
import FilterView from "../features/filter/FilterView";
import LeftPanelView from "../features/leftPanel/LeftPanelView";
import MapView from "../features/map/MapView";
import LegendView from "../features/legend/LegendView";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rentaluru</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="overflow-hidden">
        <LeftPanelView />
        <MapView />
        <LegendView />
        <FilterView />
      </div>
    </>
  );
};

export default Home;
