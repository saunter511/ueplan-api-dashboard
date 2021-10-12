import { ResponsiveLine } from "@nivo/line";
import { FC, useState, useMemo, Suspense } from "react";
import { groupByDay } from "utils/datetime";
import { getDistinct } from "utils/statistics";
import { format } from "date-fns";
import { Loading } from "molecules";

interface IUsageChartProps {
  totalData: any;
  uniqueData: any;
}

const UsageChart: FC<IUsageChartProps> = ({ totalData, uniqueData }) => {
  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
};

export default UsageChart;
