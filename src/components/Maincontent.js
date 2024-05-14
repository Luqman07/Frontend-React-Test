import styled from "styled-components";
import Navbar from "./Navbar";
import {device} from "../util"

const Maincontent = ({children, isCheckOne, isCheckTwo, isCheckThree}) => {
    
    return ( 
        <Content>
            <Navbar isCheckOne={isCheckOne} isCheckTwo={isCheckTwo} isCheckThree={isCheckThree}/>
            {children}
        </Content>
     );
}
 
const Content = styled.div`
    width: 70%;
    height: 100vh;
    margin-left: 30%;
    padding: 2rem 3rem;
    overflow: auto; 
    @media ${device.tabletL} {
        width: 75%;
        margin-left: 25%;
        padding: 2rem 2rem
    }
    @media ${device.tablet} {
        width: 100%;
        padding: 2rem 2rem;
        margin-left: 0;
    }
    @media ${device.mobileL} {
        padding: 2rem 1rem;
    }

`
export default Maincontent;