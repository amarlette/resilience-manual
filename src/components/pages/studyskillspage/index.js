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
import Cornell from "./img/cornell.png";

export class MentalMaintenancepage extends React.Component {

    render() {
        return (
            <ResponsiveContainer>
                <Container text style={{ marginTop: "4em" }}>
                <Header as="h1">Study Skills</Header><br></br>
                <Header as='h2' attached='top'>The Pomodoro Technique</Header>
                <Segment attached='bottom'>
                <p>The essence of the Pomodoro Technique is <strong>to work with time, instead of struggling against it.</strong> It is a time management system invented for the sole purpose of avoiding a race against the clock when it comes to assignment completion and deadlines.</p>

                <Grid stackable columns={2}>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <h3>Core Process</h3>
                                <p>Consists of 6 steps:</p>
                                <ol>
                                    <li>Choose a task.</li>
                                    <li>Set a time on the Pomodoro</li>
                                    <li>Work until Pomodoro goes off</li>
                                    <li>Check the task off</li>
                                    <li>Take a break</li>
                                    <li>Longer break after 4 pomodoros</li>
                                </ol>
                            </Grid.Column>
                            <Grid.Column width={8}>
                            <h3>Daily To-Dos</h3>
                            <ol>
                            <li>Measure effort required for activity </li>
                            <li>Cut interruptions</li>
                            <li>Estimate effort more accurately</li>
                            <li>Set timetable</li>
                            <li>Make own objectives</li>
                            </ol>
                            </Grid.Column>
                        </Grid.Row>

                    </Grid>
                    </Segment>

                <Header as='h2' attached='top'>The Cornell Notetaking Method</Header>
                <Segment attached>
                <p>Organize class notes into digestible summaries. Puts the main points, cues, and summaries into a single location.</p>

                <Grid stackable columns={2}>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <h3>Method</h3>
                                <p>The notetaking paper is split into three regions:</p>
                                <ul>
                                    <li><strong>Cues</strong> Section</li>
                                    <li><strong>Notes</strong> Section</li>
                                    <li><strong>Summary</strong> Section</li>
                                </ul>
                            </Grid.Column>
                            <Grid.Column width={8}>
                            <Image src={Cornell} alt="Cornell Notetaking Method Image:
                                A piece of lined paper with some notes taken using the Cornell notetaking method that summarize and explain Mordor, a fictional location from 'The Lord of the Rings'. The cues are in the margin on the left side of the paper, the notes section is on the right side of the paper, and the summary is at the bottom of the page.
                                "/>
                            </Grid.Column>
                        </Grid.Row>

                </Grid>
                </Segment>

                <Header as='h2' attached='top'>The Distributed Practice Learning Method</Header>
                <Segment attached>
                <p>Humans learn concepts better when they are studied in several sessions rather than a single one, a.k.a the Spacing Effect.</p>

                <h3>Method</h3>
                    <p>The idea is to break one’s learning into several short sessions over a long period of time. It is     necessary to stick to a schedule.</p>
                    <h4>Process:</h4>
                    <ul>
                        <li>Find a distraction-free zone for your session.</li>
                        <li>Begin a session (note that you can use a Pomodoro timer for this!). </li>
                        <li>Remember to take short breaks between the sessions, and longer breaks every 5 sessions. </li>
                    </ul>
                </Segment>
                    


                    
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