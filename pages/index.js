import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import TopBar from "../components/TopBar";
import ArticlesGrid from "../components/ArticlesGrid";
import Footer from "../components/Footer";

const Home = () => (
    <div>
        <Head>
            <title>Home</title>
            <link rel='icon' href='/favicon.ico'/>
        </Head>

        <TopBar />

        <Header />

        <ArticlesGrid />

        <Footer />
    </div>
);

export default Home;
