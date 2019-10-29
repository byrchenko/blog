import React from "react";
import PropTypes from "prop-types";
import css from "./Info.scss";

const Info = props => {
    const { item } = props;
    
    if (!item) {
        return null;
    }

	return (
		<div className={css.text}>
			<div className={css.wrapper}>
				<h3 className={css.category}>{item.category}</h3>

				<h2 className={css.title}>{item.title}</h2>

				<div className={css.info}>
					{"by "}

					<span className={css.author}>{item.author}</span>

					{" • "}

					<span className={css.date}>{item.date}</span>
				</div>
			</div>
		</div>
	);
};

Info.propTypes = {
	item: PropTypes.object,
};

Info.defaultProps = {
	item: null,
};

export default Info;
