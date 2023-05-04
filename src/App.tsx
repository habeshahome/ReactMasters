import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { StyledComponentsDemo } from './styledComponents'
import { Button, ThemeProvider } from '@mui/material'
import { theme } from './theme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider theme={theme}> 
      {/** consuming the augmented color is not ready yet on component level... */}
        <Button color='primary' variant='contained'> Lovely Augmentation </Button>
      </ThemeProvider>
      <StyledComponentsDemo />
      
    </>
  )
}

export default App
