import { NavLink } from "react-router-dom";

const Navbar = ({isCheckOne, isCheckTwo, isCheckThree}) => {
    
    return ( 
        <nav>
            <div className="logout">
                <button>Logout</button>
            </div>
            <ul>
                <li><NavLink className="navlink" activeClassName="selected" to="/Frontend-React-Test" exact ><button>{isCheckOne ? (<span style={{color: 'green'}}>&#10003;</span>) : "1"}</button><span className="text">Verify Account</span></NavLink></li>
                <li><NavLink className="navlink" activeClassName="selected" to="/social"><button>{isCheckTwo ? (<span style={{color: 'green'}}>&#10003;</span>) : "2"}</button><span className="text">Social Handles</span></NavLink></li>
                <li><NavLink className="navlink" activeClassName="selected" to="/business"><button>{isCheckThree ? (<span style={{color: 'green'}}>&#10003;</span>) : "3"}</button><span className="text">Business Category</span></NavLink></li>
            </ul>
        </nav>
     );
}



 
export default Navbar;