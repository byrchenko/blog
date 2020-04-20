import React from "react";
import PropTypes from "prop-types";
import css from "./index.scss";
import List from "./List";
import list from "../../_api/navigation";

const Navigation = props => {
	return (
		<List list={list} />
	);
};

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
