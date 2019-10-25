import React from "react";
import PropTypes from "prop-types";
import css from "./Subscribe.scss";

const Subscribe = props => {
	return (
		<button className={css.subscribe}>
			<i className='far fa-envelope'></i>

			<span className={css.text}>{"Subscribe"}</span>
		</button>
	);
};

Subscribe.propTypes = {};

Subscribe.defaultProps = {};

export default Subscribe;
