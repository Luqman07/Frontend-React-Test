import Maincontent from "../components/Maincontent";
import Sidebar from "../components/Sidebar";
import "../styles/style.scss";

import { Switch, Route } from "react-router";
import Verify from "../components/Verify";
import Social from "../components/Social";
import Business from "../components/Business";
import { useState } from "react";

const Home = () => {
  const [isCheckOne, setIsCheckOne] = useState(false);
  const [isCheckTwo, setIsCheckTwo] = useState(false);
  const [isCheckThree, setIsCheckThree] = useState(false);
  return (
    <div className="homepage">
      <Sidebar />
      <Maincontent
        isCheckOne={isCheckOne}
        isCheckTwo={isCheckTwo}
        isCheckThree={isCheckThree}
      >
        <Switch>
          <Route path="/" exact>
            <Verify setIsCheckOne={setIsCheckOne} />
          </Route>
          <Route path="/social">
            <Social setIsCheckTwo={setIsCheckTwo} />
          </Route>
          <Route path="/business">
            <Business setIsCheckThree={setIsCheckThree} />
          </Route>
        </Switch>
      </Maincontent>
    </div>
  );
};

export default Home;
