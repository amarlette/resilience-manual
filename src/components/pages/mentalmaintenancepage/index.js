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



export class MentalMaintenancepage extends React.Component {

    render() {
        return (
            <ResponsiveContainer>
                <Container text style={{ marginTop: "4em" }}>
                    <Header as="h1">Mental Maintenance</Header>
                    <h2>Time Management Skills & Techniques </h2>
                    <h3>Reward yourself: </h3>
                    <ul>
                        <li>When: Reward yourself after completing a task</li>
                        <li>Why:     Downtime is important to eliminate excessive stress</li>
                        <li>Good rewards: healthy activities that involve exercising the mind and body. Ex Meditate, cook a meal, play a sport, go to a spa </li>
                        <li>Bad rewards: unhealthy activities that may result in tiredness. Ex Play video games, drink with friends</li>
                    </ul>

                    <h3>Some effective time management skills are: </h3>
                    <ul>
                        <li>Plan your day in advance and set goals for the day</li>
                        <ul>
                            <li>Having clear objectives, defined tasks, and resources to make a clear plan to achieve your goal</li>
                            <li>Keep a to-do list that visualizes all the tasks you need to complete for the day</li>
                            <li>Apps, like Todoist and Things, help users manage tasks and workflow</li>
                        </ul>

                        <li>Prioritize tasks </li>
                        <ul>
                            <li>Figure out which tasks are high value which can contribute the most positive value to the team</li>
                            <li>Focus on the most important tasks instead of focusing on tasks that are not urgent</li>
                        </ul>

                        <li>Manage distraction </li>
                        <ul>
                            <li>Studies show that it takes a person 23 minutes to refocus after an interruption</li>
                            <li>Identify the sources of distractions, such as, emails, phone calls, meetings, and Slack</li>
                            <ul>
                                <li>Apps, like Timely, can automatically record time you spent on each distraction, helping increase your awareness of things that often distract you</li>
                            </ul>
                        </ul>

                        <li>List of time management techniques: </li>
                        <ul>
                            <li>Sets a healthy pressure to complete it</li>
                            <li>Block off time for priority tasks, routine tasks, and breaks</li>
                        </ul>
                    </ul>
                    <h2>Time Management Techniques</h2>
                    <h3>Kaban Technique</h3>
                    <ul>
                        <li>Create four columns (Backlog, To Do, In Progress, Done) </li>
                        <li>Track how each task move across these columns to visualize the progress of your project</li>
                    </ul>
                </Container>
            </ResponsiveContainer>
        )
    }
}

export default withRouter(MentalMaintenancepage);