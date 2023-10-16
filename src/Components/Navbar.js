import {Link} from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className = "navbar">
            <h1>The NavBar Demonstration</h1>
            <div className="links">
                <a href="http://www.amazon.com">Amazon</a>
                <a href="http://www.google.com">Google</a>
                
            </div>
        </nav>
     );
}
 
export default Navbar;