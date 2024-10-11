import Navbar from "../components/Homepage/navbar/navbar.jsx";
import Jumbotron from "../components/Homepage/jumbotron/Jumbotron.jsx";
import ListFilm from "../components/Homepage/list-film/ListFilm.jsx"

const Homepage = () => {
  return (
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Navbar />
                <Jumbotron/>
                <ListFilm/>
            </div>
  )
};

export default Homepage;
