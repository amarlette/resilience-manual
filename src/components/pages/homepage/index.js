import PropTypes from "prop-types";
import React, { Component } from "react";

import "../../../../node_modules/semantic-ui-css/semantic.min.css";

import {withRouter} from 'react-router';

import {
  Button,
  Container,
  Divider,
  Grid,
  Card,
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


import ResponsiveContainer from "../../containers/responsive-container";

const Homepage = () => (
  <ResponsiveContainer page="home">
    <Container text style={{ marginTop: "4em" }}>
        <Header as="h1">About Us</Header>
        <p>
        Being a college student can be very time consuming, and If you attend an institute such as Tech, it can also be extremely stressful. Out of this, Mental Health becomes a very concerning topic. This site works to address the lack of communication and information for those students with predispositions to mental health. We realize there are students who may still struggle with their own problems but not fit into the mental health category. Our goal is to welcome them in with open arms as well. This site will clearly display our concern for the enhancement of students’ mental states, and work to help students better navigate our own-campus resources. 
        </p>
        <Header as="h2">Overview of Site</Header>
        <Grid columns={2}>
        <Grid.Row stretched>
            <Grid.Column>
            <Card>
                <Card.Content header='Mental Maintenance' />
                <Card.Content description='Stress is common among college students. If you are looking for factors causing college stress.'/>
                <Card.Content extra>
                <Link to='/mentalmaintenance'>
                    <Button color='yellow'>Click Here</Button>
                </Link>
                </Card.Content>
            </Card>

            </Grid.Column>
            <Grid.Column>
            <Card>
                <Card.Content header='Emergency Resources' />
                <Card.Content description='If you are looking for emergency services.'/>
                <Card.Content extra>
                <Button color='yellow'>Click Here</Button>
                </Card.Content>
            </Card>
            </Grid.Column>
        </Grid.Row>    
        </Grid>

        <Grid columns={2}>
        <Grid.Row stretched>
        <Grid.Column>
            <Card>
                <Card.Content header='Getting Help' />
                <Card.Content description='Georgia Tech values mental health as one of its major responsibilities. It offers general services that are accessible in our daily lives.'/>
                <Card.Content extra>
                <Button color='yellow'>Click Here</Button>
                </Card.Content>
            </Card>
            </Grid.Column>
            <Grid.Column>
            <Card>
                <Card.Content header='Mental Health + Disability' />
                <Card.Content description='Disability is also a major source of mental health problem. If you are looking for services for disabilities'/>
                <Card.Content extra>
                <Button color='yellow'>Click Here</Button>
                </Card.Content>
            </Card>
            </Grid.Column>
            
        </Grid.Row>
        </Grid>
        

    </Container>
    <Segment inverted vertical style={{ marginTop: "4em", padding: "3em" }}>
        <Container>
        </Container>
    </Segment>
            </ResponsiveContainer>
);

export default withRouter(Homepage);