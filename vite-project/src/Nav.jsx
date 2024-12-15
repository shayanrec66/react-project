import {React,useState}  from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css"
const Navbar = () =>{
   const [menu ,setmenu] =useState(false)
    return(
        <nav>
            <div>
                
                <Link to="/home" className="title">logo</Link>
            </div>
            <div className="menu" onClick={() =>{
                setmenu(!menu)
            }}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menu ? "open" : ""}>                
                <li>
                    <NavLink to="/home"> home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">about</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">contact</NavLink>
                </li>
                <li>
                    <NavLink to="/servis">servis</NavLink>
                </li>
                
                </ul>
        </nav>
    )
}
export default Navbar;