import type { NextPage } from "next";
import Filter from "../components/Filter";
import LeftPanel from "../components/LeftPanel";
import Map from "../components/Map";
import Range from "../components/Range";
import Head from "next/head";

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
        <Filter />
      </div>
    </>
  );
};

export default Home;
