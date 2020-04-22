import React from "react";
import PropTypes from "prop-types";
import css from "./Bar.scss";

const Bar = props => {

    return (
        <div className={css.index}>
            {"Bar"}
        </div>
    );
};

Bar.propTypes = {};

Bar.defaultProps = {};

export default Bar;