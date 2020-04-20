import React from "react";
import PropTypes from "prop-types";
import css from "./Logo.scss";

/**
 *
 * @param title
 * @returns {*}
 * @constructor
 */
const Logo = ({title}) => {
    return (
        <div className={css.index}>
            {title}
        </div>
    );
};

Logo.propTypes = {
    title: PropTypes.string
};

export default Logo;
