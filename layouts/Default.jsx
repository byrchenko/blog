import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import css from "./Default.scss";

const Default = props => {
	const { children } = props;

	if (!children) {
		return null;
	}

	return (
		<React.Fragment>
			<Head>
				<script
					src='https://kit.fontawesome.com/38f65ed767.js'
					crossOrigin='anonymous'
				/>
			</Head>

			<React.Fragment>{children}</React.Fragment>
		</React.Fragment>
	);
};

Default.propTypes = {
	children: PropTypes.any,
};

Default.defaultProps = {
	children: null,
};

export default Default;
