import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import routes from '../../config/routes';
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
    const auth = getAuth();
    const navigate = useNavigate()

    const logOut = () => {
        signOut(auth).then(() => {
            console.log("User disconnected")
            navigate('/login')
        }).catch((error) => {
            console.log("Error: ", error);
        });
    }


    return (
        <nav className="navbar bg-dark justify-content-center">
            {routes.map((route, index) => (
                <Link to={route.path} key={index} className="nav-link fs-5 text-white-50 m-2" >{route.name}</Link>
            ))}
            <button className="btn btn-danger" onClick={logOut}>Se déconnecter</button>
        </nav>

    );
};

export default Menu;