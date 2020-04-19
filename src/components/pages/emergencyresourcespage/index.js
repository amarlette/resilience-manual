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

export class EmergencyResourcesPage extends React.Component {


    render() {
        return (
            <ResponsiveContainer>
                <Container text style={{ marginTop: "4em" }}>
                <Header as='h1'>Gerogia Tech Resources</Header>
                    <Grid stackable columns={2}>
                        <Grid.Column>
                        <div>
                            <Header as='h2' attached='top'>Georgia Tech Police Department</Header>
                                <Segment attached='bottom'>
                                <p>
                                    <strong>Hotline:</strong> 404-894-2500 <br></br> 
                                    <strong>Website:</strong><a href="www.police.gatech.edu">www.police.gatech.edu</a><br></br>
                                    24/7-hour emergency service located on GT campus. Main goals include mitigation, preparedness, response, and recovery for emergency situations that happen on GT campus locations. Is present on Reddit, Facebook, Twitter as well. 
                                    <br></br>
                                </p>
                                </Segment>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                        <div>
                            <Header as='h2' attached='top'>Stamps Psychiatry Services </Header>
                                <Segment attached='bottom'>
                                <p>
                                    <strong>Phone Contact:</strong> 404-894-2585<br></br> 
                                    <strong>Website:</strong><a href="www.health.gatech.edu"> www.health.gatech.edu</a><br></br>
                                    <strong>Business Hours:</strong>8am-5pm (MTWF), 9am-5pm (R), closed Sat., Sun., holidays Summer business hours: 8am-4:30pm (MTWRF), closed Sat., Sun., holidays <br></br>
                                    Located 2nd floor of Stamps Health Services Building <br></br>
                                    Provides general psychiatric services to eligible students, spouses, and domestic partners. Two hours of services per semester are covered by the student health fee. <br></br>
                                </p>
                                </Segment>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                        <div>
                            <Header as='h2' attached='top'>GT Center for Assessment, Referral, and Education (CARE) </Header>
                                <Segment attached='bottom'>
                                <p>
                                    <strong>Phone Contact:</strong> 404-894-3498<br></br> 
                                    <strong>Website:</strong><a href="https://care.gatech.edu"> https://care.gatech.edu</a><br></br>
                                    <strong>Business Hours:</strong>8am-4pm (MWRF), 9am-5pm (T)<br></br>
                                    Located 1st floor of Smithgall Student Services (Flag) Building <br></br>
                                    Primary resource for a primary assessment and referral for students. Also serves as a primary resource for mental health at GT.  <br></br>
                                </p>
                                </Segment>
                            </div>
                            </Grid.Column>
                            <Grid.Column>
                            <div>
                            <Header as='h2' attached='top'>GT Health Initiatives – Mental Health & Well-Being</Header>
                                <Segment attached='bottom'>
                                <p>
                                    <strong>Phone Contact:</strong> 404-894-9980<br></br> 
                                    <strong>Website:</strong><a href="http://healthinitiatives.gatech.edu/well-being/mental"> http://healthinitiatives.gatech.edu/well-being/mental</a><br></br>
                                    Website with useful resources on self-care, stress management, etc. <br></br>
                                </p>
                                </Segment>
                            </div>
                        </Grid.Column>
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

export default withRouter(EmergencyResourcesPage);

