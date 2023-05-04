import styled from "styled-components";
import { ExtendingStyles } from "./ExtendingStyles";

export const PseudoClassess = styled(ExtendingStyles)` 
    background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
    border-radius: 5px;
    color: #ffffff;
    &:hover {
        background: linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%);
    }
`