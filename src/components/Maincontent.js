import styled from "styled-components";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router";
import Verify from "../components/Verify"
import Social from "../components/Social";
import Business from "../components/Business";

const Maincontent = () => {
    return ( 
        <Content>
            <Navbar/>
            <Switch>
                <Route path="/" exact>
                    <Verify/>
                </Route>
                <Route path="/social">
                    <Social/>
                </Route>
                <Route path="/business">
                    <Business/>
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