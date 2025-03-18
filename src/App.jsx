
import { Button } from "@chakra-ui/react"
import {Route,Routes} from 'react-router-dom'
import HomePage from "./pages/Home/HomePage"
import AuthPage from "./pages/Home/Auth/AuthPage"
import PageLayout from "./Layout/PageLayout/PageLayout"
function App() {
  

  return (
    <PageLayout>
    <Routes>
      hi
      <Route path='/' element={<HomePage/>}/>
      <Route path='/auth' element={<AuthPage/>}/>
    </Routes>
    </PageLayout>
      
    
  )
}

export default App
