import { ResponsiveLine } from "@nivo/line";
import { FC, useEffect } from "react";
import { groupByDay } from "utils/datetime";
import { getDistinct } from "utils/statistics";
import { format } from "date-fns";

interface IUsageChartProps {
  logs: any[];
  ctx?: {
    start: () => void;
    done: () => void;
    restart: () => void;
  };
}

const UsageChart: FC<IUsageChartProps> = ({ logs, ctx }) => {
  const data = groupByDay(logs);

  const grouped = Object.fromEntries(
    Object.entries(data).map(([k, v]) => [k, v.length])
  );

  const objectArray = Object.entries(grouped).map(([k, v]) => ({ [k]: v }));

  const uniqueDaily = Object.fromEntries(
    Object.entries(data).map(([k, v]) => [k, getDistinct(v)])
  );

  const uniqueDailyArray = Object.entries(uniqueDaily).map(([k, v]) => ({
    [k]: v,
  }));

  const uniqueData = uniqueDailyArray.map((o: any, index: number) => {
    return {
      x: format(Date.parse(Object.keys(o)[0] as string), "yyyy-MM-dd"),
      y: Object.values(o)[0] as number,
    };
  });

  const totalData = objectArray.map((o: any, index: number) => {
    return {
      x: format(Date.parse(Object.keys(o)[0] as string), "yyyy-MM-dd"),
      y: Object.values(o)[0] as number,
    };
  });

  useEffect(() => {
    ctx?.done();
  }, [uniqueData, totalData]);
  return (
    <div className="card shadow mt-4">
      <div className="h-96">
        <ResponsiveLine
          data={[
            {
              id: "Dzienne użycia",

              data: totalData,
            },
            {
              id: "Unikalne użycia",
              data: uniqueData,
            },
          ]}
          margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
          curve="natural"
          enableGridX={false}
          enableGridY={false}
          colors={{ scheme: "dark2" }}
          useMesh={true}
          enableSlices="x"
          legends={[
            {
              anchor: "top",
              direction: "row",
              justify: false,
              translateX: 100,
              translateY: -37,
              itemsSpacing: 20,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default UsageChart;
