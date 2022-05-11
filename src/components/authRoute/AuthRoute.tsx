import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loading from "../../pages/loading/Loading";
import { child, get, getDatabase, ref } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { initList } from "../../redux/listCourse.reducer";
import { initState } from "../../redux/course.reducer";
import { addUser } from "../../redux/userAuth.reducer";

export interface IAuthRouteProps {
    children: any
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
    const { children } = props
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(true);

    const dbRef = ref(getDatabase());
    const dispatch = useDispatch()
    const user = useSelector<any>(state => state.userAuth)




    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // setUser(true)
                setLoading(false);
                dispatch(addUser(true))
                // console.log("There is an user !");

            } else {
                setLoading(false);
                dispatch(addUser(false))
                console.log('unauthorized');
                navigate('/login');
            }
        });
    }, [auth, navigate]);

    useEffect(() => {
        if (user) {
            get(child(dbRef, 'homeApp/initList/list')).then((snapshot) => {
                if (snapshot.exists()) {
                    // console.log('LIST', snapshot.val());
                    // console.log('Connection DBREF')
                    dispatch(initList(snapshot.val()))
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });

            get(child(dbRef, 'homeApp/listeCourse/list')).then((snapshot) => {
                if (snapshot.exists()) {
                    // console.log('DATA', snapshot.val());
                    // console.log('Connection DBREF2222')
                    dispatch(initState(snapshot.val()))
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        }

    }, [user])


    return loading ?
        (
            <Loading />
        )
        :
        (
            <>{children}</>
        )
};

export default AuthRoute;