import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import AssemblyLine from "../components/AssemblyLine";

const Home: NextPage = () => {
  return (
    <div>
      <AssemblyLine stages={["Idea", "Development", "Testing", "Deployment"]} />
    </div>
  );
};

export default Home;
