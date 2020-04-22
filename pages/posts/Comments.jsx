import React from "react";
import PropTypes from "prop-types";
import css from "./Comments.scss";

const Comments = props => {

    return (
        <div className={css.index}>
            {"Comments"}
        </div>
    );
};

Comments.propTypes = {};

Comments.defaultProps = {};

export default Comments;