import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Navbar } from './Components/Navbar';
import { selectUser } from './features/userSlice';
import Home from './Pages/Home';
import Signin from './Pages/Signin';

function App() {
  const user = useSelector(selectUser);

  return (
    <Router>
      <div >
        {user ? <Home /> : <Routes>
        <Route path="/" element={ <Signin/> }/>
          </Routes>}
          
        
        
      </div>
    </Router>
  );
}

export default App;
