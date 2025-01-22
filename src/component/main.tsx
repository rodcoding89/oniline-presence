import { useState, useContext, useEffect } from "react"
import { AppContext } from "../app-context"
import About from "./about"
import Contact from "./contact"
import Home from "./home"
import Price from "./price"
import Reference from "./reference"
import Services from "./services"

interface MainProps{

}

const Main:React.FC<MainProps> = ()=>{
    const [isPopUp,setIsPopUp] = useState<boolean>(false)
    const {contextData} = useContext(AppContext)
    useEffect(()=>{
        if (contextData && contextData.type === "popupMain") {
        setIsPopUp(contextData.value)
        }
    },[contextData])
    return (
        <main className={`transition-transform duration-500 delay-100 ease-in-out ${isPopUp ? 'translate-x-[-25vw]' : 'translate-x-0'}`}>
            <Home/>
            <About/>
            <Services/>
            <Reference/>
            <Price/>
            <Contact/>
        </main>
    )
}

export default Main