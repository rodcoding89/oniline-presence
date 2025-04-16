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
        const handlePdf = async()=>{
            try {
                // 1. Créer un nouveau PDF
                const pdfDoc = await PDFDocument.create();
                const page = pdfDoc.addPage([600, 400]);
                //const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
          
                // 2. Ajouter les données du formulaire
                //page.drawText(`Nom: ${name}`, { x: 50, y: 350, font: helveticaFont, size: 14 });
                //page.drawText(`Email: ${email}`, { x: 50, y: 320, font: helveticaFont, size: 14 });
          
                // 3. Ajouter la signature (image)
                //const signatureDataUrl = signaturePadRef.current.toDataURL('image/png');
                //const signatureImage = await pdfDoc.embedPng(signatureDataUrl);
                //page.drawImage(signatureImage, { x: 50, y: 250, width: 200, height: 80 });
          
                // 4. Télécharger le PDF
                const pdfBytes = await pdfDoc.save();
                const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = `document-signé-${name}.pdf`;
                link.click();
            } catch (error) {
                console.error('Erreur lors de la génération du PDF:', error);
                alert('Une erreur est survenue.');
            }
        }
    },[])
    return null
}

export default GeneredContract