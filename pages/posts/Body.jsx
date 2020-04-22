import React from "react";
import PropTypes from "prop-types";
import css from "./Body.scss";

/**
 * Post body
 *
 * @param content
 * @returns {*}
 * @constructor
 */
const Body = ({content}) => {
    return (
        <div className={css.index}>
            <p>
                Aenean a iaculis massa. Etiam urna dolor venenat vitae urna quis, imperdiet egestas nunc. Nunc sem eros,
                mattis non enim nec pharetra vestibulum mi. Nullam congue pulvinar mauris. Etiam vehicula suscipit
                velit, eu ullamcorper ipsum aliquam non. Nulla eu dictum nunc. Donec ut ipsum augue. Suspendisse
                vestibulum libero ligula. Vestibulum accumsan odio justo, utsagittis lectus congue condimentum. Nullam
                mollis arius, eu aliquet massa hendrerit. Pellentesque malesuada augue a lacus eleifend eleifend.
            </p>

            <h3>Suspendisse vel varius lectus.</h3>

            <p>
                Aenean a iaculis massa. Etiam urna dolor venenat vitae urna quis, imperdiet egestas nunc. Nunc sem eros,
                mattis non enim nec pharetra vestibulum mi. Nullam congue pulvinar mauris. Etiam vehicula suscipit
                velit, eu ullamcorper ipsum aliquam non. Nulla eu dictum nunc. Donec ut ipsum augue. Suspendisse
                vestibulum libero ligula. Vestibulum accumsan odio justo, utsagittis lectus congue condimentum. Nullam
                mollis arius, eu aliquet massa hendrerit. Pellentesque malesuada augue a lacus eleifend eleifend.
            </p>

            <p>
                Aenean a iaculis massa. Etiam urna dolor venenat vitae urna quis, imperdiet egestas nunc. Nunc sem eros,
                mattis non enim nec pharetra vestibulum mi. Nullam congue pulvinar mauris. Etiam vehicula suscipit
                velit, eu ullamcorper ipsum aliquam non. Nulla eu dictum nunc. Donec ut ipsum augue. Suspendisse
                vestibulum libero ligula. Vestibulum accumsan odio justo, utsagittis lectus congue condimentum. Nullam
                mollis arius, eu aliquet massa hendrerit. Pellentesque malesuada augue a lacus eleifend eleifend.
            </p>

            <p>
                Aenean a iaculis massa. Etiam urna dolor venenat vitae urna quis, imperdiet egestas nunc. Nunc sem eros,
                mattis non enim nec pharetra vestibulum mi. Nullam congue pulvinar mauris. Etiam vehicula suscipit
                velit, eu ullamcorper ipsum aliquam non. Nulla eu dictum nunc. Donec ut ipsum augue. Suspendisse
                vestibulum libero ligula. Vestibulum accumsan odio justo, utsagittis lectus congue condimentum. Nullam
                mollis arius, eu aliquet massa hendrerit. Pellentesque malesuada augue a lacus eleifend eleifend.
            </p>
        </div>
    );
};

Body.propTypes = {
    content: PropTypes.string
};

export default Body;