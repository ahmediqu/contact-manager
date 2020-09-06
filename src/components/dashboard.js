import React from 'react';
import PropTypes from 'prop-types';
import   useStyles  from '../layouts/dasbhoard/generalJsxStyle';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Sidebar from '../layouts/dasbhoard/sidebar';
import   '../layouts/dasbhoard/dashboard.css';
import AddContact from '../components/Dashboard/AddContact';
import ViewContact from '../components/Dashboard/ViewContact';
import { Switch,Route } from 'react-router-dom';
function Dashboard(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
    <Sidebar props={props}/>
    <div className="main-content">
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch props={props}>
        <Route exact path={props.match.path} component={ViewContact}/>
          <Route path={`${props.match.path}/view-contacts`} component={ViewContact}/>
          <Route path={`${props.match.path}/add-contacts`} component={AddContact}/>
        </Switch>
      </main>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
