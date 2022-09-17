import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Navbar } from './Components/Navbar';
import Home from './Pages/Home';
import Signin from './Pages/Signin';

function App() {
  return (
    <Router>
      <div >
        <Routes>
          <Route path="/" element={ <Signin/> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
