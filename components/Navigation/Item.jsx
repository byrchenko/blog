import React from "react";
import PropTypes from "prop-types";
import css from "./Item.scss";
import Sublist from "./Sublist";

class Item extends React.Component {
	/**
	 *
	 * @param {*} item
	 */
	_hasChildren(item) {
		const keys = Object.keys(item);

		return keys.includes("children");
	}

	/**
	 *
	 */
	renderItem() {
		const { item } = this.props;

		if (this._hasChildren(item)) {
			return (
				<li className={css.index}>
					<span className={css.text}>
						{item.title}

						<i class='fas fa-chevron-down'></i>
					</span>

					<Sublist list={item.children} />
				</li>
			);
		}

		return (
			<li className={css.index}>
				<a className={css.link} href={item.link}>
					{item.title}
				</a>
			</li>
		);
	}

	render() {
		const { item } = this.props;

		if (!item) {
			return null;
		}

		return this.renderItem();
	}
}

Item.propTypes = {
	item: PropTypes.object.isRequired,
};

export default Item;
