import { useContext, useEffect, useState } from "react"
import i18n from '../i18n';
import { AppContext } from "../app-context";
import CloseButton from "./close-btn";
import { useTranslation } from 'react-i18next';
interface PopupProps{
    windowSize:string
}

const PopUp:React.FC<PopupProps> = ({windowSize})=>{
    const { t } = useTranslation();
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
        <div className={`fixed flex justify-end w-[100vw] h-[100vh] top-0 right-0 bottom-0 transition-all duration-500 ease-out ${hidePopUp ? 'z-[100] bg-[rgba(0,0,0,0.3)]':'z-[-1] bg-transparent'}`}>
            <div className={`relative ${windowSize} bg-fifty min-h-[1500px] overflow-y-auto transition-transform duration-700 ease-out ${hidePopUp ? 'translate-x-0' : 'translate-x-[100vw]'}`}>
                <h1 className="text-primary">Reférence</h1>
                <span className="absolute right-3 top-3 cursor-pointer"><CloseButton size="large" onClose={handlePopUp}/></span>
            </div>
        </div>
    )
}

export default PopUp