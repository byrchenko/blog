import React from "react";
import PropTypes from "prop-types";
import css from "./Navigation.scss";

const Navigation = props => {

    return (
        <div className={css.index}>
            {"Navigation"}
        </div>
    );
};

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;