import { Iroute } from "../interfaces/interface"
import Courses from "../pages/courses/Courses"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import Recettes from "../pages/recettes/Recettes"
import Setting from "../pages/setting/Setting"
import Todolist from "../pages/todolist/Todolist"
import Voyages from "../pages/voyages/Voyages"

const routes: Iroute[] = [
    {
        path: '/',
        element: Home,
        protected: true,
        display: false,
        name: 'Home App',
        background: ''
    },
    {
        path: '/login',
        element: Login,
        protected: true,
        display: false,
        name: 'Login Page',
        background: ''
    },
    {
        path: '/courses',
        element: Courses,
        protected: true,
        display: true,
        name: 'Courses',
        background: 'https://www.caj-grand-font.fr/wp-content/uploads/2019/03/Epicerie.jpg'
    },
    {
        path: '/recettes',
        element: Recettes,
        protected: true,
        display: true,
        name: 'Recettes',
        background: 'https://as1.ftcdn.net/v2/jpg/00/81/44/72/1000_F_81447277_JKUvlDuXOrSjo5gZjiID8iw3FZIUDe4N.jpg'
    },
    {
        path: '/voyages',
        element: Voyages,
        protected: true,
        display: true,
        name: 'Voyages',
        background: 'https://as1.ftcdn.net/v2/jpg/03/22/50/82/1000_F_322508235_z8VU4E8UvJkdJ6u42PvqAt0Du383oele.jpg'
    },
    {
        path: '/todolist',
        element: Todolist,
        protected: true,
        display: true,
        name: 'ToDoList',
        background: 'https://as2.ftcdn.net/v2/jpg/02/73/67/31/1000_F_273673110_aX7GWSPBBbIaMLwmMu8aUcq1AYDJfd65.jpg'
    },
    {
        path: '/setting',
        element: Setting,
        protected: true,
        display: false,
        name: 'Setting',
        background: ''
    },
]


export default routes