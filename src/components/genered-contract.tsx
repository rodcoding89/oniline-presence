"use client"

import { useTranslationContext } from "@/hooks/app-hook";
import { PDFDocument } from "pdf-lib";
import { useEffect } from "react";

interface GeneredContractProps{
    locale:string
}

const GeneredContract:React.FC<GeneredContractProps> = ({locale})=>{
    const t:any = useTranslationContext();
    useEffect(()=>{
        
    },[])
    return null
}

export default GeneredContract