import React from 'react';
import './App.css';
import { BrowserRouter,Switch,Router, Route} from 'react-router-dom';
import home from './components/home';
import dashboard from './components/dashboard';
function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
   
    <Switch>
      <Route exact path="/" component={home}/>
      <Route path="/home" component={home}/>
      <Route path="/dashboard" component={dashboard}/>
    </Switch>
      
    </div>
    
    </BrowserRouter>
  );
}

export default App;
