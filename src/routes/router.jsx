import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import LoginPage from '../pages/login'
import RegisterPage from '../pages/register'


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
        element: <h1 style={{color:'black'}}>Test</h1>
    }
])

export default route;