import { uptime } from "process";
import styled from "styled-components";
import { Image } from "./common";
import {
    MonsterImage1,
    MonsterImage2,
    MonsterImage3,
    MonsterImage4,
    MonsterImage5,
    LeftFireImage,
    RightFireImage,
} from "./images";
export const Banner = (props: any) => {
    const StyledWrap = styled.div`
        text-align: center;
    `;

    const StyledEffectImage1 = styled(Image)`
        position: absolute;
        left: 10%;
        width: 9%;
        @media (max-width: 900px) {
            display: none;
        }
    `;

    const StyledEffectImage2 = styled(Image)`
        position: absolute;
        left: 21%;
        width: 18.5%;
        @media (max-width: 768px) {
            width: 30%;
            left: 12%;
        }
        @media (max-width: 500px) {
            width: 37%;
            left: 1%;
        }
    `;

    const StyledEffectImage3 = styled(Image)`
        position: absolute;
        left: 42%;
        width: 18.7%;
        @media (max-width: 768px) {
            width: 30%;
            left: 35%;
        }
        @media (max-width: 500px) {
            width: 40%;
            left: 30%;
        }
    `;

    const StyledEffectImage4 = styled(Image)`
        position: absolute;
        right: 22%;
        width: 18.5%;
        @media (max-width: 768px) {
            width: 30%;
            right: 12%;
        }
        @media (max-width: 500px) {
            width: 37%;
            right: 1%;
        }
    `;

    const StyledEffectImage5 = styled(Image)`
        position: absolute;
        right: 8%;
        width: 11%;
        @media (max-width: 900px) {
            display: none;
        }
    `;

    const StyledEffectImage6 = styled(Image)`
        position: absolute;
        left: 0;
        top: 45%;
        width: 14.3%;
        @media (max-width: 768px) {
            display: none;
        }
    `;

    const StyledEffectImage7 = styled(Image)`
        position: absolute;
        right: 0;
        top: 45%;
        width: 14.3%;
        @media (max-width: 768px) {
            z-index: 99;
            top: 85%;
            width: 100px;
        }
    `;

    const StyledTitle = styled.div`
        text-align: center;
        margin-top: 20%;
        @media (max-width: 768px) {
            margin-top: 32%;
        }
        @media (max-width: 500px) {
            margin-top: 42%;
        }
    `;

    const StyledTitleHeader = styled.p`
        display: flex;
        justify-content: center;
        font-family: "Norse-Bold";
        font-weight: 700;
        font-size: 64px;
        line-height: 64.58px;
        text-transform: uppercase;
        background: linear-gradient(111.22deg, #ef7351 28.08%, #fec343 164.39%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        @media (max-width: 1280px) {
            font-size: 55px;
        }
        @media (max-width: 1100px) {
            font-size: 48px;
            line-height: 44px;
        }
        @media (max-width: 980px) {
            font-size: 44px;
            line-height: 44px;
            display: block;
        }
    `;
    const StyledTitleHeader1 = styled.p`
        @media (max-width: 768px) {
            font-size: 28px;
        }
    `;
    const StyledTitleHeader2 = styled.p`
        @media (max-width: 768px) {
            font-size: 44px;
        }
    `;

    const StyledTitleContent = styled.p`
        margin-top: 8px;
        font-family: "Rubik-400";
        line-height: 30px;
        font-size: 16px;
        color: #fce3dc;
        text-align: center;
        max-width: 626px;
        margin: auto;
        width: 90%;
        @media (max-width: 768px) {
            line-height: 26px;
            font-size: 14px;
        }
    `;

    const StyledTitleButtonGroup = styled.div`
        font-family: "Norse-Bold";
        font-size: 20px;
        font-weight: 700 !important;
        line-height: 24px !important;
        display: flex !important;
        text-transform: uppercase !important;
        justify-content: center;
        margin-top: 42px;
        padding-bottom: 130px;
        @media (max-width: 768px) {
            padding-bottom: 80px;
        }
    `;

    const StyledTitleButton1 = styled.div`
        white-space: nowrap;
        text-transform: none !important;
        color: #f5f5f5 !important;
        padding: 9px 44px;
        position: relative;
        z-index: 0;
        border: 2px solid transparent;
        border-radius: 8px;
        background: linear-gradient(111.22deg, #ef7351 28.08%, #fec343 164.39%);
        margin-right: 24px;
        @media (max-width: 768px) {
            padding: 8px 30px;
        }
        @media (max-width: 480px) {
            padding: 8px 16px;
        }
    `;

    const StyledTitleButton2 = styled.div`
        white-space: nowrap;
        text-transform: none !important;
        color: #f5f5f5 !important;
        padding: 9px 56px ;
        position: relative ;
        z-index: 0;
        @media (max-width: 768px) {
            padding: 8px 41px;
        }
        @media (max-width: 480px) {
            padding: 8px 32px;
        }

        &::before {
            content: "";
            position: absolute;
            z-index: -1;
            inset: 0;
            padding: 1px;
            border-radius: 8px;
            background: linear-gradient(to right, #EF7351, #FEC343);
            -webkit-mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
        }

    `;

    return (
        <>
            <StyledWrap>
                <StyledEffectImage1 src={MonsterImage1} />
                <StyledEffectImage2 src={MonsterImage2} />
                <StyledEffectImage3 src={MonsterImage3} />
                <StyledEffectImage4 src={MonsterImage4} />
                <StyledEffectImage5 src={MonsterImage5} />
                <StyledEffectImage6 src={LeftFireImage} />
                <StyledEffectImage7 src={RightFireImage} />
            </StyledWrap>
            <StyledTitle>
                <StyledTitleHeader>
                    {" "}
                    <StyledTitleHeader1>Welcome to</StyledTitleHeader1>
                    <StyledTitleHeader2> hanging headz</StyledTitleHeader2>
                </StyledTitleHeader>
                <StyledTitleContent>
                    {" "}
                    They started to shake, rattle, and their eyes started to
                    light uptime.It was even reported that one skull had said"we
                    want revenge..."
                </StyledTitleContent>
                <StyledTitleButtonGroup>
                    <StyledTitleButton1>join community</StyledTitleButton1>
                    <StyledTitleButton2>Mint Now</StyledTitleButton2>
                </StyledTitleButtonGroup>
            </StyledTitle>
        </>
    );
};
