import React from "react";
import PropTypes from "prop-types";
import css from "./Socials.scss";
import icons from "../../_configs/socials";

class Socials extends React.Component {
	/**
	 *
	 * @param {*} item
	 */
	renderItem(item) {
		return (
			<li className={css.item} key={item.name}>
				<a href={item.link}>{icons[item.name]}</a>
			</li>
		);
	}

	/**
	 *
	 */
	renderList() {
		const { list } = this.props;

		return list.map(this.renderItem, this);
	}

	render() {
		return <ul className={css.index}>{this.renderList()}</ul>;
	}
}

Socials.propTypes = {
	list: PropTypes.array.isRequired,
};

export default Socials;
