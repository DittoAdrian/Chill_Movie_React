import useCount from '../store/useCount'
import {Link} from 'react-router-dom'

const ButtonToPage = (props) => {
    return (
        <Link to='/login'>
        <button style={{backgroundColor:'rgb(88,80,236)'}}>
            {props.title} 
            <img src="./public/right-arrow.svg" alt="" />
        </button>       
        </Link>
)}
export default ButtonToPage;