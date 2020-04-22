import React from "react";
import PropTypes from "prop-types";
import css from "./Wrapper.scss";

/**
 * Post wrapper component
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Wrapper = ({children}) => {
    return (
        <section className={css.index}>
            {children}
        </section>
    );
};
export default Wrapper;