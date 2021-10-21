import styled from "styled-components";
import image1 from "../image/image1.png"
import {device} from "../util"

const Sidebar = () => {
    return ( 
        <StyleSidebar>
            <div>
                <Img src={image1} alt="logo" />
            </div>
        </StyleSidebar>
     );
}

const StyleSidebar = styled.div`
    position: fixed;
    width: 30%;
    height: 100vh;
    left: 0px;
    top: 0px;
    background: #F3E8C9;
    display: flex;
    align-items: center;
    @media ${device.tabletL} {
        width: 25%;
    }
    @media ${device.tablet}{
        display: none;
    }
    

`


const Img = styled.img`
    width: 100%
`

export default Sidebar;