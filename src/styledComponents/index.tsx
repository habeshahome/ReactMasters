// this is a demo component for styled components 
import styled from "styled-components";
import { BasicStyledButton, BasicStyledComponent } from "./BasicStyles";
import { ExtendingStyles } from "./ExtendingStyles";
import { PseudoClassess } from "./PseudoClasses";
import { PassedProps } from "./PassedProps";
import { StyledAnimation } from "./StyledAnimations";
import { ThemeProvider } from "styled-components";
import Logo from './react.svg';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 1rem;
`
const theme = {
    palette: {
        primary: '#230023',
        secondary: '#8939ff'
    }
}

const Button = styled(BasicStyledButton)`
    background: ${props => props.theme.palette.primary};
    color: ${props => props.theme.palette.secondary};
`


export function StyledComponentsDemo() {
    return (
        <>
            <Div>
                <h1>Styled Components</h1>
                <BasicStyledComponent>
                    I'm styled component
                </BasicStyledComponent>

                <BasicStyledButton>
                    I'm Basic Styled Button 
                </BasicStyledButton>

                <ExtendingStyles as='a'> 
                    I'm Extended Button 
                </ExtendingStyles>

                <PseudoClassess>
                    I'm Psedu Classed on Focus
                </PseudoClassess>

                <PassedProps> 
                    Submit Button by Default
                </PassedProps>

                <StyledAnimation src={Logo} /> 

                <ThemeProvider theme={theme}> 
                    <Button>Theme Button</Button>
                </ThemeProvider>
            </Div>
        </>
    );
}