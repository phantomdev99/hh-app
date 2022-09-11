import { useEffect } from "react";
import styled from "styled-components";

import { TopMenu } from "../components/top-menu";
import { BannerBackgroundImage } from "../components/images";
import { Banner } from "../components/banner";
import { Story } from "../components/story";
import { Members } from "../components/members";
import { FAQ } from "../components/faqs";
import { Footer } from "../components/footer";
import { Roadmap } from "../components/roadmap";
export const Home = () => {
    useEffect(() => {
        document.title = "Home - Hanging Heads";
    }, []);

    const StyledTopSection = styled.div`
        background-image: url(${BannerBackgroundImage}),
            linear-gradient(180deg, #10040e 0%, rgba(6, 2, 6, 0) 100%);
        background-blend-mode: multiply;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;
    `;
    return (
        <div>
            <StyledTopSection id="home">
                <TopMenu btnValue="Mint Now" btnLink="/mint"></TopMenu>
                <Banner />
            </StyledTopSection>
            <Story />
            <Roadmap />
            <Members />
            <FAQ />
            <Footer />
        </div>
    );
};
