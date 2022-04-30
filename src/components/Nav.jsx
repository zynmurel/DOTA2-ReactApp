
import {NavLink } from 'react-router-dom';
const Navigator = () => {
    return ( 
        <div className="navigator">
                <NavLink
                to="/"
                style={({ isActive }) =>
                isActive ? {color:"black", backgroundColor:"orange", borderColor: "black"} : undefined
                }
            >
                HOME
            </NavLink>
            <NavLink
            to="/heroes"
            style={({ isActive }) =>
              isActive ? {color:"black", backgroundColor:"orange", borderColor: "black"} : undefined
            }
          >
            HEROES
          </NavLink>
            <NavLink
            to="/credits"
            style={({ isActive }) =>
              isActive ? {color:"black", backgroundColor:"orange", borderColor: "black"} : undefined
            }
          >
            CREDITS
          </NavLink>
        </div>
     );
}
 
export default Navigator;