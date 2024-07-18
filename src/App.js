
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/contact';
import Header from './components/Header';


import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom'


function App() {
  return (
    <div>
    

       <Router>
      
      <Header/>
      <div>
        <Routes>
      

          <Route path="/" element={<Home/>}>
          
          </Route>

          <Route path="/about" element={<About/>}>
          
          </Route>

          <Route path="/contact" element={<Contact/>}>
       
          </Route>
        </Routes>

      </div>

    </Router>
    </div>
  )
}

export default App;
