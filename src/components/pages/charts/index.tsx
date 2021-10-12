import { ActionChart, UsageChart } from "molecules";
import { FC, useContext } from "react";

interface IChartProps {
  logs: any[];
}

const Charts: FC<IChartProps> = ({ logs }) => {
  return (
    <div>
      <UsageChart logs={logs} />
      <div className="divider"></div>
      <ActionChart logs={logs} />
    </div>
  );
};

export default Charts;
