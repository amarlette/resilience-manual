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


export class AboutUspage extends React.Component {

    render() {
        return (
            <ResponsiveContainer>
                <h2>About us page!</h2>
            </ResponsiveContainer>
        )
    }
}

export default withRouter(AboutUspage);