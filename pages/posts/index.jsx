import React from "react";
import PropTypes from "prop-types"
import Header from "../../components/Header";
import TopBar from "../../components/TopBar";
import Wrapper from "./Wrapper";
import Picture from "./Picture";
import Content from "./Content";
import Title from "./Title";
import Body from "./Body";
import Tags from "./Tags";
import Bar from "./Bar";
import Author from "./Author";
import Navigation from "./Navigation";
import Recommended from "./Recommended";
import Comments from "./Comments";
import Footer from "../../components/Footer";

class Post extends React.Component {

    /**
     *
     */
    render() {
        return (
            <>
                <TopBar />

                <Header />

                <Wrapper>
                    <Picture
                        image={"https://www.ministryofsound.com/media/2404/ava-deck.png"}
                        title={"Post title"}
                    />

                    <Content>
                        <Title
                            categoryLink={"#"}
                            categoryTitle={"Lifestyle"}
                            postTitle={"Put on Your Party Dress"}
                            author={"Valerian"}
                            authorLink={"#"}
                            commentsAmount={2}
                            date={"October 7, 2018"}
                        />

                        <Body
                            content={null}
                        />

                        <Tags
                            list={null}
                        />

                        <Bar />

                        <Author />

                        <Navigation />

                        <Recommended />

                        <Comments />
                    </Content>
                </Wrapper>

                <Footer />
            </>
        )
    }
}

export default Post;