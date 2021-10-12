import { Table } from "./Table";
import { useQueryClient } from "react-query";
import { groupByDay } from "utils/datetime";

const Logs = ({ logs }: any) => {
  const queryClient = useQueryClient();

  console.log(groupByDay(logs));
  return (
    <>
      <div className="flex justify-end m-5">
        <button
          className="btn btn-outline"
          onClick={() => queryClient.invalidateQueries()}
        >
          refresh
        </button>
      </div>
      <Table logs={logs.slice(-20).reverse()} />
    </>
  );
};

export default Logs;
