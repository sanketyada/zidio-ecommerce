import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './customer/components/Navigation/Navigation'
import Homepage from './customer/Pages/Homepage/Homepage'
import Footer from './customer/components/Footer/Footer'
function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navigation/>
    </div>
    <div>
      <Homepage/>
    </div>
    <Footer/>
    </>
  )
}

export default App
