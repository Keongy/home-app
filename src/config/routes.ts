import { Iroute } from "../interfaces/interface"
import Courses from "../pages/courses/Courses"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import Recettes from "../pages/recettes/Recettes"
import Todolist from "../pages/todolist/Todolist"
import Voyages from "../pages/voyages/Voyages"

const routes: Iroute[] = [
    {
        path: '/',
        element: Home,
        protected: true,
        display: false,
        name: 'Home App'
    },
    {
        path: '/login',
        element: Login,
        protected: true,
        display: false,
        name: 'Login Page'
    },
    {
        path: '/courses',
        element: Courses,
        protected: true,
        display: true,
        name: 'Courses'
    },
    {
        path: '/recettes',
        element: Recettes,
        protected: true,
        display: true,
        name: 'Recettes'
    },
    {
        path: '/voyages',
        element: Voyages,
        protected: true,
        display: true,
        name: 'Voyages'
    },
    {
        path: '/todolist',
        element: Todolist,
        protected: true,
        display: true,
        name: 'ToDoList'
    },
]


export default routes