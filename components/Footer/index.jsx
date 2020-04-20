import React from "react";
import PropTypes from "prop-types";
import css from "./index.scss";
import icons from "../../_configs/socials";
import * as labels from "../../constants/socials";

/**
 * Footer component
 *
 * @returns {*}
 * @constructor
 */
const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className={css.index}>
            <div className={css.container}>
                <ul className={css.socials}>
                    <li className={css.item}>
                        {icons[labels.TWITTER_LABEL]}
                    </li>

                    <li className={css.item}>
                        {icons[labels.FACEBOOK_LABEL]}
                    </li>

                    <li className={css.item}>
                        {icons[labels.PINTEREST_LABEL]}
                    </li>

                    <li className={css.item}>
                        {icons[labels.INSTAGRAM_LABEL]}
                    </li>
                </ul>

                <div className={css.copyright}>
                    {`© ${year} All rights reserved.`}
                </div>
            </div>
        </div>
    );
};

export default Footer;