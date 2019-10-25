import React from "react";
import PropTypes from "prop-types";
import css from "./Logo.scss";

const Logo = props => {
	return <div className={css.index}>{"Santa"}</div>;
};

Logo.propTypes = {};

Logo.defaultProps = {};

export default Logo;
