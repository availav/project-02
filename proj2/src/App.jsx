import 'bootstrap/dist/css/bootstrap.min.css';




import './App.css'
import Navbarr from './component/navbar/Navbarr';
import Home from './component/pages/Home/Home';
import Main from './component/pages/main/Main';
import About from './component/pages/about/About';
import Whyus from './component/pages/whyus/Whyus';
import Skills from "./component/pages/skills/Skills"
import Services from './component/pages/services/Services';
import Team from './component/pages/team/Team';



function App() {
  

  return (
    <>
    <Navbarr/>
    <Home/>
    <Main/>
    <About/>
    <Whyus/>
    <Skills/>
    <Services/>
    <Team/>
    </>
  )
}

export default App
