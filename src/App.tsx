import { Loading, Navbar } from "molecules";
import { Home } from "pages";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useQuery } from "react-query";
import { useEffect, useState, Suspense, lazy } from "react";

const Logs = lazy(() => import("./../src/components/pages/logs"));
const Charts = lazy(() => import("./../src/components/pages/charts"));

function App() {
  const [usersCount, setUsersCount] = useState(0);
  const [usersUCount, setUsersUCount] = useState(0);

  const [isCalculating, setIsCalculating] = useState(false);
  const { isLoading, isFetching, error, data } = useQuery("data", () =>
    fetch("https://api.idappstudio.com/ueplan/stats").then((res) => res.json())
  );

  useEffect(() => {
    setIsCalculating(true);

    if (data) {
      setUsersCount(data.length);
      const ids = data.map((d: any) => d[1]);
      setUsersUCount(new Set(ids).size);
      setIsCalculating(false);
    }
  }, [data, usersCount]);

  return (
    <>
      <Router>
        <Navbar />
        {isLoading || isCalculating ? null : (
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
                    <Charts logs={data} />
                  </Suspense>
                </Route>
              </Switch>
            </div>
          </div>
        )}
      </Router>
    </>
  );
}

export default App;
