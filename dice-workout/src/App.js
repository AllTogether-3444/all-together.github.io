//Pages
import Home from './pages/Home';
import Login from './pages/Home';

//styled components
import { StyledContainer } from "./components/Styles";

import {
  BroeserRouter as Router, Switch, Route 
}from 'react-router-dom';


function App() {
  return (
    <Router>
    <StyledContainer>
      <Login /> 
    </StyledContainer>  
    </Router>
    
  );  
}

export default App;
