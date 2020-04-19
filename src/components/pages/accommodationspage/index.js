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

export class AccommodationsPage extends React.Component {


    render() {
        return (
            <ResponsiveContainer>
                <Container text style={{ marginTop: "4em" }}>
                    <Header as='h1'>Accommodations: Disability & Mental Health</Header>
                    <Header as='h2'>What is considered a disability? </Header>
                    <p>A <strong>disability</strong> is any physical or mental impairment that substantially limits one’s capability to perform daily activities when compared to the general population. </p>

                    <Header as='h2'>What predispositions could students have?</Header>

                    <div>
                        <Segment color='yellow'><strong>Learning Disabilities: </strong> A general term that refers to a heterogeneous group of disorders manifested by significant difficulties in the acquisition and use of listening, speaking, reading, writing, reasoning, or mathematical skills. These disorders are intrinsic to the individual, presumed to be due to central nervous system dysfunction, and may occur during different points of one’s life span.<br></br></Segment>
                        <Segment color='blue'><strong>Attention-Deficit/Hyperactivity Disorders (AD/HD): </strong> A persistent pattern of inattention and/or hyperactivity-impulsivity that is more frequently displayed and more severe than what is typically observed in individuals at a comparable level of development.</Segment>
                        <Segment color='yellow'><strong>Autism Spectrum Disorders:</strong> Disorders characterized by impairment in several areas of development including social communication and social interaction across contexts, as well as the presence of restricted, repetitive patterns of behavior, interests or activities.<br></br></Segment>
                        <Segment color='blue'><strong>Acquired Brain Injuries (ABI):</strong>  Brain injury can result from external trauma, such as a closed head or an object penetration injury, or internal trauma, such as a cerebral vascular accident or tumor. Additionally, individuals may acquire brain impairment as a result of neurological illnesses, such as epilepsy or multiple sclerosis. Not in the same format as the others, maybe modify first sentence: Disorders characterized by external trauma, such as a closed head or an object...<br></br></Segment>
                        <Segment color='yellow'><strong>Sensory Disorders:</strong> 
                        <ul>
                            <li><strong>Deaf/ Hard of Hearing:</strong> Disordes characterized by a reduction in sensitivity to sound. Sound amplification may not assist the individual in interpreting auditory stimuli. </li>
                            <li><strong>Blind and Loss of Vision:</strong> disorders in the function of the eyes that have not been adequately corrected by medical or surgical intervention, therapy, or conventional eyewear. Individuals with visual disorders may not have any usable vision, or their vision may be significantly limited. </li>
                        </ul><br></br>
                        </Segment>
                        <Segment color='blue'><strong>Mobility Disorders:</strong> Conditions that limit a person’s coordination or ability to move. Some mobility impairments are congenital (present from birth) while others are the result of illness or physical injury. <br></br></Segment>
                        <Segment color='yellow'><strong>Systemic Disorders: </strong> 
                        Conditions affecting one or more of the body’s systems, which can include the respiratory, immunological neurological, circulatory, or digestive systems. <br></br>
                        </Segment>
                        <Segment color='blue'><strong>Communications Disorders: </strong> 
                        A general term that refers to a heterogeneous group of disorders manifested by significant difficulties in language, speech, and/or communication. This includes difficulties in receptive and expressive language (i.e. production of sounds, articulation and fluency deficits), difficulty in the acquisition and production of language across modalities (i.e., spoken, written), and difficulties in the social use of verbal and nonverbal communication.<br></br>
                        </Segment>
                    </div>

                    <Header as='h2'>What are accommodations?</Header>
                    <p>
                    Accommodations are tools that grant students with disabilities access to educational opportunities. They are not intended to alter or lower the standards or expectations of a course of exam; rather, accommodations are designed to assist students with disabilities in learning the same material and meeting the same expectations as their classmates
                    </p>
                    <Header as='h2'>What are resources specific to them?</Header>
                    <p>At Georgia Tech, you can access the Office of Disabilities Services, which can help you receive accommodations on campus to help. They offer testing services and accommodations.</p>
                    <Header as='h2'>Examples of Accommodations: </Header>
                    <ul>
                    <li>Accessible furniture and seating in classrooms</li>
                    <li>Accessible instructional and course material, including alternative format texts</li>
                    <li>Assistive technology</li>
                    <li>Audio recording lecture</li>
                    <li>Classroom relocations</li>
                    <li>Disability-related absences</li>
                    <li>Housing</li>
                    <li>Interpreting and real-time captioning</li>
                    <li><a href="https://disabilityservices.gatech.edu/content/note-taking-resources">Note-taking software</a></li>
                    <li>Stingerette paratransit serviceTesting accommodations</li>
                    </ul>
                    <a href="https://disabilityservices.gatech.edu/getting-started">
                    <Button color='yellow'>
                        How to get accommodations?
                    </Button></a>
                    
                </Container>

                <Segment inverted vertical style={{ marginTop: "4em", padding: "3em" }}>
                    <Container>
                    </Container>
                </Segment>
            </ResponsiveContainer>
        )
    }
}

export default withRouter(AccommodationsPage);

