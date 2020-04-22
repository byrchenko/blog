import React from "react";
import PropTypes from "prop-types";
import css from "./Title.scss";

/**
 * Post title section
 *
 * @param categoryTitle
 * @param categoryLink
 * @param postTitle
 * @param author
 * @param authorLink
 * @param date
 * @param commentsAmount
 * @returns {*}
 * @constructor
 */
const Title = (
    {
        categoryTitle,
        categoryLink,
        postTitle,
        author,
        authorLink,
        date,
        commentsAmount
    }
) => {
    const comments = commentsAmount + " " + (commentsAmount === 1 ? "comment" : "comments");

    return (
        <>
            <h3 className={css.category}>
                <a href={categoryLink}>
                    {categoryTitle}
                </a>
            </h3>

            <h2 className={css.title}>
                {postTitle}
            </h2>

            <div className={css.info}>
                <i>by</i> <a href={authorLink}>{author}</a> • {date} • {comments}
            </div>
        </>
    );
};

Title.propTypes = {
    categoryTitle: PropTypes.string,
    categoryLink: PropTypes.string,
    postTitle: PropTypes.string,
    author: PropTypes.string,
    authorLink: PropTypes.string,
    date: PropTypes.number,
    commentsAmount: PropTypes.number
};

export default Title;