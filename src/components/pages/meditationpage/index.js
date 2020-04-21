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
    Visibility, 
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
import Audio from "../../audio-player";


import Kaban from "./img/kaban.png";
import TimeBlock from "./img/timeblocking-example.png";
import Seinfeld from "./img/seinfeld.png";
import MeditationLogo from "./img/gt-meditation-logo.png";


const Meditation1 = "./audio-files/blah.mp3";

export class MentalMaintenancepage extends React.Component {
    

    render() {
        return (
            <ResponsiveContainer>
                <Container text style={{ marginTop: "4em" }}>
                    <Header as="h1">Meditation</Header><br></br>
                    <Header as="h2">What is mindfulness? </Header><br></br>

                    <ul>
                        <li>Mindfulness is maintaining a moment-by-moment awareness of our thoughts, feelings, bodily sensations, and surrounding environment, through a gentle, nurturing lens. When we practice mindfulness, our thoughts tune into what we're sensing in the present moment rather than rehashing the past or imagining the future.</li>
                        <li>We neither consumed by nor reject what is going on. Being mindful allows us to create a space where creativity arises. </li>
                        <li>Scientists postulate that the development of mindfulness leads to non-judgmental and non-reactive acceptance of experience, which is associated with positive psychological and physical outcomes. </li>
                        <li>Mindfulness may lessen emotional experience of pain - In meditators, the region of the brain associated with unpleasantness of pain is less connected than normal to the prefrontal cortex (where emotions are processed) </li>
                        <li>Mindfulness may lessen fearful responses - meditation reduces the density of neurons and hence the activity in the amygdala and increases neuron density in the prefrontal cortex, which is an important area for regulating emotions. The reactive fear center of the brain shrinks, and the more thoughtful response center of the brain grows.</li>
                    </ul>
                    <Header as="h1">GT Meditation Club</Header><br></br>
                    <Image src={MeditationLogo} alt="GT Meditation Club Logo"/>
                    The purpose of the Meditation Club is to promote the well-being of Tech students, faculty, and staff through the practice of meditation. One goal includes members learning mindfulness and meditation techniques to relax, focus, and connect with oneself on a deeper level. We provide the space and time learn about different types of meditation practices that exist. All of our meetings are free and open for anyone to attend.
                    <br></br>Find out more about us at: <a href="https://www.facebook.com/groups/GTMeditationClub/">https://www.facebook.com/groups/GTMeditationClub/</a>
                    <br></br>
                    We have collaborated with the GT Meditation Club to get you two sample meditation sessions that you can follow along with anytime you need it! 
                    <Header as="h3">Mindfulness Meditation Practice (10 minutes)</Header><br></br>
                        <div id="audio_div"></div>
                    <Header as="h3">Mindfulness Breathing Meditation Practice (15 minutes)</Header><br></br>

                    <Audio file={Meditation1}></Audio>
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