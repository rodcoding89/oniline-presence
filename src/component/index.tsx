
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
    const [size,setSize] = useState<string>('')
    useEffect(()=>{
        if (contextData && contextData.type === "popupMain") {
            setSize(contextData.size)
        } 
    },[contextData])
    return (
        <>
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
        <PopUp windowSize={size}/>
        </>
    )
}

export default RootPage