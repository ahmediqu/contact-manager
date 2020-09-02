import React from 'react'
import { Switch,Route } from 'react-router-dom';
import Header from '../layouts/home/header';
import Login from '../components/Home/Login';
import Register from '../components/Home/Register';
/**
* @author
* @function home
**/

const home = (props) => {
  console.log(props);
  return (
    <div>
        <Header props={props}/>
        
        <Switch>
          <Route exact path={props.match.path} component={Login}/>
          <Route path={`${props.match.path}/Register`} component={Register}/>
          <Route path={`${props.match.path}/Login`} component={Login}/>
        </Switch>
    </div>
   );

 }

export default home