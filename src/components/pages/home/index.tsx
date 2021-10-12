import { FC, useContext, useEffect } from "react";
import { Stats } from "./Stats";
import { LoadingContext } from "react-router-loading";
import { AnimatePresence, motion } from "framer-motion";

import { UsageChart } from "molecules";

interface IHomeProps {
  users: number;
  uniqueUsers: number;
  logs: any;
  ready: boolean;
}

const Home: FC<IHomeProps> = ({ users, uniqueUsers, logs, ready }) => {
  const loadingContext = useContext(LoadingContext);

  useEffect(() => {
    loadingContext.done();
  }, [ready]);
  return (
    <div>
      <Stats total={users} unique={uniqueUsers} />
      <UsageChart logs={logs} />
    </div>
  );
};

export default Home;
