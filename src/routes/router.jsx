import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import LoginPage from '../pages/login'
import RegisterPage from '../pages/register'
import Navbar from '../components/Homepage/navbar/navbar'
import Homepage from '../pages/homepage'
import Profile from '../pages/profile'

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
        element: <Navbar/>,
        children: [
            {
                path : '/homepage',
                element : <Homepage/>
            },
            {
                path : '/homepage/profile',
                element : <Profile/>
            },
            {
                path: '/homepage/daftar-saya',
                element: <h1>Ini Halaman Daftar Saya</h1>
            }
        ]
    }
])

export default route;