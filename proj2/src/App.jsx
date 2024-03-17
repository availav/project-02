import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";




import './App.css'
import Navbarr from './component/navbar/Navbarr';
import Home from './component/pages/Home/Home';
import Main from './component/pages/main/Main';
import About from './component/pages/about/About';
import Whyus from './component/pages/whyus/Whyus';
import Skills from "./component/pages/skills/Skills"
import Services from './component/pages/services/Services';
import Team from './component/pages/team/Team';
import Pricing from './component/pages/pricing/Pricing';
import Faq from './component/pages/FAQ/Faq';
import Contact from './component/pages/contact/Contact';
import Footer from './component/footer/Footer';



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbarr/>
    <Routes>
      <Route path='/' element={<Home/>}     />
      
      <Route path='/about' element={<About/>}     />
      <Route path='/contact' element={<Contact/>}     />
      <Route path='/whyus' element={<Whyus/>}     />
      <Route path='/skills' element={ <Skills/>}     />
      <Route path='/service' element={<Services/>}     />
     
    </Routes>
    <Faq/>
    <Pricing/>
    <Main/>
    <Footer/>
    
    </BrowserRouter>
    
    </>
  );
}

export default App
