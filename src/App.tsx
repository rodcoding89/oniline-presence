import './App.css'
import i18n from 'i18next';
import Header from './component/header';
import Home from './component/home';
import Contact from './component/contact';
import Services from './component/services';
import Price from './component/price';
import Reference from './component/reference';
import About from './component/about';
import Footer from './component/footer';


function App() {
  
  const handleChangeLanguage = (event:any)=> {
    const newLang = event.target.value;
    i18n.changeLanguage(newLang);
  }
  return (
    <>
      <Header/>
      <main>
       <Home/>
       <About/>
       <Services/>
       <Reference/>
       <Price/>
       <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
