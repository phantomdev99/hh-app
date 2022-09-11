import React from "react";
import styled from "styled-components";
import { Text, Image, Link } from "./common";
import { LeftLightImage, RightLightImage, SkeletonImage1 } from "./images";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    marginTop: "24px !important",
    backgroundColor: "transparent !important",
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));
const AccordionSummary = styled(MuiAccordionSummary)`
    border-radius: 8px !important;
    color: #D8CFD7 !important;
    font-family: "Rubik-500" !important;
    font-size: 18px !important;
    line-height: 24px !important;
    background-color: #1F081D !important;
    min-height: 67px !important;
    padding: 0 24px !important;
    @media (max-width: 550px) {
        min-height: 48px !important;
        font-size: 14px !important;
        line-height: 22px !important;
    }
`;

const AccordionDetails = styled(MuiAccordionDetails)`
    margin: 16px 20px 56px !important;
    padding: 16px !important;
    text-align: left;
    font-family: "Rubik-400" !important;
    font-weight: 400;
    font-size: 14px !important;
    line-height: 26px !important;
    color: #d8cfd7 !important;
    text-transform: none !important;
    position: relative;
    z-index: 0;
    border: 2px solid transparent;
    border-radius: 8px;
    background: linear-gradient(to right, #10040e, #10040e),
        linear-gradient(to right, #ef7351 100%, #fec343 100%);
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
`;
export const FAQ = (props: any) => {
    const [expanded, setExpanded] = React.useState({
        pannel1: true,
        pannel2: false,
        pannel3: false,
    });

    const StyledFAQWrap = styled.div`
        position: relative;
    `;

    const StyledEffectImage1 = styled(Image)`
        position: absolute;
        top: 40%;
        left: 0;
        z-index: 99;
        width: 19%;
    `;
    const StyledEffectImage2 = styled(Image)`
        position: absolute;
        top: -500px;
        right: 0;
    `;
    const StyledContainer = styled.div`
        padding: 90px 130px 120px;
        margin: auto;
        max-width: 1440px;
        background-color: #10040e;
        @media (max-width: 1200px) {
            padding-left: 75px;
            padding-right: 75px;
        }
        @media (max-width: 980px) {
            padding-left: 60px;
            padding-right: 60px;
        }
        @media (max-width: 768px) {
            padding: 48px 32px 120px;
        }
    `;
    const StyledTitleText = styled.p`
        margin-bottom: 56px;
        font-family: "Norse-Bold";
        font-weight: 700;
        font-size: 48px;
        line-height: 48px;
        background: linear-gradient(111.22deg, #ef7351 28.08%, #fec343 164.39%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        @media (max-width: 550px) {
            font-size: 24px;
            line-height: 24px;
            margin-bottom: 28px;
            text-align: center;
        }
    `;
    const StyledWrap = styled.div`
        display: flex;
        align-items: center;
        @media (max-width: 768px) {
            display: block;
        }
    `;
    const StyleEffectImage3 = styled(Image)`
        max-width: 400px;
        width: 80%;
    `;
    const StyleAccordionGroup = styled.div`
        width: 58%;
        @media (max-width: 768px) {
            width: 100%;
        }
    `;

    const StyledImageWrap = styled.div`
        width: 42%;
        text-align: center;
        @media (max-width: 768px) {
            width: 100%;
            margin-top: 55px;
        }
    `;
    return (
        <StyledFAQWrap id="faqs">
            <StyledEffectImage1 src={LeftLightImage} />
            <StyledEffectImage2 src={RightLightImage} />
            <StyledContainer>
                <StyledTitleText>FAQ</StyledTitleText>
                <StyledWrap>
                    <StyleAccordionGroup>
                        <Accordion
                            expanded={expanded.pannel1 === true}
                            onChange={() => {
                                setExpanded((current) => ({
                                    ...current,
                                    pannel1: !expanded.pannel1,
                                }));
                            }}
                        >
                            <AccordionSummary
                                expandIcon={
                                    expanded.pannel1 === true ? (
                                        <RemoveIcon
                                            style={{ color: "white" }}
                                        />
                                    ) : (
                                        <AddIcon style={{ color: "white" }} />
                                    )
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                What is the mint date?
                            </AccordionSummary>
                            <AccordionDetails>
                                We will be creating skull chains based on some
                                of the Traits in our NFTs. We will also be
                                offering special clothing and accessories
                                specifically to holders hanging heads
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded.pannel2 === true}
                            onChange={() => {
                                setExpanded((current) => ({
                                    ...current,
                                    pannel2: !expanded.pannel2,
                                }));
                            }}
                        >
                            <AccordionSummary
                                expandIcon={
                                    expanded.pannel2 === true ? (
                                        <RemoveIcon
                                            style={{ color: "white" }}
                                        />
                                    ) : (
                                        <AddIcon style={{ color: "white" }} />
                                    )
                                }
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                What is the supply?
                            </AccordionSummary>
                            <AccordionDetails>
                                We will be creating skull chains based on some
                                of the Traits in our NFTs. We will also be
                                offering special clothing and accessories
                                specifically to holders hanging heads
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded.pannel3 === true}
                            onChange={() => {
                                setExpanded((current) => ({
                                    ...current,
                                    pannel3: !expanded.pannel3,
                                }));
                            }}
                        >
                            <AccordionSummary
                                expandIcon={
                                    expanded.pannel3 === true ? (
                                        <RemoveIcon
                                            style={{ color: "white" }}
                                        />
                                    ) : (
                                        <AddIcon style={{ color: "white" }} />
                                    )
                                }
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                How many can you mint per wallet?
                            </AccordionSummary>
                            <AccordionDetails>
                                We will be creating skull chains based on some
                                of the Traits in our NFTs. We will also be
                                offering special clothing and accessories
                                specifically to holders hanging heads
                            </AccordionDetails>
                        </Accordion>
                    </StyleAccordionGroup>
                    <StyledImageWrap>
                        <StyleEffectImage3 src={SkeletonImage1} />
                    </StyledImageWrap>
                </StyledWrap>
            </StyledContainer>
        </StyledFAQWrap>
    );
};
