import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "../../pages/login/Login";

export interface IAuthRouteProps {
    children: any
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
    const { children } = props
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoading(false);
                console.log("There is an user !");
            } else {
                console.log('unauthorized');
                navigate('/login');
            }
        });
    }, [auth, navigate]);

    return loading ?
        (
            <Login />
        )
        :
        (
            <>{children}</>
        )
};

export default AuthRoute;