import { Route, Routes } from 'react-router-dom';
import { AppContext, AppProvider } from './app-context';
import './App.css'
import LegalNotice from './component/legal-notice';
import TermsOfServices from './component/terms-of-services';
import Contrat from './component/contract';
import Header from './component/header';
import Footer from './component/footer';
import PopUp from './component/popup';
import Main from './component/main';
import { useContext, useEffect, useState } from 'react';
import CreateClient from './component/create-client';

function App() {
  const {contextData,setContextData} = useContext(AppContext)
  const [data,setData] = useState<{size:string,mode:string,id:number|null}>({size:'w-0',mode:'',id:null})
  useEffect(()=>{
      if (contextData && contextData.state === "show") {
          //setData({size:contextData.size,mode:contextData.mode,id:contextData.id})
          console.log("contextData",contextData)
          //setContextData(null)
      }else if(contextData && contextData.state === "hide"){
          //setData({size:contextData.size,mode:'',id:null})
      }
  },[contextData])
  return (
    <>
    <AppProvider>
    <Header/>
    <Routes>
      <Route path="/:lang" element={<Main/>} />
      <Route path="/:lang/legal-notice" element={<LegalNotice />} />
      <Route path="/:lang/terms-of-services" element={<TermsOfServices />} />
      <Route path="/:lang/signing-contract/:id" element={<Contrat />} />
      <Route path="/:lang/create-client" element={<CreateClient />} />
    </Routes>
    {
        <PopUp id={null}/>
    }
    <Footer/>
    </AppProvider>
    </>
  )
}

export default App
