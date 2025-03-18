import { ChakraProvider } from '@chakra-ui/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

const style={
  global:(props)=>({ body:{

    bg:mode('gray.100','#000') (props),
    color:mode("gray.800","whiteAlpha.900")(props)


  }

    
  })

}

const config ={
  initialColorMode:'dark',
  useSystemColorMode:'false'
}

const theme= extendTheme({config})
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
  <ChakraProvider theme={theme}> 
    <App />
  </ChakraProvider>
  </BrowserRouter>
  </StrictMode>

)
