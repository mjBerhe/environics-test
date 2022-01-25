import type { NextPage } from "next";
import AssemblyLine from "../components/AssemblyLine";

const Home: NextPage = () => {
  return (
    <div>
      <AssemblyLine stages={["Idea", "Development", "Testing", "Deployment"]} />
    </div>
  );
};

export default Home;
