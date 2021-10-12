import { Navbar } from "molecules";
import { Home, Logs, Charts } from "pages";

import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-loading";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";

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
            <div className="w-5/6">
              <Switch>
                <Route exact path="/" loading>
                  <Home
                    users={usersCount}
                    uniqueUsers={usersUCount}
                    logs={data}
                    ready={isLoading || isCalculating}
                  />
                </Route>
                <Route exact path="/logs" loading>
                  <Logs logs={data} />
                </Route>
                <Route exact path="/charts" loading>
                  <Charts logs={data} />
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
