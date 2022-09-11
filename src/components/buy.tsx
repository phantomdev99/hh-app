import styled from "styled-components";
import { LeftLightImage, RightLightImage, BuyLogoImage } from "./images";
import { Image, Text, Link } from "./common";

export const Buy = (props: any) => {
    const StyledBuyGroup = styled.div`
        background-color: #10040e;
    `;
    const StyledBackgroundWrap = styled.div`
        position: relative;
    `;
    const StyledEffectImage1 = styled(Image)`
        position: absolute;
        left: 0;
        top: 40%;
        width: 19%;
        z-index: 99;
    `;
    const StyledEffectImage2 = styled(Image)`
        position: absolute;
        right: 0;
        top: -400px;
        width: 30%;
    `;
    const StyledBuyWrap = styled.div`
        display: flex;
        max-width: 1440px;
        margin: auto;
        padding: 110px 206px 190px 230px;
        align-items: center;
        @media (max-width: 1366px) {
            padding: 110px 170px;
        }
        @media (max-width: 1200px) {
            padding: 110px 100px;
        }
        @media (max-width: 1100px) {
            padding: 110px 60px;
        }
        @media (max-width: 990px) {
            padding: 70px 50px;
        }
        @media (max-width: 768px) {
            display: block;
            margin: auto;
        }
        @media (max-width: 550px) {
            padding: 24px 32px;
        }
    `;
    const StyledLeftWrap = styled.div`
        width: 37%;
        margin-right: 50px;
        text-align: center;
        @media (max-width: 990px) {
            margin-right: 25px;
        }
        @media (max-width: 768px) {
            width: 100%;
        }
    `;
    const StyledLogoImage = styled(Image)`
        width: 100%
    `;
    const StyledCheckoutWrap = styled.div`
        margin-left: 50px;
        width: 63%;
        @media (max-width: 990px) {
            margin-right: 25px;
        }
        @media (max-width: 768px) {
            width: auto;
            margin: 24px 0;
            padding-bottom: 50px;
        }
    `;
    const StyledBuyText = styled(Text)`
        font-family: "Rubik-400";
        font-size: 16px;
        line-height: 30px;
        text-align: center;
        color: #8b6f88;
        margin-bottom: 38px;
    `;
    const StyledItemWrap = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `;
    const StyledCheckoutRow = styled.div`
        display: flex;
        justify-content: space-between;
        margin-bottom: 36px;
    `;
    const StyledText = styled(Text)`
        font-family: "Rubik-500";
        font-size: 18px;
        line-height: 24px;
        color: #ece8ec;
    `;
    const StyledText1 = styled(Text)`
        font-family: "Rubik-600";
        font-size: 18px;
        line-height: 24px;
        color: #fedb8e;
    `;
    const StyledText2 = styled(Text)`
        font-family: "Rubik-600";
        font-size: 18px;
        line-height: 24px;
        color: #fedb8e;
        border-bottom: 1px solid #8b6f88;
        width: 76px;
        @media (max-width: 540px) {
            width: 40px;
        }
    `;
    const StyledControl = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;
    const StyledChangeControl = styled(Text)`
        font-size: 32px;
        position: relative;
        top: -4px;
        color: #ffffff;
        @media (max-width: 1200px) {
            padding: 0 16px;
        }
        @media (max-width: 850px) {
            padding: 0 10px;
        }
    `;
    const StyledChangeControlMinus = styled(StyledChangeControl)`
        padding-left: 0;
    `;

    const StyledChangeControlPlus = styled(StyledChangeControl)`
        padding-right: 44px;
        @media (max-width: 990px) {
            padding-right: 25px;
        }
    `;

    const StyledMaxControl = styled(Link)`
        white-space: nowrap;
        text-transform: none !important;
        color: #f28f74 !important;
        padding: 9px 53px !important;
        position: relative !important;
        z-index: 0;
        border: 2px solid transparent;
        border-radius: 8px;
        background: linear-gradient(to right, #10040e, #10040e),
            linear-gradient(to right, #ef7351 100%, #fec343 100%);
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        font-family: "Rubik-500";
        font-size: 16px;
        line-height: 24px !important;
        display: flex !important;
        @media (max-width: 1200px) {
            padding: 9px 28px !important;
        }
    `;
    const StyledButtonWrap = styled.div`
        margin-top: 56px;
        display: flex;
        justify-content: space-between;
    `;

    const StyledClaimButton = styled(Link)`
        white-space: nowrap;
        text-transform: none !important;
        color: #060206 !important;
        padding: 21px 91px !important;
        position: relative !important;
        z-index: 0;
        border: 2px solid transparent;
        border-radius: 8px;
        background: linear-gradient(111.22deg, #ef7351 28.08%, #fec343 164.39%);
        font-family: "Rubik-600";
        font-size: 18px;
        line-height: 24px !important;
        display: flex !important;
        @media (max-width: 1439px) {
            padding: 21px 65px !important;
        }
        @media (max-width: 1214px) {
            padding: 21px 52px !important;
        }
        @media (max-width: 934px) {
            padding: 21px 32px !important;
        }
        @media (max-width: 768px) {
            padding: 21px 60px !important;
        }
        @media (max-width: 500px) {
            padding: 21px 25px !important;
        }
    `;

    const StyledBuyButton = styled(Link)`
        white-space: nowrap;
        text-transform: none !important;
        color: #ece8ec !important;
        padding: 21px 91px !important;
        position: relative !important;
        z-index: 0;
        border: 2px solid transparent;
        border-radius: 8px;
        background: linear-gradient(to right, #10040e, #10040e),
            linear-gradient(to right, #ef7351 100%, #fec343 100%);
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        font-family: "Rubik-600";
        font-size: 18px;
        line-height: 24px !important;
        display: flex !important;
        @media (max-width: 1439px) {
            padding: 21px 65px !important;
        }
        @media (max-width: 1214px) {
            padding: 21px 52px !important;
        }
        @media (max-width: 934px) {
            padding: 21px 32px !important;
        }
        @media (max-width: 768px) {
            padding: 21px 60px !important;
        }
        @media (max-width: 500px) {
            padding: 21px 25px !important;
        }
    `;

    return (
        <StyledBuyGroup id="buy">
            <StyledBackgroundWrap>
                <StyledEffectImage1 src={LeftLightImage} />
                <StyledEffectImage2 src={RightLightImage} />
            </StyledBackgroundWrap>
            <StyledBuyWrap>
                <StyledLeftWrap>
                    <StyledLogoImage src={BuyLogoImage} />
                </StyledLeftWrap>
                <StyledCheckoutWrap>
                    <StyledBuyText>
                        Make sure to connect your Wallet before purchasing
                    </StyledBuyText>
                    <StyledItemWrap>
                        <StyledCheckoutRow>
                            <StyledText>Total Sold</StyledText>
                            <StyledText1>199 of 2000</StyledText1>
                        </StyledCheckoutRow>
                        <StyledCheckoutRow>
                            <StyledText>Amount</StyledText>
                            <StyledControl>
                                <StyledControl>
                                    <StyledChangeControlMinus>
                                        -
                                    </StyledChangeControlMinus>
                                    <StyledText2>20</StyledText2>
                                    <StyledChangeControlPlus>
                                        +
                                    </StyledChangeControlPlus>
                                </StyledControl>
                                <StyledMaxControl>Max</StyledMaxControl>
                            </StyledControl>
                        </StyledCheckoutRow>
                        <StyledCheckoutRow>
                            <StyledText>Total Amount</StyledText>
                            <StyledText1>0.09 ETH</StyledText1>
                        </StyledCheckoutRow>
                        <StyledCheckoutRow>
                            <StyledText>My ticket</StyledText>
                            <StyledText1>0</StyledText1>
                        </StyledCheckoutRow>
                    </StyledItemWrap>
                    <StyledButtonWrap>
                        <StyledBuyButton>Buy Ticket</StyledBuyButton>
                        <StyledClaimButton>Claim Now</StyledClaimButton>
                    </StyledButtonWrap>
                </StyledCheckoutWrap>
            </StyledBuyWrap>
        </StyledBuyGroup>
    );
};
