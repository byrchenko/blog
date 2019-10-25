import React from "react";
import PropTypes from "prop-types";
import css from "./index.scss";
import TopBar from "../TopBar";
import Logo from "./Logo";

class Header extends React.Component {
	render() {
		return (
			<div className={css.index}>
				<TopBar />

				<div className={css.container}>
					<Logo />
				</div>
			</div>
		);
	}
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
