import Navigator from "./components/Nav"
import Heroes from "./components/Heroes";
import Credits from "./components/Credits";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HeroDetails from "./components/HeroInfo";
import Home from "./components/Home";
function App() {




  return (

    <Router>
      <div className="App">
        <header className="App-header">
          <Navigator/>
        </header>
        <Routes>     
          <Route path="/" element={<Home/>}></Route> 
          <Route path="/heroes" element={<Heroes/>}/>
          <Route path="/credits" element={<Credits/>}/>
          <Route path="/details/:id" element={<HeroDetails/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
