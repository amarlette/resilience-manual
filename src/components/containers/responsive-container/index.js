import PropTypes from "prop-types";
import React from "react";

import "../../../../node_modules/semantic-ui-css/semantic.min.css";

import DesktopContainer from '../desktop-container';
import MobileContainer from '../mobile-container';



const ResponsiveContainer = (props, { children }) => (
    <div>
        <DesktopContainer page={props.page}>{children}</DesktopContainer>
        <MobileContainer page={props.page}>{children}</MobileContainer>
    </div>
);

ResponsiveContainer.propTypes = {
    children: PropTypes.node
};

export default ResponsiveContainer;