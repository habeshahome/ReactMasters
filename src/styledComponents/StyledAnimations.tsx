import styled from "styled-components";
import { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
            }
        `

export const StyledAnimation = styled.img`
        height: 10vmin;
        pointer-events: none;
        animation: ${rotate} infinite 33s linear;
`
