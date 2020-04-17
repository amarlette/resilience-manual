import PropTypes from "prop-types";
import React, { Component } from "react";

import "../../../../node_modules/semantic-ui-css/semantic.min.css";

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

import DesktopContainer from '../desktop-container';
import MobileContainer from '../mobile-container';

const ResponsiveContainer = (props, { children }) => (
    <div>
        <DesktopContainer page={props.page}>{children}</DesktopContainer>
        <MobileContainer page={props.page}>{children}</MobileContainer>
    </div>
);

ResponsiveContainer.propTypes = {
    children: PropTypes.node
};

export default ResponsiveContainer;