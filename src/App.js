import PropTypes from "prop-types";
import React, { Component } from "react";

import "../node_modules/semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Homepage from './components/pages/homepage';
import AboutUspage from './components/pages/aboutuspage';
import MentalMaintenancepage from './components/pages/mentalmaintenancepage';
import OutsideHelppage from './components/pages/outsidehelppage';


export default class App extends React.Component {

  render() {
    return (
      <Router>
        <Route exact path='/' component={Homepage}/>
        <Route path='/aboutus' component={AboutUspage}/>
        <Route path='/mentalmaintenance' component={MentalMaintenancepage}/>
        <Route path='/outsidehelp' component={OutsideHelppage}/>
      </Router>
    )
  }
}