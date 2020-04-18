import PropTypes from "prop-types";
import React from "react";

import "../../../../../node_modules/semantic-ui-css/semantic.min.css";

import * as HEADER_STRINGS from '../../../pages/config/headerstrings';

import {
  Button,
  Container,
  Header
} from "semantic-ui-react";


/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 * @author Alexandra Marlette
 */


let primaryHeader = "";
let secondaryHeader = "";

function populateHeaders(page) {
    switch(page) {
  
      case "home":
        console.log('here');
        primaryHeader = HEADER_STRINGS.HOMEPAGE_PRIMARY_HEADER
        secondaryHeader = HEADER_STRINGS.HOMEPAGE_SECONDARY_HEADER

      case "aboutus":
        primaryHeader = HEADER_STRINGS.ABOUTUSPAGE_PRIMARY_HEADER
        secondaryHeader = HEADER_STRINGS.ABOUTUSPAGE_SECONDARY_HEADER
  
      case "mentalmaintenance":
        primaryHeader = HEADER_STRINGS.MENTALMAINTENANCE_PRIMARY_HEADER
        secondaryHeader = HEADER_STRINGS.MENTALMAINTENANCE_SECONDARY_HEADER
      
      case "studyskills":
        primaryHeader = HEADER_STRINGS.STUDYSKILLS_PRIMARY_HEADER
        secondaryHeader = HEADER_STRINGS.STUDYSKILLS_SECONDARY_HEADER
        
      case "timemanagement":
        primaryHeader = HEADER_STRINGS.TIMEMANAGEMENT_PRIMARY_HEADER
        secondaryHeader = HEADER_STRINGS.TIMEMANAGEMENT_SECONDARY_HEADER

      case "meditation":
      primaryHeader = HEADER_STRINGS.MEDITATION_PRIMARY_HEADER
      secondaryHeader = HEADER_STRINGS.MEDITATION_SECONDARY_HEADER

      case "outsidehelp":
      primaryHeader = HEADER_STRINGS.OUTSIDEHELP_PRIMARY_HEADER
      secondaryHeader = HEADER_STRINGS.OUTSIDEHELP_SECONDARY_HEADER

      case "accommodations":
        primaryHeader = HEADER_STRINGS.ACCOMMODATIONS_PRIMARY_HEADER
        secondaryHeader = HEADER_STRINGS.ACCOMMODATIONS_SECONDARY_HEADER
    
      case "emergencyresources":
        primaryHeader = HEADER_STRINGS.EMERGENCYRESOURCES_PRIMARY_HEADER
        secondaryHeader = HEADER_STRINGS.EMERGENCYRESOURCES_SECONDARY_HEADER
  
      default:
        primaryHeader = "Primary Header"
        secondaryHeader = "Secondary Header"
    }
}

function getPrimaryHeader(page) {
    switch(page) {
        case "home":
          return HEADER_STRINGS.HOMEPAGE_PRIMARY_HEADER
    
        case "aboutus":
         return HEADER_STRINGS.ABOUTUSPAGE_PRIMARY_HEADER
    
        case "mentalmaintenance":
         return HEADER_STRINGS.MENTALMAINTENANCE_PRIMARY_HEADER

        case "studyskills":
          return HEADER_STRINGS.STUDYSKILLS_PRIMARY_HEADER

        case "timemanagement":
          return HEADER_STRINGS.TIMEMANAGEMENT_PRIMARY_HEADER

        case "meditation":
          return HEADER_STRINGS.MEDITATION_PRIMARY_HEADER

        case "outsidehelp":
          return HEADER_STRINGS.OUTSIDEHELP_PRIMARY_HEADER

        case "accommodations":
          return HEADER_STRINGS.ACCOMMODATIONS_PRIMARY_HEADER

        case "emergencyresources":
          return HEADER_STRINGS.EMERGENCYRESOURCES_PRIMARY_HEADER
    
        default:
          return "Primary Header"
    }
}

function getSecondaryHeader(page) {
    switch(page) {
        case "home":
          return HEADER_STRINGS.HOMEPAGE_SECONDARY_HEADER
    
        case "aboutus":
          return HEADER_STRINGS.ABOUTUSPAGE_SECONDARY_HEADER
    
        case "mentalmaintenance":
          return HEADER_STRINGS.MENTALMAINTENANCE_SECONDARY_HEADER

        case "studyskills":
          return HEADER_STRINGS.STUDYSKILLS_SECONDARY_HEADER

        case "timemanagement":
          return HEADER_STRINGS.TIMEMANAGEMENT_SECONDARY_HEADER

        case "meditation":
          return HEADER_STRINGS.MEDITATION_SECONDARY_HEADER

        case "outsidehelp":
          return HEADER_STRINGS.OUTSIDEHELP_SECONDARY_HEADER

        case "accommodations":
          return HEADER_STRINGS.ACCOMMODATIONS_SECONDARY_HEADER

        case "emergencyresources":
          return HEADER_STRINGS.EMERGENCYRESOURCES_SECONDARY_HEADER
    
        default:
          return "Secondary Header"
      }
}


const HomepageHeading = (props, { mobile }) => (
<Container text>
    <Header
    as="h1"
    content={getPrimaryHeader(props.page)}
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
    content={getSecondaryHeader(props.page)}
    inverted
    style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
    }}
    />
    {/* <Button.Group size='large'>
    <Button color="yellow">Mental Maintenance</Button>
    <Button.Or />
    <Button color="blue">Get Outside Help</Button>
</Button.Group> */}
</Container>
);
  
HomepageHeading.propTypes = {
mobile: PropTypes.bool
};

export default HomepageHeading;