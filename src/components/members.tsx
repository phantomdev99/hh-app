import React, { CSSProperties } from "react";
import styled from "styled-components";
import { MemberImage1, MemberImage2, MemberImage3 } from "./images";
import { Text } from "./common";
import { MemberDetail } from "./member";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Members = (props: any) => {
    const StyledWrap = styled.div`
        position: relative;
        background-color: #060206;
    `;
    const StyledContainer = styled.div`
        max-width: 1440px;
        margin: auto;
        padding: 56px 130px 100px;
        @media (max-width: 1200px) {
            padding-left: 75px;
            padding-right: 75px;
        }
        @media (max-width: 980px) {
            padding-left: 60px;
            padding-right: 60px;
        }
        @media (max-width: 550px) {
            padding-top: 48px;
            padding-left: 32px;
            padding-right: 32px;
        }
        @media (max-width: 480px) {
            padding-left: 0;
            padding-right: 0;
        }
    `;
    const StyledTitleWrap = styled.div`
        margin-bottom: 56px;
        @media (max-width: 550px) {
            margin-bottom: 34px;
        }
    `;
    const StyledTitleText = styled(Text)`
        font-family: "Norse-Bold";
        font-size: 48px;
        line-height: 48px;
        text-align: center;
        background: linear-gradient(111.22deg, #ef7351 28.08%, #fec343 164.39%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        @media (max-width: 550px) {
            font-size: 24px;
            line-height: 24px;
        }
    `;
    const StyledDetailWrap = styled.div`
        & .slick-slider {
            z-index: 2;
            & .slick-list {
                @media (max-width: 480px) {
                    padding-left: 32px;
                }
            }
            & .slick-prev:before {
                content: none;
            }
            & .slick-next:before {
                content: none;
            }
            & .slick-prev,
            & .slick-next {
                width: 40px;
                height: 40px;
                background-color: #1f081d;
                border-radius: 50%;

                & svg {
                    color: #8b6f88;
                    width: 13px;
                }
            }
            & .slick-prev {
                left: -40px;
                @media (max-width: 550px) {
                    left: -30px;
                }
                @media (max-width: 480px) {
                    display: none !important;
                }
            }
            & .slick-next {
                right: -40px;
                @media (max-width: 550px) {
                    right: -30px;
                }
                @media (max-width: 480px) {
                    display: none !important;
                }
            }
        }
    `;

    function CustomNextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <button
                className={className}
                style={{ ...style }}
                onClick={onClick}
            >
                <ArrowForwardIosIcon />
            </button>
        );
    }

    function CustomPrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <button
                className={className}
                style={{ ...style }}
                onClick={onClick}
            >
                <ArrowBackIosNewIcon />
            </button>
        );
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: "slider variable-width",
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                },
            },
        ],
    };
    return (
        <StyledWrap id="members">
            <StyledContainer>
                <StyledTitleWrap>
                    <StyledTitleText>Members</StyledTitleText>
                </StyledTitleWrap>
                <StyledDetailWrap>
                    <Slider {...settings}>
                        <MemberDetail
                            photo={MemberImage1}
                            name="Charlie Puth"
                            ownerName="Art Director"
                            detail="It is my dream to build fantastic and interesting 3D games for community."
                        />
                        <MemberDetail
                            photo={MemberImage2}
                            name="Bille Eillish"
                            ownerName="Art Director"
                            detail="It is my dream to build fantastic and interesting 3D games for community."
                        />
                        <MemberDetail
                            photo={MemberImage3}
                            name="Justin Bieber"
                            ownerName="Art Director"
                            detail="It is my dream to build fantastic and interesting 3D games for community."
                        />
                        <MemberDetail
                            photo={MemberImage1}
                            name="Charlie Puth"
                            ownerName="Art Director"
                            detail="It is my dream to build fantastic and interesting 3D games for community."
                        />
                        <MemberDetail
                            photo={MemberImage2}
                            name="Bille Eillish"
                            ownerName="Art Director"
                            detail="It is my dream to build fantastic and interesting 3D games for community."
                        />
                        <MemberDetail
                            photo={MemberImage3}
                            name="Justin Bieber"
                            ownerName="Art Director"
                            detail="It is my dream to build fantastic and interesting 3D games for community."
                        />
                    </Slider>
                </StyledDetailWrap>
            </StyledContainer>
        </StyledWrap>
    );
};
