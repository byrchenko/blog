import React from "react";
import PropTypes from "prop-types";
import css from "./index.scss";
import Logo from "./Logo";
import Navigation from "../Navigation";

/**
 *
 */
class Header extends React.Component {

    /**
     *
     */
    render() {
        return (
            <section className={css.index}>
                <div className={css.container}>
                    <Logo title={"SW iNG"} />

                    <Navigation />

                    <div className={css.button}>
                        <button className={css.burger}>
                            <i className="fas fa-bars" />
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;
