import styled from "styled-components";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router";
import Verify from "../components/Verify"
import Social from "../components/Social";
import Business from "../components/Business";
import { useState } from "react";

const Maincontent = () => {
    const [isCheckOne, setIsCheckOne] = useState(false)
    const [isCheckTwo, setIsCheckTwo] = useState(false)
    const [isCheckThree, setIsCheckThree] = useState(false)
    return ( 
        <Content>
            <Navbar isCheckOne={isCheckOne} isCheckTwo={isCheckTwo} isCheckThree={isCheckThree}/>
            <Switch>
                <Route path="/" exact>
                    <Verify setIsCheckOne={setIsCheckOne}/>
                </Route>
                <Route path="/social">
                    <Social setIsCheckTwo={setIsCheckTwo}/>
                </Route>
                <Route path="/business">
                    <Business setIsCheckThree={setIsCheckThree}/>
                </Route>
            </Switch>
        </Content>
     );
}
 
const Content = styled.div`
    width: 70%;
    height: 100vh;
    margin-left: 30%;
    padding: 2rem 3rem;
    overflow: auto; 

`
export default Maincontent;