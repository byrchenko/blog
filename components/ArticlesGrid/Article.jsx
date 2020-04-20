import React from "react";
import PropTypes from "prop-types";
import css from "./Article.scss";

/**
 *
 * @param title
 * @param category
 * @param author
 * @param date
 * @param image
 * @param nodeClass
 * @returns {*}
 * @constructor
 */
const Article = ({title, category, author, date, image, nodeClass}) => {
    const node = React.createRef();

    /**
     *
     */
    function isAppear() {
        const bounding = node.current.getBoundingClientRect();

        if (
            bounding.top <= window.innerHeight - 70 &&
            bounding.left <= window.innerWidth
        ) {
            setIsAppeared(true);

            window.removeEventListener("scroll", isAppear);

            return true;
        }

        return false;
    }

    const [isAppeared, setIsAppeared] = React.useState(false);

    React.useEffect(() => {
        if (!isAppear()) {
            window.addEventListener("scroll", isAppear);

            return () => window.removeEventListener("scroll", isAppear)
        }
    }, [])

    return (
        <div
            ref={node}
            className={`${nodeClass} ${css.index} ${isAppeared ? css.appeared : ""}`}
        >
            <div className={css.category}>
                {category}
            </div>

            <div className={css.title}>
                {title}
            </div>

            <div className={css.info}>
                {`by ${author}   •   ${date}`}
            </div>

            <div className={css.image}>
                <img
                    src={image}
                    alt={title}
                />
            </div>
        </div>
    );
};

Article.propTypes = {};

Article.defaultProps = {};

export default Article;