import { FC, useContext, useEffect } from "react";
import { Stats } from "./Stats";

import { UsageChart } from "molecules";

interface IHomeProps {
  users: number;
  uniqueUsers: number;
  logs: any;
  ready: boolean;
}

const Home: FC<IHomeProps> = ({ users, uniqueUsers, logs, ready }) => {
  return (
    <div>
      <Stats total={users} unique={uniqueUsers} />
      <UsageChart logs={logs} />
    </div>
  );
};

export default Home;
