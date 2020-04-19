import PropTypes from "prop-types";
import React, { Component } from "react";

import "../../../../node_modules/semantic-ui-css/semantic.min.css";

import {withRouter} from 'react-router';

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

import ResponsiveContainer from "../../containers/responsive-container";

import Kaban from "./img/kaban.png";
import TimeBlock from "./img/timeblocking-example.png";
import Seinfeld from "./img/seinfeld.png";

export class MentalMaintenancepage extends React.Component {

    render() {
        return (
            <ResponsiveContainer>
                <Container text style={{ marginTop: "4em" }}>
                    <Header as="h1">Meditation</Header><br></br>
                    <Header as="h2">What is mindfulness? </Header><br></br>

                    <ul>
                        <li>Mindfulness  - maintaining a moment-by-moment awareness of our thoughts, feelings, bodily sensations, and surrounding environment, through a gentle, nurturing lens. When we practice mindfulness, our thoughts tune into what we're sensing in the present moment rather than rehashing the past or imagining the future.</li>
                        <li>Mindfulness is that place in the middle, where we are neither consumed by nor reject what is going on. We can be fully present such that we’re interested in what’s going on, but we’re not forming judgments or dashing off into proliferation of thoughts. By being with what is, we can create a space where creativity arises, where other options arise. </li>
                        <li>
                        Mindfulness is linked to changes in the production of hormones and other chemicals that impact our physical health.   
                        </li>
                        <li>Scientists postulate that the development of mindfulness leads to non-judgmental and non-reactive acceptance of experience, which is associated with positive psychological and physical outcomes. </li>
                        <li>Mindfulness may lessen emotional experience of pain - In meditators, the region of the brain associated with unpleasantness of pain is less connected than normal to the prefrontal cortex (where emotions are processed) </li>
                        <li>Mindfulness may lessen fearful responses - meditation reduces the density of neurons and hence the activity in the amygdala and increases neuron density in the prefrontal cortex, which is an important area for regulating emotions. The reactive fear center of the brain shrinks, and the more thoughtful response center of the brain grows.</li>
                    </ul>
            
                </Container>

                <Segment inverted vertical style={{ marginTop: "4em", padding: "3em" }}>
                    <Container>
                    </Container>
                </Segment>
            </ResponsiveContainer>
        )
    }
}

export default withRouter(MentalMaintenancepage);