import { ActionChart, UsageChart } from "molecules";
import { FC, useContext } from "react";

import { LoadingContext } from "react-router-loading";

interface IChartProps {
  logs: any[];
}

const Charts: FC<IChartProps> = ({ logs }) => {
  const loadingContext = useContext(LoadingContext);

  return (
    <div>
      <UsageChart logs={logs} />
      <div className="divider"></div>
      <ActionChart logs={logs} ctx={loadingContext} />
    </div>
  );
};

export default Charts;
