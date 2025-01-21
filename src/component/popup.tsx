import { useState } from "react"
import Icon from "./Icon"

interface PopupProps{

}

const PopUp:React.FC<PopupProps> = ()=>{
    const [hidePopUp,setHidePopUp] = useState<boolean>(true);
    return (
        <div className={`fixed w-[50%] h-full top-0 right-0 bottom-0 bg-fifty transition-transform duration-500 ease-in-out ${hidePopUp ? 'translate-x-0':'translate-x-[50vw]'}`}>
            <div className="relative mt-[65px] min-h-[1500px] overflow-y-auto">
                <h1 className="text-primary">Reférence</h1>
                <span onClick={()=>{setHidePopUp(false)}} className="absolute right-3 top-3 cursor-pointer w-[35px] h-[35px] rounded-full flex justify-center items-center bg-thirty"><Icon name="bx-x" size="2em" color="var(--color-fifty)"/></span>
            </div>
        </div>
    )
}

export default PopUp