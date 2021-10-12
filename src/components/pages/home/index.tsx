import { FC, useContext, useEffect } from "react";
import { Stats } from "./Stats";

import { UsageChart } from "molecules";

interface IHomeProps {
  users: number;
  uniqueUsers: number;
  logs: any;
  ready: boolean;
  chartData: any;
}

const Home: FC<IHomeProps> = ({
  users,
  uniqueUsers,
  logs,
  ready,
  chartData,
}) => {
  return (
    <div>
      <Stats total={users} unique={uniqueUsers} />
      <UsageChart
        totalData={chartData.totalData}
        uniqueData={chartData.uniqueData}
      />
    </div>
  );
};

export default Home;
