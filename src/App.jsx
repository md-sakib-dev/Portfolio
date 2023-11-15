import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Experience from './Components/Experience'
import Header from './Components/Header'
import { Home } from './Components/Home'
import Portfolio from './Components/Portfolio'
import Sociallinks from './Components/Sociallinks'

function App() {
 
  return (
  <>
  <Header/>
  <Home/>
  <About/>
  <Portfolio/>
  <Experience/>
  <Contact/>

  <Sociallinks/>

  </>
  )
}

export default App
