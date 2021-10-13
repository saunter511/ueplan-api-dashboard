import { FC, useContext, useEffect } from "react";
import { Stats } from "./Stats";

import { UsageChart } from "molecules";

interface IHomeProps {
  users: number;
  uniqueUsers: number;
  logs: any;
  ready: boolean;
  chartData: any;
  dailyData: any;
}

const Home: FC<IHomeProps> = ({
  users,
  uniqueUsers,
  logs,
  ready,
  chartData,
  dailyData,
}) => {
  return (
    <div>
      <Stats total={users} unique={uniqueUsers} daily={dailyData} />
      <UsageChart
        totalData={chartData.totalData}
        uniqueData={chartData.uniqueData}
      />
    </div>
  );
};

export default Home;
