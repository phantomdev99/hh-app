import styled from "styled-components";
import { FooterLogoImage, DiscordSvg, TwitterSvg, OpenseaSvg } from "./images";
import { Image, Link } from "./common";

export const Footer = (props: any) => {
    const StyledContainer = styled.div`
        padding: 0 130px;
        position: relative;
        background-color: #10040e;
        max-width: 1440px;
        margin: auto;
        @media (max-width: 900px) {
            padding: 0 32px;
        }
    `;
    const StyledFooterLogoImage = styled(Image)`
        @media (max-width: 550px) {
            width: 150px;
        }
    `;
    const StyledFooterLogo = styled.div`
        display: flex;
        justify-content: center;
    `;
    const StyledFooterTitle = styled.div`
        margin-top: 88px;
        text-align: center;
        @media (max-width: 550px) {
            margin-top: 44px;
        }
    `;
    const StyledFooterTitleHeader = styled.p`
        font-family: "Norse-Bold";
        font-size: 40px;
        line-height: 40px;
        font-weight: 700;
        letter-spacing: 0.045em;
        color: #ef7351;
        @media (max-width: 550px) {
            font-size: 24px;
            line-height: 24px;
        }
    `;
    const StyledFooterContent = styled.p`
        max-width: 650px;
        margin: auto;
        margin-top: 32px;
        font-family: "Rubik-400";
        font-size: 16px;
        line-height: 30px;
        color: #b29fb0;
        @media (max-width: 550px) {
            display: none;
        }
    `;
    const StyledFooterMobileContent = styled(StyledFooterContent)`
        display: none;
        font-size: 12px;
        line-height: 20px;
        @media (max-width: 550px) {
            font-size: 16px;
            display: block;
        }
    `;
    const StyledFooterEnd = styled.div`
        padding-bottom: 44px;
        @media (max-width: 768px) {
            padding-bottom: 23px;
        }
    `;
    const StyledFooterLine = styled.div`
        border: 1px solid #b29fb0;
        margin-top: 40px;
        margin-bottom: 16px;
        opacity: 0.25;
    `;
    const StyledSocialImagesWrap = styled.div`
        @media (max-width: 550px) {
            display: none
        }
    `;
    const StyledSocialImagesMobileWrap = styled(StyledSocialImagesWrap) `
        display: none;
        & svg {
            width: 44px;
            height: 44px;
        }
        @media (max-width: 550px) {
            margin-top: 36px;
            margin-bottom: 40px;
            display: block;
        }
    `
    const StyledFooterTextGroup = styled.div`
        display: flex;
        justify-content: space-between;
        @media (max-width: 550px) {
            display: block;
        }
    `;
    const StyledFooterText = styled.div`
        margin-top: 16px;
        font-family: "Rubik-400";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 26px;
        color: #b29fb0;
        opacity: 0.25;
    `;
    return (
        <StyledContainer>
            <StyledFooterLogo>
                <StyledFooterLogoImage src={FooterLogoImage} />
            </StyledFooterLogo>
            <StyledFooterTitle>
                <StyledFooterTitleHeader>
                    Join the community
                </StyledFooterTitleHeader>
                <StyledFooterContent>
                    At a very high level, most NFTs are part of the Ethereum
                    blockchain. Ethereum is a cryptocurrency, At a very high
                    level, most NFTs are part of the Ethereum blockchain.
                    Ethereum is a cryptocurrency.
                </StyledFooterContent>
                <StyledFooterMobileContent>
                    At a very high level, most NFTs are part of the Ethereum
                    blockchain. Ethereum is a cryptocurrency.
                </StyledFooterMobileContent>
                <StyledSocialImagesMobileWrap>
                        <Link href="#" target="_blank">
                            <DiscordSvg />
                        </Link>
                        <Link href="#" target="_blank">
                            <TwitterSvg />
                        </Link>
                        <Link href="#" target="_blank">
                            <OpenseaSvg />
                        </Link>
                </StyledSocialImagesMobileWrap>
            </StyledFooterTitle>
            <StyledFooterEnd>
                <StyledFooterLine />
                <StyledFooterTextGroup>
                    <StyledFooterText>All rights reserved</StyledFooterText>
                    <StyledSocialImagesWrap>
                        <Link href="#" target="_blank">
                            <DiscordSvg />
                        </Link>
                        <Link href="#" target="_blank">
                            <TwitterSvg />
                        </Link>
                        <Link href="#" target="_blank">
                            <OpenseaSvg />
                        </Link>
                    </StyledSocialImagesWrap>
                </StyledFooterTextGroup>
            </StyledFooterEnd>
        </StyledContainer>
    );
};
