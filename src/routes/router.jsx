import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import LoginPage from '../pages/login'
import RegisterPage from '../pages/register'
import Homepage from '../pages/homepage'

const route = createBrowserRouter([
    {
        path :'',
        element : <App/>
    },
    {
        path:'/login',
        element: <LoginPage/>
    },
    {
        path : '/register',
        element: <RegisterPage/>
    },
    {
        path:'/homepage',
        element: <Homepage/>
    }
])

export default route;