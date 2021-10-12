import { Table } from "./Table";
import { useQuery } from "react-query";

import { useContext, useEffect, useState } from "react";

const Logs = ({ logs }: any) => {
  const [data, setData] = useState(logs);

  const {
    isLoading,
    isFetching,
    error,
    data: queryData,
    refetch,
  } = useQuery(
    "data",
    () =>
      fetch("https://api.idappstudio.com/ueplan/stats").then((res) =>
        res.json()
      ),
    {
      refetchInterval: 3000,
    }
  );

  useEffect(() => {
    if (queryData) {
      setData(queryData);
    }
    setData(logs);
  }),
    [queryData];

  return (
    <>
      <div className="flex justify-end m-5">
        <button className="btn btn-outline" onClick={() => refetch()}>
          {isFetching || isLoading ? (
            <div className=" flex justify-center items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900 m-3"></div>
            </div>
          ) : null}
          <div>refresh</div>
        </button>
      </div>
      <Table logs={data.slice(-20).reverse()} />
    </>
  );
};

export default Logs;
