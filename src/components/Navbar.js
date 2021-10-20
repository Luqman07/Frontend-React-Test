import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logout">
                <button>Logout</button>
            </div>
            <ul>
                <li><NavLink className="navlink" activeClassName="selected" to="/" exact><button>1</button><span>Verify Account</span></NavLink></li>
                <li><NavLink className="navlink" activeClassName="selected" to="/social"><button>2</button><span>Social Handles</span></NavLink></li>
                <li><NavLink className="navlink" activeClassName="selected" to="/business"><button>3</button><span>Business Category</span></NavLink></li>
            </ul>
        </nav>
     );
}



 
export default Navbar;