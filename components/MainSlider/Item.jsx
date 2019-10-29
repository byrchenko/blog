import React from "react";
import PropTypes from "prop-types";
import css from "./Item.scss";
import Info from "./Info";

const Item = props => {
	const { item, className } = props;

	if (!item) {
		return null;
	}

	return (
		<div className={className}>
			<img className={css.image} src={item.image} alt={item.title} />

			<Info item={item} />
		</div>
	);
};

Item.propTypes = {
	item: PropTypes.object,
};

Item.defaultProps = {
	item: null,
};

export default Item;
