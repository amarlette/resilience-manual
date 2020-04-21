import PropTypes from "prop-types";
import React, { Component } from "react";

import "../../../../node_modules/semantic-ui-css/semantic.min.css";

import {withRouter} from 'react-router';
import { ResponsivePie } from '@nivo/pie'

import {
  Button,
  Container,
  Divider,
  Grid,
  Card,
  Header,
  Icon,
  Image,
  Tab,
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
import PressureWorldCloud from "./img/PressureWordCloud.png";
import HealthyEatingGraph from "./img/healthyEatingGraph.svg";
import DoingWhatYouWant from "./img/doingwhatyouwant.svg";

var data = [
    {
      "id": "I eat healthily enough",
      "label": "I already think I eat healthily enough",
      "value": 5,
      "color": "hsl(47, 33%, 56%)"
    },
    {
      "id": "Should eat healthier",
      "label": "I would like to eat healthier",
      "value": 10,
      "color": "hsl(212, 100%, 15%)"
    },
    {
      "id": "Important but not a top concern in my life",
      "label": "I don't think I eat healthily enough, but it's not a top concern in my life right now",
      "value": 37,
      "color": "hsl(0, 0%, 50%)"
    },
  ]


const Homepage = () => (
  <ResponsiveContainer>
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
                {/* <Link to='/mentalmaintenance'>
                    <Button color='yellow'>Click Here</Button>
                </Link> */}
                </Card.Content>
            </Card>

            </Grid.Column>
            <Grid.Column>
            <Card>
                <Card.Content header='Emergency Resources' />
                <Card.Content description='If you are looking for emergency services.'/>
                <Card.Content extra>
                {/* <Button color='yellow'>Click Here</Button> */}
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
                {/* <Button color='yellow'>Click Here</Button> */}
                </Card.Content>
            </Card>
            </Grid.Column>
            <Grid.Column>
            <Card>
                <Card.Content header='Mental Health + Disability' />
                <Card.Content description='Disability is also a major source of mental health problem. If you are looking for services for disabilities'/>
                <Card.Content extra>
                {/* <Button color='yellow'>Click Here</Button> */}
                </Card.Content>
            </Card>
            </Grid.Column>
            
        </Grid.Row>
        </Grid>
        <Header as="h2">State of Students @ Georgia Tech</Header>
            <p>
                We surveyed students at Georgia Tech to see what caused the most pressure while they are at school. The data we collected is shown below about how stress and the cultured affects students at Georgia Tech. <br></br><br></br>
                *This survey does not include all students at Tech and is a small percentage of students in attendence.

            </p>
            <Header as="h3">In response to the question "Do you feel a lot of pressure at Georgia Tech? How does it affect you?"</Header>
            <Image src={PressureWorldCloud} size='large' centered/>
        <Grid columns={2}>
        <Grid.Row stretched>
        
            <Grid.Column>
                <Header as="h3">If you don't feel that you eat healthily enough, would you like to eat healthier?</Header>
                <Image src={HealthyEatingGraph} size='large' wrapped />
            </Grid.Column>

            <Grid.Column>
                <Header as="h3">Do you feel like you generally have enough time to do the things that you want to do?</Header>
                <Image src={DoingWhatYouWant} size='large' wrapped />
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