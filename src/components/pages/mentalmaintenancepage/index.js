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

                <Container text style={{ marginTop: "4em" }}>
                    <Header as="h1">Time Management Skills & Techniques</Header><br></br>
                    <Header as="h2" dividing>Time Management Skills</Header>
                    <Header as="h3">Reward yourself: </Header>
                    <ul>
                        <li>When: Reward yourself after completing a task</li>
                        <li>Why: Downtime is important to eliminate excessive stress</li>
                        <li>Good rewards: healthy activities that involve exercising the mind and body. Ex Meditate, cook a meal, play a sport, go to a spa </li>
                        <li>Bad rewards: unhealthy activities that may result in tiredness. Ex Play video games, drink with friends</li>
                    </ul>

                    <Header as="h3">Some effective time management skills are: </Header>
                    <div>
                    <Header as='h4' attached='top'>The Cornell Notetaking Method</Header>
                        <Segment attached='bottom'>
                            <ul>
                                <li>Having clear objectives, defined tasks, and resources to make a clear plan to achieve your goal</li>
                                <li>Keep a to-do list that visualizes all the tasks you need to complete for the day</li>
                                <li>Apps, like Todoist and Things, help users manage tasks and workflow</li>
                            </ul>
                        </Segment>
                    </div>

                    <div>
                        <Segment attached='top' style={{ marginTop: "2em" }}><h4>Prioritize tasks </h4></Segment>
                        <Segment attached='bottom'>
                            <ul>
                                <li>Figure out which tasks are high value which can contribute the most positive value to the team</li>
                                <li>Focus on the most important tasks instead of focusing on tasks that are not urgent</li>
                            </ul>
                        </Segment>
                    </div>

                    <div>
                        <Segment attached='top' style={{ marginTop: "2em" }}><h4>Manage distraction</h4></Segment>
                        <Segment attached='bottom'>
                        <ul>
                            <li>Studies show that it takes a person 23 minutes to refocus after an interruption</li>
                            <li>Identify the sources of distractions, such as, emails, phone calls, meetings, and Slack</li>
                            <ul>
                                <li>Apps, like Timely, can automatically record time you spent on each distraction, helping increase your awareness of things that often distract you</li>
                            </ul>
                        </ul>
                        </Segment>
                    </div>

                    <div>
                        <Segment attached='top' style={{ marginTop: "2em" }}><h4>Block off time on your calendar </h4></Segment>
                        <Segment attached='bottom'>
                        <h4>Block off time on your calendar </h4>
                        <ul>
                            <li>Sets a healthy pressure to complete it</li>
                            <li>Block off time for priority tasks, routine tasks, and breaks</li>
                        </ul>
                        </Segment>
                    </div>

                    </Container>

                    <Container text style={{ marginTop: "4em" }}>
                    <Header as='h2' dividing>Time Management Techniques</Header>
                    

                    <Grid stackable columns={2}>
                        <Grid.Row>
                            <div>
                                <Segment attached='top' style={{ marginTop: "2em" }}><h3>Kaban Technique</h3></Segment>
                                <Segment attached='bottom'>
                                <Grid.Column width={8}>
                                    <Image src={Kaban} alt="A sample Kanban board with some number of tasks present in each of the 'backlog', 'to-do;, 'doing', and 'done' areas."/>
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                    
                                    <ul>
                                    <li>Create four columns (Backlog, To Do, In Progress, Done) </li>
                                    <li>Track how each task move across these columns to visualize the progress of your project</li>
                                    </ul>
                                    </Grid.Column>
                                </Segment>
                            </div>    
                        </Grid.Row>
                        <Grid.Row>
                            <div>
                                <Segment attached='top' style={{ marginTop: "2em" }}><h3>Time Blocking</h3></Segment>
                                <Segment attached='bottom'>
                                <Grid.Column width={8}>
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
                                <Image src={TimeBlock} alt="A screenshot of a week of a Google calendar with time blocked off for different tasks on each day"/>
                                </Grid.Column>
                                </Segment>
                            </div>    
                        </Grid.Row>

                        <Grid.Row>
                            <div>
                                <Segment attached='top' style={{ marginTop: "2em" }}><h3>The Seinfeld Method </h3></Segment>
                                <Segment attached='bottom'>
                                <Grid.Column width={8}>
                                    <Image src={Seinfeld} alt="A month of a calendar with some days marked red, illustrating how to use the Seinfeld method. For each week in the month, the number of days that have been marked red is indicated to the side of the week."/>
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                    
                                    <ul>
                                        <li>Each day if you work on a skill, you mark the day red. If you don’t make it red, then you break the chain. The goal is to not break the chain.</li>
                                    </ul>
                                </Grid.Column>
                                </Segment>
                            </div>    
                        </Grid.Row>

                    </Grid>
                </Container>

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