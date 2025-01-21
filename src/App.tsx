import './App.css'
import Header from './component/header';
import Home from './component/home';
import Contact from './component/contact';
import Services from './component/services';
import Price from './component/price';
import Reference from './component/reference';
import About from './component/about';
import Footer from './component/footer';
import PopUp from './component/popup';
import { useState } from 'react';


function App() {
  const [isPopUp,setIsPopUp] = useState<boolean>(true)
  return (
    <>
      <Header/>
      <main className={`transition-transform duration-500 delay-100 ease-in-out ${isPopUp ? 'translate-x-[-25vw]' : 'translate-x-0'}`}>
       <Home/>
       <About/>
       <Services/>
       <Reference/>
       <Price/>
       <Contact/>
      </main>
      <Footer/>
      <PopUp/>
    </>
  )
}

export default App
