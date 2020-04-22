import React from "react";
import PropTypes from "prop-types";
import css from "./Content.scss";

/**
 * Post content component
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Content = ({children}) => {
    return (
        <div className={css.index}>
            {children}
        </div>
    );
};

export default Content;