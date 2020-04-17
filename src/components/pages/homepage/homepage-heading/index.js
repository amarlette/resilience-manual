import PropTypes from "prop-types";
import React from "react";

import "../../../../../node_modules/semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Header
} from "semantic-ui-react";

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 * @author Alexandra Marlette
 */
const HomepageHeading = (props, { mobile }) => (
<Container text>
    <Header
    as="h1"
    content="Georgia Tech Mental Health Manual"
    inverted
    style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em"
    }}
    />
    <Header
    as="h2"
    content="Built by Georgia Tech Students for Georgia Tech Students"
    inverted
    style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
    }}
    />
    <Button.Group size='large'>
    <Button color="yellow">Mental Maintenance</Button>
    <Button.Or />
    <Button color="blue">Get Outside Help</Button>
</Button.Group>
</Container>
);
  
HomepageHeading.propTypes = {
mobile: PropTypes.bool
};

export default HomepageHeading;