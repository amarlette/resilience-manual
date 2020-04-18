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
            <ResponsiveContainer page ="timemanagement">
                <Container text style={{ marginTop: "4em" }}>
                    <Header as="h1">Time Management Skills & Techniques</Header><br></br>
                    <Header as="h2">Time Management Skills</Header>
                    <Header as="h3">Reward yourself: </Header>
                    <ul>
                        <li>When: Reward yourself after completing a task</li>
                        <li>Why:     Downtime is important to eliminate excessive stress</li>
                        <li>Good rewards: healthy activities that involve exercising the mind and body. Ex Meditate, cook a meal, play a sport, go to a spa </li>
                        <li>Bad rewards: unhealthy activities that may result in tiredness. Ex Play video games, drink with friends</li>
                    </ul>

                    <Header as="h3">Some effective time management skills are: </Header>
                    <Grid stackable columns={2} celled='internally'>
                        <Grid.Row>
                        <Grid.Column>
                            <h4>Plan your day in advance and set goals for the day</h4>
                        <ul>
                            <li>Having clear objectives, defined tasks, and resources to make a clear plan to achieve your goal</li>
                            <li>Keep a to-do list that visualizes all the tasks you need to complete for the day</li>
                            <li>Apps, like Todoist and Things, help users manage tasks and workflow</li>
                        </ul>
                        </Grid.Column>
                        <Grid.Column>
                            <h4>Prioritize tasks </h4>
                        <ul>
                            <li>Figure out which tasks are high value which can contribute the most positive value to the team</li>
                            <li>Focus on the most important tasks instead of focusing on tasks that are not urgent</li>
                        </ul>
                        </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                        <Grid.Column>
                        <h4>Manage distraction </h4>
                        <ul>
                            <li>Studies show that it takes a person 23 minutes to refocus after an interruption</li>
                            <li>Identify the sources of distractions, such as, emails, phone calls, meetings, and Slack</li>
                            <ul>
                                <li>Apps, like Timely, can automatically record time you spent on each distraction, helping increase your awareness of things that often distract you</li>
                            </ul>
                        </ul>
                        </Grid.Column>
                        <Grid.Column>
                        <h4>Block off time on your calendar </h4>
                        <ul>
                            <li>Sets a healthy pressure to complete it</li>
                            <li>Block off time for priority tasks, routine tasks, and breaks</li>
                        </ul>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    </Container>

                    <Container text style={{ marginTop: "4em" }}>
                    <Header as='h2' dividing>Time Management Techniques</Header>
                    

                    <Grid stackable columns={2}>
                        <Grid.Row>
                            <Grid.Column width={8}>
                            <Image src={Kaban} />
                            </Grid.Column>
                            <Grid.Column width={8}>
                            <h3>Kaban Technique</h3>
                            <ul>
                            <li>Create four columns (Backlog, To Do, In Progress, Done) </li>
                            <li>Track how each task move across these columns to visualize the progress of your project</li>
                            </ul>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                            <h3>Time Blocking</h3>
                            <ul>
                            <li>Block off time for a task or activity to work on </li>
                            <li>Separate them into four stages:</li>
                                <ol>
                                    <li>The Planning Stage</li>
                                    <li>The Blocking Stage</li>
                                    <li>The Acting Stage</li>
                                    <li>The Revision Stage</li>
                                </ol>
                            </ul>
                            </Grid.Column>
                            <Grid.Column width={8}>
                            <Image src={TimeBlock}/>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={8}>
                            <Image src={Seinfeld} />
                            </Grid.Column>
                            <Grid.Column width={8}>
                            <h3>The Seinfeld Method </h3>
                            <ul>
                                <li>Each day if you work on a skill, you mark the day red. If you don’t make it red, then you break the chain. The goal is to not break the chain.</li>
                            </ul>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
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