import styled from "styled-components";
import { Image } from "./common";

import {
    LeftLightImage,
    RightLightImage,
    GemImage,
    SkeletonImage,
} from "./images";

export const Story = (props: any) => {

    const StyledContainer = styled.div `
        position: relative;
        background-color: #10040e;
    `
    const StyledWrap = styled.div`
        padding: 108px 130px;
        max-width: 1440px;
        margin: auto;
        @media (max-width: 1280px) {
            padding: 70px 75px;
        }
        @media (max-width: 980px) {
            padding: 70px 60px;
        }
        @media (max-width: 550px) {
            padding: 48px 32px;
        }
    `;

    const StyleEffectImage1 = styled(Image)`
        position: absolute;
        bottom: 0;
        left: 0;
        width: 20%;
    `;

    const StyleEffectImage2 = styled(Image)`
        position: absolute;
        right: 0;
        top: -400px;
        width: 25%;
        @media (max-width: 1000px) {
            top: 18%;
        }
    `;
    const StyleEffectImage3 = styled(Image)`
        max-width: 80%;
        @media (max-width: 768px) {
            width: 250px;
        }
    `;

    const StyledTitle = styled.p`
        font-family: "Norse-Bold";
        font-size: 48px;
        line-height: 48.43px;
        text-transform: uppercase;
        background: linear-gradient(111.22deg, #ef7351 28.08%, #fec343 164.39%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        margin-bottom: 24px;
        @media (max-width: 550px) {
            font-size: 24px;
            line-height: 24.22px;
        }
    `;

    const StyledContent = styled.p`
        display: flex;
        align-items: center;
        @media (max-width: 768px) {
            display: block;
        }
    `;

    const StyledContentReverse = styled(StyledContent)`
        flex-direction: row-reverse;
    `;

    const StyledContent1 = styled.p`
        width: 50%;
        font-family: "Rubik-400";
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
        color: #d8cfd7;
        @media (max-width: 768px) {
            width: 100%;
        }
        @media (max-width: 550px) {
            font-size: 14px;
            line-height: 26px;
        }
    `;

    const StyledContent2 = styled.p`
        width: 50%;
        font-family: "Rubik-400";
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
        color: #d8cfd7;
        @media (max-width: 768px) {
            line-height: 26px;
            width: 100%;
        }
        @media (max-width: 550px) {
            font-size: 14px;
            line-height: 26px;
        }
    `;

    const StyledImageWrap = styled.div`
        width: 50%;
        text-align: center;
        @media (max-width: 768px) {
            width: 100%;
        }
    `;

    return (
        <StyledContainer id="story">
            <StyleEffectImage1 src={LeftLightImage} />
            <StyleEffectImage2 src={RightLightImage} />
            <StyledWrap>
                <StyledTitle>The Story</StyledTitle>
                <StyledContent>
                    <StyledContent1>
                        The origins of Hanging Heads dates back to medieval times,
                        where there were Vikings traveling along a dark and gloomy
                        dirt trail in Iceland, full of skeletons of the Vikings'
                        former rivals. Whilst traveling along this trail, the
                        Vikings came across something called Skeleton Valley. This
                        mysterious valley was heard to be cursed with bad sins. The
                        Vikings had now learned that, rumor has it, if they chopped
                        one of the heads of a skeleton off, the curse would become
                        ineffective.
                    </StyledContent1>
                    <StyledImageWrap>
                        <StyleEffectImage3 src={GemImage} />
                    </StyledImageWrap>
                </StyledContent>
                <StyledContentReverse>
                    <StyledContent2>
                        From that point on, any Viking that would pass through
                        Skeleton Valley would chop one of the skeleton's heads off,
                        using their large axe. We discovered these beheaded ancient
                        skeletons in the valley, and decided to preserve their
                        presence on the Ethereum blockchain. But one night something
                        odd had happened, the heads of these preserved skulls
                        started doing strange things. They started to shake, rattle,
                        and their eyes started to light up. It was even reported
                        that one skull had said "we want revenge…"
                    </StyledContent2>
                    <StyledImageWrap>
                        <StyleEffectImage3 src={SkeletonImage} />
                    </StyledImageWrap>
                </StyledContentReverse>
            </StyledWrap>
        </StyledContainer>
    );
};
