import { FC } from "react";
import { ResponsiveBar } from "@nivo/bar";
interface IActonChartProps {
  logs: any[];
}

const ActionChart: FC<IActonChartProps> = ({ logs }) => {
  const actionOpen = logs.filter((log) => log[3] === "open");
  const actionRefresh = logs.filter((log) => log[3] === "refresh");
  const actionTextfield = logs.filter((log) => log[3] === "textfield");
  const actionEmpty = logs.filter((log) => log[3] === "");

  const data = [
    {
      action: "open",
      open: actionOpen.length,
    },
    {
      action: "refresh",
      open: actionRefresh.length,
    },
    {
      action: "textfield",
      open: actionTextfield.length,
    },
    {
      action: "empty",
      open: actionEmpty.length,
    },
  ];

  return (
    <div className="card shadow mt-4">
      <div className="h-96">
        <ResponsiveBar
          data={data}
          indexBy="action"
          keys={["open", "refresh", "textfield", "empty"]}
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          axisTop={null}
          axisRight={null}
          colors={{ scheme: "dark2" }}
          colorBy="indexValue"
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          padding={0.6}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          enableGridX={false}
          enableGridY={false}
          legends={[
            {
              dataFrom: "indexes",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
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

export default ActionChart;
