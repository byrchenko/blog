import React from "react";
import PropTypes from "prop-types";
import css from "./List.scss";
import Item from "./Item";

class List extends React.Component {
	/**
	 *
	 * @param {*} item
	 */
	renderItem(item) {
		return <Item item={item} />;
	}

	/**
	 *
	 */
	renderList() {
		const { list } = this.props;

		return list.map(this.renderItem, this);
	}

	/**
	 *
	 */
	render() {
		const { list } = this.props;

		if (!list.length) {
			return null;
		}

		return <ul className={css.index}>{this.renderList()}</ul>;
	}
}

List.propTypes = {
	list: PropTypes.array.isRequired,
};

export default List;
