import { useContext, useEffect, useState } from "react"
import Icon from "./Icon"
import { AppContext } from "../app-context";

interface PopupProps{

}

const PopUp:React.FC<PopupProps> = ()=>{
    const [hidePopUp,setHidePopUp] = useState<boolean>(false);
    const {contextData,setContextData} = useContext(AppContext)
    const handlePopUp = ()=>{
        setContextData({type:"popupMain",value:false})
    }
    useEffect(()=>{
        if (contextData && contextData.type === "popupMain") {
            setHidePopUp(contextData.value)
        } 
    },[contextData])
    return (
        <div className={`fixed flex justify-end w-[100vw] z-[100] h-[100vh] top-0 right-0 bottom-0 transition-all duration-500 ease-in-out ${hidePopUp ? 'z-[100] bg-[rgba(0,0,0,0.3)]':'z-0 bg-transparent'}`}>
            <div className={`relative w-[50%] bg-fifty min-h-[1500px] overflow-y-auto transition-transform duration-700 ease-in-out ${hidePopUp ? 'translate-x-0' : 'translate-x-[100vw]'}`}>
                <h1 className="text-primary">Reférence</h1>
                <span onClick={()=>{handlePopUp()}} className="absolute right-3 top-3 cursor-pointer w-[35px] h-[35px] rounded-full flex justify-center items-center bg-thirty"><Icon name="bx-x" size="2em" color="var(--color-fifty)"/></span>
            </div>
        </div>
    )
}

export default PopUp