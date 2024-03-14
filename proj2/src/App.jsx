import 'bootstrap/dist/css/bootstrap.min.css';




import './App.css'
import Navbarr from './component/navbar/Navbarr';
import Home from './component/pages/Home/Home';
import Main from './component/pages/main/Main';
import About from './component/pages/about/About';
import Whyus from './component/pages/whyus/Whyus';



function App() {
  

  return (
    <>
    <Navbarr/>
    <Home/>
    <Main/>
    <About/>
    <Whyus/>
    </>
  )
}

export default App
