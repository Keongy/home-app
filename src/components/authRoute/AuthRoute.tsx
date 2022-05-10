import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loading from "../../pages/loading/Loading";
import { child, get, getDatabase, ref } from "firebase/database";
import { useDispatch } from "react-redux";
import { initList } from "../../redux/listCourse.reducer";
import { initState } from "../../redux/course.reducer";

export interface IAuthRouteProps {
    children: any
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
    const { children } = props
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<boolean>(false)

    const dbRef = ref(getDatabase());
    const dispatch = useDispatch()



    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(true)
                setLoading(false);
                console.log("There is an user !");

            } else {
                setLoading(false);
                console.log('unauthorized');
                navigate('/login');
            }
        });
    }, [auth, navigate]);

    useEffect(() => {
        if (user) {
            get(child(dbRef, 'homeApp/initList/list')).then((snapshot) => {
                console.log("Step: APP UseEffect")
                if (snapshot.exists()) {
                    // console.log('LIST', snapshot.val());
                    console.log('Connection DBREF')
                    dispatch(initList(snapshot.val()))
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });

            get(child(dbRef, 'homeApp/listeCourse/list')).then((snapshot) => {
                console.log("Step: APP GET")
                if (snapshot.exists()) {
                    // console.log('DATA', snapshot.val());
                    console.log('Connection DBREF2222')
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