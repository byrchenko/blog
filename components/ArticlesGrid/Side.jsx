import React from "react";
import PropTypes from "prop-types";
import css from "./Side.scss";
import Article from "./Article";

/**
 *
 * @param items
 * @returns {*}
 */
function renderItems(items) {
    return items.map(item => {
        return (
            <Article
                key={item.id}
                category={item.category}
                title={item.title}
                author={item.author}
                date={item.date}
                image={item.image}
                nodeClass={css.item}
            />
        )
    });
}

/**
 *
 * @param align
 * @param items
 * @returns {*}
 * @constructor
 */
const Side = ({align, items}) => {
    if (!items) {
        return null;
    }

    /**
     *
     */
    return (
        <div className={css[align]}>
            {renderItems(items)}
        </div>
    );
};

/**
 *
 */
Side.propTypes = {
    align: PropTypes.string,
    items: PropTypes.array
};

/**
 *
 */
Side.defaultProps = {
    align: "left"
};

export default Side;