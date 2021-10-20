import Maincontent from "../components/Maincontent";
import Sidebar from "../components/Sidebar";
import "../styles/style.scss"


const Home = () => {
    
    return ( 
        <div className="homepage">
            <Maincontent/>
            <Sidebar/>
           

        </div>
     );
}
 
export default Home;