import React from "react";
import PropTypes from "prop-types";
import css from "./Author.scss";

const Author = props => {

    return (
        <div className={css.index}>
            {"Author"}
        </div>
    );
};

Author.propTypes = {};

Author.defaultProps = {};

export default Author;