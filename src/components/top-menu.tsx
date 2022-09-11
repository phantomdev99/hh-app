import { useState, useEffect } from "react";
import styled from "styled-components";
import { LogoImage, MobileMenuImage } from "./images";
import { Link, Image } from "./common";
import CloseIcon from "@mui/icons-material/Close";
import { Footer } from "./footer";

export const TopMenu = (props: any) => {
    const [isMobileMenuShow, setIsMobileMenuShow] = useState(false);

    useEffect(() => {
        if (props.isConnectWalletShow) setIsMobileMenuShow(false);
    }, [props.isConnectWalletShow]);

    const MenuLinks = [
        {
            link: "/#home",
            name: "Home",
        },
        {
            link: "/#story",
            name: "The Story",
        },
        {
            link: "/#roadmap",
            name: "Road Map",
        },
        {
            link: "/#members",
            name: "Members",
        },
        {
            link: "/#faqs",
            name: "FAQs",
        },
    ];

    const StyledMenuContainer = styled.div`
        background: #1f081d;
        padding: 25px 130px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 1280px) {
            padding: 25px 60px;
        }
        @media (max-width: 1080px) {
            padding: 25px 32px;
        }
    `;

    const StyledLogoImage = styled(Image)`
        @media (max-width: 768px) {
            margin-left: 20px;
        }
    `;

    const StyledSocialImage = styled(Image)``;

    const StyledLogoWrap = styled.div`
        display: flex;
        width: 177px;
        align-items: center;
        @media (max-width: 1080px) {
            width: 113px;
        }
        @media (max-width: 768px) {
            width: auto;
        }
    `;

    const StyledMenuSection = styled.div`
        display: flex;
        justify-content: space-between;
        gap: 56px;
        @media (min-width: 1700px) {
            gap: 50px;
        }
        @media (max-width: 1024px) {
            gap: 40px;
        }
        @media (max-width: 900px) {
            gap: 30px;
        }
        @media (max-width: 800px) {
            gap: 25px;
        }
        @media (max-width: 768px) {
            display: block;
            margin-left: 0px;
        }
    `;

    const StyledMenuLink = styled(Link)`
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #fce3dc;
        font-family: "Rubik-500";
        @media (max-width: 768px) {
            display: block;
            padding: 10px 33px;
        }
    `;

    const StyledMobileMenuImage = styled(Image)`
        @media (min-width: 769px) {
            display: none;
        }
    `;

    const StyledFlexWrap = styled.div`
        display: flex;
        align-items: center;
        @media (max-width: 768px) {
            display: ${isMobileMenuShow ? "block" : "none"};
            position: absolute;
            top: 95px;
            left: 0;
            width: 100%;
            background: #10040e;
            backdrop-filter: blur(40px);
            z-index: 100;
        }
    `;
    const StyledExtraButton = styled(Link)`
        white-space: nowrap;
        text-transform: none !important;
        color: #f5f5f5 !important;
        padding: 9px 56px;
        position: relative !important;
        z-index: 0;
        border: 2px solid transparent;
        font-family: "Norse-Bold";
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        text-transform: uppercase;
        z-index: 2;

        &::before {
            content: "";
            position: absolute;
            z-index: -1;
            inset: 0;
            padding: 1px;
            border-radius: 8px;
            background: linear-gradient(to right,#EF7351,#FEC343);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            -webkit-mask-composite: exclude;
            mask-composite: exclude;
        }
        @media (max-width: 1080px) {
            padding: 10px 24px;
        }
        @media (max-width: 768px) {
            padding: 6px 25px;
            font-size: 14px;
        }
    `;

    const showMobileMenu = () => {
        setIsMobileMenuShow(!isMobileMenuShow);
    };

    const StyledCloseWrap = styled.div`
        text-align: right;
        display: block;
        margin-right: 22px;
        height: 44px;

        & svg {
            position: relative;
            bottom: -8px;
            color: #653f61;
        }
    `;

    const menuLinks = (
        <StyledMenuSection>
            {MenuLinks.map((menu, index) => {
                return (
                    <StyledMenuLink
                        href={menu.link}
                        key={index}
                        onClick={showMobileMenu}
                    >
                        {menu.name}
                    </StyledMenuLink>
                );
            })}
        </StyledMenuSection>
    );

    return (
        <StyledMenuContainer>
            <StyledLogoWrap>
                <StyledMobileMenuImage
                    src={MobileMenuImage}
                    onClick={(e: any) => showMobileMenu()}
                />
                <Link href="/">
                    <StyledLogoImage src={LogoImage} />
                </Link>
            </StyledLogoWrap>
            <StyledFlexWrap>
                <StyledCloseWrap>
                    <CloseIcon onClick={() => {setIsMobileMenuShow(!isMobileMenuShow)}}/>
                </StyledCloseWrap>
                {menuLinks}
                <div style={{textAlign: 'center', marginBottom: '40px', marginTop: '10px'}}>
                    <StyledExtraButton href={props.btnLink} style={{display: 'inline-block', padding: '6px 60px'}}>
                        {props.btnValue}
                    </StyledExtraButton>
                </div>
                <Footer />
            </StyledFlexWrap>
            {props.btnLink ? (
                <StyledExtraButton href={props.btnLink}>
                    {props.btnValue}
                </StyledExtraButton>
            ) : (
                <StyledExtraButton onClick={props.clickEvent}>
                    {props.btnValue}
                </StyledExtraButton>
            )}
        </StyledMenuContainer>
    );
};
