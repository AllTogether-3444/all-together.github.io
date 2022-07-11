//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

//styled components
import { StyledContainer } from "./components/Styles";

// Loader css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import {
  BroeserRouter as Router, Switch, Route 
}from 'react-router-dom';


function App() {
  return (
  <Router>
    <StyledContainer>
      <Register />
    </StyledContainer>  
  </Router>
    
  );  
}

export default App;
