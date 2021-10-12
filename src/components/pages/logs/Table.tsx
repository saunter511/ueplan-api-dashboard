import { TableRow } from "./TableRow";
import { format, parse } from "date-fns";

export const Table = ({ logs }: any) => {
  console.log(logs);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table w-full table-compact">
          <thead>
            <th>ID</th>
            <th>Schedule ID</th>
            <th>timestamp</th>
            <th>action</th>
          </thead>
          {logs.map((log: any) => (
            <TableRow
              key={log[0]}
              id={log[0]}
              scheduleId={log[1]}
              timestamp={format(Date.parse(log[2]), "yyyy-MM-dd HH:mm:ss")}
              action={log[3]}
            />
          ))}
        </table>
      </div>
    </>
  );
};
