import React from "react";
import Swiper from "react-id-swiper";
import PropTypes from "prop-types";
import css from "./index.scss";
import list from "../../_api/mainSlider";
import Item from "./Item";

/**
 * Swiper params
 */
const params = {
	initialSlide: 1,
	centeredSlides: true,
	slidesPerView: "auto",
	spaceBetween: 35,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	loop: true,
};

/**
 * Main slider component
 */
class MainSlider extends React.Component {
	/**
	 *
	 * @param {*} item
	 */
	renderItem(item) {
		return <Item item={item} key={item.id} className={css.slide} />;
	}

	/**
	 *
	 */
	renderList() {
		if (!list || !list.length) {
			return null;
		}

		return list.map(this.renderItem, this);
	}

	render() {
		return (
			<div className={css.index}>
				<Swiper {...params}>{this.renderList()}</Swiper>
			</div>
		);
	}
}

MainSlider.propTypes = {};

MainSlider.defaultProps = {};

export default MainSlider;
