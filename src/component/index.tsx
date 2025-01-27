
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
    const [data,setData] = useState<{size:string,mode:string}>({size:"w-[50%]",mode:'bloc'})
    useEffect(()=>{
        if (contextData && contextData.type === "popupMain") {
            setData({size:contextData.size,mode:contextData.mode})
        } 
    },[contextData])
    return (
        <>
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
        <PopUp windowSize={data!.size} mode={data!.mode}/>
        </>
    )
}

export default RootPage