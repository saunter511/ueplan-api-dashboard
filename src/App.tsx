import { Loading, Navbar } from "molecules";
import { Home } from "pages";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useQuery } from "react-query";
import { useEffect, useState, Suspense, lazy } from "react";
import { calculateData } from "utils/statistics";

import { motion, AnimatePresence } from "framer-motion";

const Logs = lazy(() => import("./../src/components/pages/logs"));
const Charts = lazy(() => import("./../src/components/pages/charts"));

function App() {
  const [usersCount, setUsersCount] = useState(0);
  const [usersUCount, setUsersUCount] = useState(0);
  const [chartData, setChartData] = useState<any>();

  const [isCalculating, setIsCalculating] = useState(true);
  const { isLoading, isFetching, error, data } = useQuery("data", () =>
    fetch("https://api.idappstudio.com/ueplan/stats").then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      setUsersCount(data.length);
      const ids = data.map((d: any) => d[1]);
      setUsersUCount(new Set(ids).size);
      setChartData(calculateData(data));
      setIsCalculating(false);
    }
  }, [data, usersCount]);

  return (
    <>
      <Router>
        {isLoading || isCalculating ? (
          <Loading />
        ) : (
          <>
            <Suspense fallback={<Loading />}>
              <Navbar />
              <div className="m-8 flex justify-center">
                <div className="w-full sm:w-5/6">
                  <Switch>
                    <Route exact path="/">
                      <Suspense fallback={<Loading />}>
                        <Home
                          users={usersCount}
                          uniqueUsers={usersUCount}
                          logs={data}
                          ready={isLoading || isCalculating}
                          chartData={chartData}
                        />
                      </Suspense>
                    </Route>
                    <Route exact path="/logs">
                      <Suspense fallback={<Loading />}>
                        <Logs logs={data} />
                      </Suspense>
                    </Route>
                    <Route exact path="/charts">
                      <Suspense fallback={<Loading />}>
                        <Charts logs={data} chartData={chartData} />
                      </Suspense>
                    </Route>
                  </Switch>
                </div>
              </div>
            </Suspense>
          </>
        )}
      </Router>
    </>
  );
}

export default App;
