import styled from "styled-components";
import { Text, Image } from "./common";
import { MemberBG } from "./images";

export const MemberDetail = (props: any) => {
    const StyledContainer = styled.div`
        position: relative;
        text-align: center;
        max-width: 300px;
        margin: auto;
        width: 90%;
        @media (max-width: 480px) {
            width: 229px;
        }
    `;

    const StyledNameText = styled(Text)`
        margin-top: 12px;
        height: 24px;
        font-family: "Rubik-500";
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        color: #f28f74;
        @media (max-width: 550px) {
            font-size: 16px;
            line-height: 24px;
        }
    `;
    const StyledPhotoImage = styled(Image)`
        margin-top: 8px !important;
        width: 95.8%;
        margin: auto;
        @media (max-width: 480px) {
            width: 81%;
        }
    `;
    const StyledOwnerText = styled(Text)`
        margin-top: 8px;
        font-family: "Rubik-400";
        font-weight: 400;
        font-size: 14px;
        line-height: 26px;
        text-align: center;
        color: #dbcfd7;
        @media (max-width: 550px) {
            font-size: 12px;
            line-height: 20px;
        }
    `;
    const StyledDetailText = styled(Text)`
        margin-top: 12px;
        font-family: "Rubik-400";
        font-size: 14px;
        line-height: 26px;
        text-align: center;
        color: #d8cfd7;
        padding: 0px 12px;
    `;
    const StyledMemberBGImage = styled(Image)`
        width: 100%;
        @media (max-width: 480px) {
            width: 84.5%;
            margin: auto;
        }
    `;
    return (
        <StyledContainer>
            <StyledMemberBGImage src={MemberBG} />
            <StyledPhotoImage src={props.photo} />
            <StyledNameText>{props.name}</StyledNameText>
            <StyledOwnerText>{props.ownerName}</StyledOwnerText>
            <StyledDetailText>{props.detail}</StyledDetailText>
        </StyledContainer>
    );
};
