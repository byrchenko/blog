import React from "react";
import css from "./index.scss";
import Socials from "./Socials";
import list from "../../_api/socials";
import Subscribe from "./Subscribe";

const TopBar = props => {
	return (
		<div className={css.index}>
			<div className={css.container}>
				<div className={css.left}>
					<Subscribe />
				</div>

				<div className={css.right}>
					<Socials list={list} />
				</div>
			</div>
		</div>
	);
};

export default TopBar;
