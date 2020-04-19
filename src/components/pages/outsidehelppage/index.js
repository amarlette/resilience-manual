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
    Card
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


export class OutsideHelppage extends React.Component {

    render() {
        return (
            <ResponsiveContainer>
                <Container text style={{ marginTop: "4em" }}>
                <Header as='h1'>Gerogia Tech Resources</Header>
                    <Grid stackable columns={2}>
                        <Grid.Column>
                        <div>
                            <Header as='h2' attached='top'>Stamps Health Services</Header>
                                <Segment attached='bottom'>
                                <p>
                                    <strong>Phone Contact:</strong> 404-894-2585<br></br> 
                                    <strong>Website:</strong> www.health.gatech.edu<br></br>
                                    <strong>Business Hours:</strong> 8am-5pm (MTWF), 9am-5pm (R), closed Sat., Sun., holidays<br></br>
                                    <strong>Summer Hours:</strong> 8am-4:30pm (MTWRF), closed Sat., Sun., holidays <br></br>
                                    <strong>Location:</strong> 2nd floor of Stamps Health Building <br></br>
                                    <strong>Services:</strong> Provides general psychiatric services to eligible students, spouses, and domestic partners. Two hours of services per semester are covered by the student health fee. <br></br>
                                </p>
                                </Segment>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                        <div>
                            <Header as='h2' attached='top'>GT Health Initiatives </Header>
                                <Segment attached='bottom'>
                                <p>
                                    <strong>Phone Contact:</strong> 404-894-9980<br></br> 
                                    <strong>Website:</strong> www.healthy@gatech.edu<br></br>
                                    <strong>Email:</strong><a href="http://healthinitiatives.gatech.edu/well-being/mental">http://healthinitiatives.gatech.edu/well-being/mental</a><br></br>
                                    <strong>Services:</strong>Their website has useful resources on self-care, stress management, etc. Additionally, they offer 4 main programs: Pet Therapy to help with stress relief, Adulting to learn life skills, Fit to Thrive to teach how to incorporate dimensions of well-being into our daily lives, and Mindfulness to help become more aware of ourselves and avoid being overwhelmed.<br></br>
                                </p>
                                </Segment>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                        <div>
                            <Header as='h2' attached='top'>Campus Recreation Center</Header>
                                <Segment attached='bottom'>
                                <p>
                                    <strong>Phone Contact:</strong> 404-385-7529<br></br>
                                    <strong>Website:</strong><a href="https://www.crc.gatech.edu">https://www.crc.gatech.edu</a><br></br>
                                    <strong>Business Hours:</strong>5:30am-12am (MTWR), 5:30am-10pm (F), 9am-10pm (Sat.), 12pm-12am (Sun.)<br></br>
                                    <strong>Summer Hours:</strong> 8am-4:30pm (MTWRF), closed Sat., Sun., holidays <br></br>
                                    <strong>Location:</strong> West Campus past Instructional Center and next to Stamps Health Services Building<br></br>
                                    <strong>Services:</strong> Offers basketball courts, a full gym with a climbing wall and racquetball courts, group fitness classes, massage therapy, dance classes, yoga classes, sports clubs, intramural sports, etc.<br></br>
                                </p>
                                </Segment>
                            </div>
                            </Grid.Column>
                            <Grid.Column>
                            <div>
                            <Header as='h2' attached='top'> GT Tutoring</Header>
                                <Segment attached='bottom'>
                                <p>
                                    <strong>Phone Contact:</strong> 404-385-7529<br></br>
                                    <strong>Website:</strong><a href="http://success.gatech.edu/tutoring-0"> http://success.gatech.edu/tutoring-0</a><br></br>
                                    <strong>Drop-in Tutoring:</strong><a href="http://www.success.gatech.edu/drop-tutoring-help-desks"> http://www.success.gatech.edu/drop-tutoring-help-desks</a><br></br>
                                    <strong>Services:</strong> Offers basketball courts, a full gym with a climbing wall and racquetball courts, group fitness classes, massage therapy, dance classes, yoga classes, sports clubs, intramural sports, etc.<br></br>
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

export default withRouter(OutsideHelppage);