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
  NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";

import HomepageHeading from '../../pages/homepage/homepage-heading';

import {withRouter} from 'react-router';

/**
 *
 * @author Alexandra Marlette
 */
class MobileContainer extends Component {
    state = {};

    handlePusherClick = () => {
      const { sidebarOpened } = this.state;

      if (sidebarOpened) this.setState({ sidebarOpened: false });
    };

    handleToggle = () =>
      this.setState({ sidebarOpened: !this.state.sidebarOpened });

    render() {
      const { children } = this.props;
      const { sidebarOpened } = this.state;

      return (
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <Sidebar.Pushable>
            <Sidebar
              as={Menu}
              animation="uncover"
              inverted
              vertical
              visible={sidebarOpened}
            >
              <Router forceRefresh = "True">
                <Menu.Item as={NavLink} exact to="/">
                  Home
                </Menu.Item>
                <Menu.Item as={NavLink} to="/aboutus">About Us</Menu.Item>
                <Menu.Item as={NavLink} to="/mentalmaintenance">Mental Maintenance</Menu.Item>
                <Menu.Item as={NavLink} to="/outsidehelp">Outside Help</Menu.Item>
                <Menu.Item position="right">
                  <Button color='red' onClick = {() => this.props.history.push("/emergencyresources")}>Emergency Resources</Button>
                </Menu.Item>
              </Router>
            </Sidebar>

            <Sidebar.Pusher
              dimmed={sidebarOpened}
              onClick={this.handlePusherClick}
              style={{ minHeight: "100vh" }}
            >
              <Segment
                inverted
                textAlign="center"
                style={{ minHeight: 350, padding: "1em 0em" }}
                vertical
              >
                <Container>
                  <Menu inverted pointing secondary size="large">
                    <Menu.Item onClick={this.handleToggle}>
                      <Icon name="sidebar" />
                    </Menu.Item>
                    <Menu.Item position="right">
                    <Button color='red'>Emergency Resources</Button>
                    </Menu.Item>
                  </Menu>
                </Container>
                <HomepageHeading mobile />
              </Segment>

              {children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Responsive>
      );
    }
  }

  MobileContainer.propTypes = {
    children: PropTypes.node
  };

export default withRouter(MobileContainer);
