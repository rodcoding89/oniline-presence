
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
    const [data,setData] = useState<{size:string,mode:string,id:number|null}>({size:'w-0',mode:'',id:null})
    useEffect(()=>{
        if (contextData && contextData.state === "show") {
            setData({size:contextData.size,mode:contextData.mode,id:contextData.id})
            console.log("contextData",contextData)
            //setContextData(null)
        }else if(contextData && contextData.state === "hide"){
            setData({size:contextData.size,mode:'',id:null})
        }
    },[contextData])
    return (
        <>
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
        {
            <PopUp windowSize={data.size} mode={data.mode} id={data.id}/>
        }
        </>
    )
}

export default RootPage