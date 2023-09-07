import { BrowserRouter as Router,Route,Routes
 } from "react-router-dom"
import { Home} from "./pages"
import Movie from "./pages/Movie"
import SingleMovie from "./pages/SingleMovie"
import Header from "./components/Header"
import SingleHome from "./pages/SingleHome"
import People from "./pages/People"
import SinglPeople from "./pages/Singlpeople"
import {} from "./responsive.css"
function App() {


  return ( 
   <>
    <Router>
      <Header/>
      <Routes>
          <Route exact path="/"element={<Home />}/>
          <Route exact path="/movie"element={<Movie />}/>
          <Route exact path="/people"element={<People />}/>
          <Route exact path="/Single-people/:id"element={<SinglPeople/>}/>
          <Route exact path="/Single-Home/:homeid" element={<SingleHome/>}/>
          <Route exact path="/single-movie/:Singleid"element={<SingleMovie />}/>
      </Routes>  
    </Router>
    </>
  )
}

export default App
