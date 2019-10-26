import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const Home = () => (
	<div>
		<Head>
			<title>Home</title>
			<link rel='icon' href='/favicon.ico' />
		</Head>

		<Header />

		<Navigation />
	</div>
);

export default Home;
