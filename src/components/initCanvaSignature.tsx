import React, { useEffect, useRef, useState } from 'react';
import SignaturePad from 'signature_pad';

interface InitCanvaSignatureProps {
    locale:string;
    emit:(data:any)=>void;
}

const InitCanvaSignature:React.FC<InitCanvaSignatureProps> = ({locale,emit}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [signatureLink, setSignatureLink] = useState<string | null>(null)
    const signaturePadRef = useRef<SignaturePad | null>(null);
    useEffect(() => {
        if (canvasRef.current) {
            signaturePadRef.current = new SignaturePad(canvasRef.current);
            
            // Ajuster la netteté sur les écrans HD
            const canvas = canvasRef.current;
            const ratio = Math.max(window.devicePixelRatio || 1, 1);
            canvas.width = canvas.offsetWidth * ratio;
            canvas.height = canvas.offsetHeight * ratio;
            canvas.getContext('2d')?.scale(ratio, ratio);
            
            return () => {
                signaturePadRef.current?.clear();
            };
        }
    }, []);
    const saveSignature = () => {
        console.log("saveSignature")
        const signatureDataUrl = signaturePadRef.current?.toDataURL('image/png');
        if (signatureDataUrl) {
            emit(signatureDataUrl)
            setSignatureLink("contract_signature.png");
        }
    };
    const clearSignature = () => {
        signaturePadRef.current?.clear();
    };
    const clearAll = ()=>{
        signaturePadRef.current?.clear();
        setSignatureLink(null);
        emit(null)
    }
    return (
        <div className="border rounded p-2">
            <h5 className='my-3'>Signature <em>*</em></h5>
            <canvas
                ref={canvasRef}
                className="w-full h-40 bg-gray-100 border"
            />
            <div className='flex justify-between items-center gap-3 w-full'>
                <div className='flex justify-start items-center gap-3 w-full'>
                    <button
                    type="button"
                    onClick={clearSignature}
                    className="mt-2 px-4 py-1 bg-gray-200 rounded"
                    >
                    Effacer
                    </button>
                    <button onClick={saveSignature} className={`mt-2 px-4 py-1 text-white bg-blue-600 rounded cursor-pointer`}>
                        Enregistré
                    </button>
                </div>
                {signatureLink !== null && <p className='flex-1 flex justify-start items-center gap-2'>{signatureLink} <em onClick={clearAll} className='flex justify-center items-center cursor-pointer h-8 w-8 rounded-full bg-primary text-white'>X</em></p>}
            </div>
        </div>
    );
};

export default InitCanvaSignature;