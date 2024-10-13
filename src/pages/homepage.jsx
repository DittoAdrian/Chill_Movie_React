import Navbar from "../components/Homepage/navbar/navbar.jsx";
import Jumbotron from "../components/Homepage/jumbotron/jumbotron.jsx";
import ListFilm from "../components/Homepage/list-film/ListFilm.jsx"
import Footer from '../components/Homepage/footer/footer.jsx'

const Homepage = () => {
  return (
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Navbar />
                <Jumbotron/>
                <ListFilm/>
                <Footer/>
            </div>
  )
};

export default Homepage;
