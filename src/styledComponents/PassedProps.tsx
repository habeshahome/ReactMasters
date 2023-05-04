// styled component accept the html attributes by default! Remember that!
import styled from "styled-components"
import { BasicStyledButton } from "./BasicStyles"

export const PassedProps = styled(BasicStyledButton).attrs((props: {cta: boolean}) => ({
    type: props ? 'submit' : 'button'
}))` 
    border: 3px solid #230023
`