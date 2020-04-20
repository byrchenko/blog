import React from "react";
import App from "next/app";
import Default from "../layouts/Default";

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<Default>
				<Component {...pageProps} />
			</Default>
		);
	}
}

export default MyApp;
