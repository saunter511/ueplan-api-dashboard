import { Navbar, Loading } from "molecules";
import { Home, Logs } from "pages";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";

function App() {
  const [usersCount, setUsersCount] = useState(0);
  const [usersUCount, setUsersUCount] = useState(0);

  const [isCalculating, setIsCalculating] = useState(false);
  const { isLoading, isFetching, error, data } = useQuery("repoData", () =>
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

  if (data) console.log(data.length);
  return (
    <>
      <Router>
        <Navbar />
        {isLoading || isCalculating ? (
          <Loading />
        ) : (
          <div className="m-8 flex justify-center">
            <div className="w-5/6">
              <Switch>
                <Route exact path="/">
                  <Home
                    users={usersCount}
                    uniqueUsers={usersUCount}
                    logs={data}
                  />
                </Route>
                <Route exact path="/logs">
                  <Logs logs={data} />
                </Route>
                <Route exact path="/charts">
                  charts
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
