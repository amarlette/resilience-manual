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
  Dropdown,
  Menu,
  Responsive,
  Segment,
  Visibility
} from "semantic-ui-react";

import {
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";

import HomepageHeading from '../../pages/homepage/homepage-heading';

import {withRouter} from 'react-router';

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 *
 * @author Alexandra Marlette
 */
class DesktopContainer extends Component {
    state = {};

    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });

    render() {
      const { children } = this.props;
      const { fixed } = this.state;
      
      return (
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >

            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 700, padding: "1em 0em" }}
              vertical
            >
              <Menu
                fixed={fixed ? "top" : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size="large"
              >
                <Container>
                  <Router forceRefresh = "True">
                    <Menu.Item as={NavLink} exact to="/">
                      Home
                    </Menu.Item>
                    <Dropdown item text='Mental Maintenance'>
                    <Dropdown.Menu>
                      <Dropdown.Item as={NavLink} to="/studyskills">Study Skills</Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/timemanagement">Time Management</Dropdown.Item>
                      <Dropdown.Item as={NavLink} to="/meditation">Meditation</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                    <Menu.Item as={NavLink} to="/outsidehelp">Outside Help</Menu.Item>
                    <Menu.Item as={NavLink} to="/accommodations">Accommodations</Menu.Item>
                    <Menu.Item position="right">
                    <Link to='/emergencyresources'>
                      <Button color='red'>Emergency Resources</Button>
                    </Link>                    </Menu.Item>
                  </Router>
                </Container>
              </Menu>
              <HomepageHeading page={this.props.page} />
            </Segment>
          </Visibility>

          {children}
        </Responsive>
      );
    }
  }

DesktopContainer.propTypes = {
children: PropTypes.node
};

export default withRouter(DesktopContainer);
