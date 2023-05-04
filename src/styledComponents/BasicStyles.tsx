import styled from 'styled-components'

export const BasicStyledComponent = styled.div`
    color: red;
`

export const BasicStyledButton = styled.button` 
    background: green; 
    color: white; 
    font-size: 1.5rem; 
    padding: 0.5rem; 
    border-radius: 0.5rem; 
    border: none; 
    cursor: pointer; 
    &:hover { background: darkgreen; }
`