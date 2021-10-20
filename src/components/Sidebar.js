import styled from "styled-components";
import image1 from "../image/image1.png"
const Sidebar = () => {
    return ( 
        <StyleSidebar>
            <Div>
                <Img src={image1} alt="logo" />
            </Div>
        </StyleSidebar>
     );
}

const StyleSidebar = styled.div`
position: absolute;
width: 30%;
height: 100vh;
left: 0px;
top: 0px;
background: #F3E8C9;
display: flex;
align-items: center
`

const Img = styled.img`
    width: 100%
`
const Div = styled.div`
;
`
export default Sidebar;