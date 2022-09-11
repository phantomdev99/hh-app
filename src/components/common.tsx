import styled from "styled-components";
import "../assets/fonts/fonts.css";

export const Text = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
`;

export const Link = styled.a`
    color: inherit;
    font-size: 1.4rem;
    &:hover {
        cursor: pointer;
    }
`;

export const Image = styled.img`
    user-select: none;
`;
