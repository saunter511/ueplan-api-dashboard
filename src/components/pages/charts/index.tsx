import { ActionChart, UsageChart } from "molecules";
import { FC, useContext } from "react";

interface IChartProps {
  logs: any;
  chartData: any;
}

const Charts: FC<IChartProps> = ({ logs, chartData }) => {
  return (
    <div>
      <UsageChart
        totalData={chartData.totalData}
        uniqueData={chartData.uniqueData}
      />
      <div className="divider"></div>
      <ActionChart logs={logs} />
    </div>
  );
};

export default Charts;
