
import { useContext, useEffect, useState } from "react"
import { AppContext, AppProvider } from "../app-context"
import Footer from "./footer"
import Header from "./header"
import Main from "./main"
import PopUp from "./popup"

interface RootPageProps{

}

const RootPage:React.FC<RootPageProps> = ()=>{
    const {contextData} = useContext(AppContext)
    const [data,setData] = useState<{size:string,mode:string,id:number|null}>({size:"w-[50%]",mode:'bloc',id:null})
    useEffect(()=>{
        if (contextData && contextData.type === "popupMain") {
            setData({size:contextData.size,mode:contextData.mode,id:contextData.id})
        } 
    },[contextData])
    return (
        <>
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
        <PopUp windowSize={data.size} mode={data.mode} id={data.id}/>
        </>
    )
}

export default RootPage