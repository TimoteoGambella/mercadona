import { Home, Signup, Login } from 'views'
import { Products } from 'features'
export const pagesData = [
    {
        path: "/home",
        element: <Home/>,
        title: "home" 
    },
    {
        path: "products",
        element: <Products/>,
        title: "products"
    },
    {
        path: "registro",
        element: <Signup/>,
        title: 'signup'
    },
    {
        path: "login",
        element: <Login/>,
        title: 'login'
    }
]


