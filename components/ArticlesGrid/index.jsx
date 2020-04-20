import React from "react";
import PropTypes from "prop-types"
import css from "./index.scss";
import Side from "./Side";
import articles from "./articles.js";

/**
 *
 */
class ArticlesGrid extends React.Component {

    /**
     * Distribute items between grids
     */
    distributeItems() {
        const {items} = this.props;

        if (!items) {
            return {
                top: null,
                center: null,
                bottom: null
            }
        }

        return {
            top: items.length ? items.splice(-3) : null,
            center: items.length ? items.splice(-3) : null,
            bottom: items.length ? items.splice(-3) : null,
        }
    }

    /**
     *
     * @returns {*}
     */
    render() {
        const items = this.distributeItems();

        return (
            <div className={css.index}>
                <Side
                    items={items.top}
                    align={"left"}
                />

                <Side
                    items={items.center}
                    align={"center"}
                />

                <Side
                    items={items.bottom}
                    align={"right"}
                />
            </div>
        )
    }
}

ArticlesGrid.propTypes = {
    items: PropTypes.array
}


ArticlesGrid.defaultProps = {
    items: articles
}

export default ArticlesGrid;