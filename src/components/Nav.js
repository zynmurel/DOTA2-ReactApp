import {Link} from 'react-router-dom';
const Navigator = () => {
    return ( 
        <div className="navigator">
            <Link to="/">Home</Link>
            <Link to="/heroes">Heroes</Link>
            <Link to="/credits">Credits</Link>
        </div>
     );
}
 
export default Navigator;