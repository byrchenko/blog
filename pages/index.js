import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import MainSlider from "../components/MainSlider";

const Home = () => (
	<div>
		<Head>
			<title>Home</title>
			<link rel='icon' href='/favicon.ico' />
		</Head>

		<Header />

		<Navigation />

    <MainSlider />
	</div>
);

export default Home;
