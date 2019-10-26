import React from "react";
import PropTypes from "prop-types";
import css from "./Sublist.scss";

class Sublist extends React.Component {
	render() {
		const { list } = this.props;

		if (!list || !list.length) {
			return null;
		}

		return <div className={css.index}>{"Sublist"}</div>;
	}
}

Sublist.propTypes = {
	list: PropTypes.array.isRequired,
};

export default Sublist;
