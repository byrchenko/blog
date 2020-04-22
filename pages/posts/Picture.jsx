import React from "react";
import PropTypes from "prop-types";
import css from "./Picture.scss";

/**
 * Post picture component
 *
 * @param image
 * @param title
 * @returns {*}
 * @constructor
 */
const Picture = ({image, title}) => {

    return (
        <div className={css.index}>
            <img
                src={image}
                alt={title}
            />
        </div>
    );
};

/**
 *
 */
Picture.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string
};

export default Picture;