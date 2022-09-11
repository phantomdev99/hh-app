import { useState, useEffect } from "react";
import styled from "styled-components";
import {
    RoadmapBackImage,
    RoadmapMarkerImage1,
    RoadmapMarkerImage2,
} from "../components/images";
import { Text, Link, Image } from "./common";
import ReactSlider from "react-slider";

import "./roadmap.css";

const RoadmapItem = (props: any) => {
    const StyledRoadmapItemWrap = styled.div`
        background: #10040e;
        border: 1.5px solid #653f61;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 16px;
        width: 378px;
        display: inline-block;
        margin-right: 24px;
        &:last-child {
            margin-right: 0;
        }
    `;
    const StyledRoadmapItemTitle = styled(Text)`
        color: #fecf69;
        font-family: "Rubik-600";
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        @media (max-width: 550px) {
            font-size: 14px;
            line-height: 22px;
        }
    `;
    const StyledRoadmapMarker1 = styled(Image)`
        margin: 16px auto;
        @media (max-width: 768px) {
            display: none;
        }
    `;
    const StyledRoadmapMarker2 = styled(Image)`
        margin: 12px auto;
        @media (min-width: 767px) {
            display: none;
        }
    `;
    const StyledRoadmapItemText = styled(Text)`
        display: block;
        white-space: normal;
        @media (max-width: 900px) {
            font-size: "Rubik-400";
            font-weight: 400;
            color: #d8cfd7;
            font-size: 14px;
            line-height: 26px;
        }
    `;

    return (
        <StyledRoadmapItemWrap>
            <StyledRoadmapItemTitle>{props.title}</StyledRoadmapItemTitle>
            <StyledRoadmapMarker1 src={RoadmapMarkerImage1} />
            <StyledRoadmapMarker2 src={RoadmapMarkerImage2} />
            <StyledRoadmapItemText>{props.children}</StyledRoadmapItemText>
        </StyledRoadmapItemWrap>
    );
};

export const Roadmap = (props: any) => {
    const [tab, setTab] = useState(0);
    const [sliderValue, setSliderValue] = useState(0);

    const onChangeSlider = (value: number) => {
        console.log(value);
        setSliderValue(value);
    };
    return (
        <div id="roadmap">
            <div className="roadmap-wrap">
                <div className="roadmap-header">
                    <p className="roadmap-header-text">Road Map</p>
                    <div className="roadmap-tabs">
                        <div
                            className="roadmap-tab"
                            style={{ opacity: tab == 0 ? "1" : "0.25" }}
                            onClick={() => {
                                setTab(0);
                            }}
                        >
                            Part 1
                        </div>
                        <div
                            className="roadmap-tab"
                            style={{ opacity: tab == 0 ? "0.25" : "1" }}
                            onClick={() => {
                                setTab(1);
                            }}
                        >
                            Part 2
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className="roadmap-tab-section0"
                        style={{ display: tab == 0 ? "block" : "none" }}
                    >
                        <div
                            className="roadmap-item-wrap"
                            style={{
                                transform: `translateX(-${sliderValue}%)`,
                                left: `${sliderValue}%`,
                            }}
                        >
                            <RoadmapItem title="Token Staking and Rewards">
                                <span
                                    style={{
                                        color: "#ef7351",
                                        fontWeight: "600",
                                        fontFamily: "Rubik-600",
                                    }}
                                >
                                    Hanging Headz
                                </span>{" "}
                                will offer a cryptocurrency token with the
                                ticker symbol{" "}
                                <span
                                    style={{
                                        color: "#ef7351",
                                        fontWeight: "600",
                                        fontFamily: "Rubik-600",
                                    }}
                                >
                                    $HEADZ
                                </span>
                                . You will be able to use this token to purchase
                                real-life items such as computer accessories and
                                other cool physical products, as well as
                                whitelist to NFT projects we collaborate with.
                                Also using{" "}
                                <span
                                    style={{
                                        color: "#ef7351",
                                        fontWeight: "600",
                                        fontFamily: "Rubik-600",
                                    }}
                                >
                                    $HEADZ
                                </span>
                                , you will be able to purchase some exclusive
                                Hanging Heads accessories via our online shop.
                                Some items will only be available to purchase
                                using{" "}
                                <span
                                    style={{
                                        color: "#ef7351",
                                        fontWeight: "600",
                                        fontFamily: "Rubik-600",
                                    }}
                                >
                                    $HEADZ
                                </span>{" "}
                                token. Depending on the item, it can either be
                                paid for in{" "}
                                <span
                                    style={{
                                        color: "#ef7351",
                                        fontWeight: "600",
                                        fontFamily: "Rubik-600",
                                    }}
                                >
                                    $HEADZ
                                </span>{" "}
                                token, or will have to be paid for in fiat
                                currency.
                            </RoadmapItem>
                            <RoadmapItem title="Real Life Merchandise">
                                We will be creating skull chains based on some
                                of the Traits in our NFTs. We will also be
                                offering special clothing and accessories
                                specifically to holders hanging heads
                            </RoadmapItem>
                            <RoadmapItem title="The Deadly decision show">
                                Similar to shark tank we will be doing daily
                                shows on the discord stage where random holders
                                who submit their project ideas into a form will
                                be able to come up and pitch their project to us
                                for a chance to win an investment to fund their
                                project. There will be a certain number of
                                contestants who get to participate each week and
                                in the show there will be one winner!
                            </RoadmapItem>
                            <RoadmapItem title="Collabs & Giveaways">
                                We will be partnering with projects to provide
                                our holders with the highest quality
                                collaborations. We will also be holding daily
                                NFT & ETH giveaways for holders in the server,
                                the more hanging heads you own the more of a
                                chance you will get to win!
                            </RoadmapItem>
                            <RoadmapItem title="Alpha">
                                We will have NFT experts in our discord
                                constantly feeding the best and most high
                                quality alpha in our server. We will have alpha
                                chats where members can discuss projects they
                                are looking into.
                            </RoadmapItem>
                            <RoadmapItem title="Charity">
                                25% of secondary sales will go to a charity that
                                our holders get to vote on
                            </RoadmapItem>
                        </div>
                        <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="slider-thumb"
                            trackClassName="slider-track"
                            onChange={onChangeSlider}
                            value={sliderValue}
                            step={0.2}
                        />
                    </div>
                    <div
                        className="roadmap-tab-section1"
                        style={{ display: tab == 1 ? "block" : "none" }}
                    >
                        <p className="roadmap-text">‧ P2E game</p>
                        <p className="roadmap-text">
                            ‧ 3D collection airdropped to holders
                        </p>
                        <p className="roadmap-text">‧ And more</p>
                        <p className="roadmap-big-text">Coming Soon...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
