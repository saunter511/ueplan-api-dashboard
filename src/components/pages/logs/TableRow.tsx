import { FC } from "react";

interface ITableRowProps {
  id: number;
  scheduleId: string;
  timestamp: string;
  action: string;
}

export const TableRow: FC<ITableRowProps> = ({
  id,
  scheduleId,
  timestamp,
  action,
}) => {
  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{scheduleId}</td>
        <td>{timestamp}</td>
        <td>{action}</td>
      </tr>
    </tbody>
  );
};
