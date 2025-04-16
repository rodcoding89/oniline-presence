"use client"
import { AppContext } from "@/app/context/app-context";
import { useTranslationContext } from "@/hooks/app-hook";

import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import InitCanvaSignature from "./initCanvaSignature";

interface ContractProps{
    locale:string
}

const Contrat:React.FC<ContractProps> = ({locale})=>{
    const t:any = useTranslationContext();
    const [isPopUp,setIsPopUp] = useState<boolean>(false)
    const {contextData} = useContext(AppContext)
    const [signingContent, setSigningContent] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        formState: { errors,isValid },
    } = useForm();

    const onSubmit = (data:any) => {
        console.log("Contract Data:", data);
        // Generate PDF or send data to backend
    };
    useEffect(()=>{
        if (contextData && (contextData.state === "hide" || contextData.state === "show")) {
            console.log("inside contextData",contextData)
            setIsPopUp(contextData.value)
        }
    },[contextData])
    const handleSignatureChange = (data:any)=>{
        console.log("data",data)
        setSigningContent(data)
    }
    const checkValidation = ()=>{
        return isValid && signingContent !== null
    }
    return (
        <main className={`transition-transform duration-700 delay-300 ease-in-out ${isPopUp ? 'translate-x-[-25vw]' : 'translate-x-0'} w-[85%] mt-[110px] mx-auto`}>
            <h1 className="text-center text-thirty uppercase">{t["contrat"]}</h1>
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold mb-6">Freelance Web Development Contract</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* === Client Information === */}
                    <section className="border-b pb-6">
                    <h2 className="text-xl font-semibold mb-4">Client Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Full Name / Business Name*
                        </label>
                        <input
                            {...register("clientName", { required: "This field is required" })}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                        {errors.clientName && (
                            <p className="text-red-500 text-sm mt-1">{errors.clientName.message as string}</p>
                        )}
                        </div>

                        <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Postal Address*
                        </label>
                        <input
                            {...register("clientAddress", { required: "This field is required" })}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                        {errors.clientAddress && (
                            <p className="text-red-500 text-sm mt-1">{errors.clientAddress.message as string}</p>
                        )}
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">
                        Billing Address (if different)
                        </label>
                        <input
                        {...register("clientBillingAddress")}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                        <label className="block text-sm font-medium text-gray-700">Email*</label>
                        <input
                            type="email"
                            {...register("clientEmail", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email format",
                            },
                            })}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                        {errors.clientEmail && (
                            <p className="text-red-500 text-sm mt-1">{errors.clientEmail.message as string}</p>
                        )}
                        </div>

                        <div>
                        <label className="block text-sm font-medium text-gray-700">Phone*</label>
                        <input
                            type="tel"
                            {...register("clientPhone", { required: "Phone is required" })}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                        {errors.clientPhone && (
                            <p className="text-red-500 text-sm mt-1">{errors.clientPhone.message as string}</p>
                        )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                        <label className="block text-sm font-medium text-gray-700">
                            SIRET/SIREN (if applicable)
                        </label>
                        <input
                            {...register("clientSIRET")}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                        </div>

                        <div>
                        <label className="block text-sm font-medium text-gray-700">
                            VAT Number (EU)
                        </label>
                        <input
                            {...register("clientVAT")}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                        </div>
                    </div>
                    </section>

                    {/* === Freelancer Information === */}
                    <section className="border-b pb-6">
                    <h2 className="text-xl font-semibold mb-4">Freelancer Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name*</label>
                        <input
                            {...register("freelancerName", { required: "This field is required" })}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2" value={'KWAYEP KOUENGA Rodrigue'}
                        />
                        </div>

                        <div>
                        <label className="block text-sm font-medium text-gray-700">Address*</label>
                        <input
                            {...register("freelancerAddress", { required: "This field is required" })}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2" value={'123 rue Saint-Sébastien, Poissy 78300, France'}
                        />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                        <label className="block text-sm font-medium text-gray-700">SIRET*</label>
                        <input
                            {...register("freelancerSIRET", { required: "This field is required" })}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2" value={'SIRET'}
                        />
                        </div>

                        <div>
                        <label className="block text-sm font-medium text-gray-700">
                            VAT Number (if applicable)
                        </label>
                        <input
                            {...register("freelancerVAT")}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                        </div>
                    </div>
                    </section>

                    {/* === Project Details === */}
                    <section className="border-b pb-6">
                    <h2 className="text-xl font-semibold mb-4">Project Details</h2>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Project Title*</label>
                        <input
                        {...register("projectTitle", { required: "This field is required" })}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                        {errors.projectTitle && (
                        <p className="text-red-500 text-sm mt-1">{errors.projectTitle.message as string}</p>
                        )}
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Description*</label>
                        <textarea
                        {...register("projectDescription", { required: "This field is required" })}
                        rows={4}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                        {errors.projectDescription && (
                        <p className="text-red-500 text-sm mt-1">{errors.projectDescription.message as string}</p>
                        )}
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Deliverables*</label>
                        <textarea
                        {...register("deliverables", { required: "This field is required" })}
                        rows={3}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                        {errors.deliverables && (
                        <p className="text-red-500 text-sm mt-1">{errors.deliverables.message as string}</p>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                        <label className="block text-sm font-medium text-gray-700">Start Date*</label>
                        <input
                            type="date"
                            {...register("startDate", { required: "This field is required" })}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                        {errors.startDate && (
                            <p className="text-red-500 text-sm mt-1">{errors.startDate.message as string}</p>
                        )}
                        </div>

                        <div>
                        <label className="block text-sm font-medium text-gray-700">
                            End Date (or estimated)
                        </label>
                        <input
                            type="date"
                            {...register("endDate")}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                        </div>
                    </div>
                    </section>

                    {/* === Payment Terms === */}
                    <section className="border-b pb-6">
                    <h2 className="text-xl font-semibold mb-4">Payment Terms</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                        <label className="block text-sm font-medium text-gray-700">Total Price (€)*</label>
                        <input
                            type="number"
                            {...register("totalPrice", {
                            required: "Price is required",
                            min: { value: 0, message: "Price must be positive" },
                            })}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                        {errors.totalPrice && (
                            <p className="text-red-500 text-sm mt-1">{errors.totalPrice.message as string}</p>
                        )}
                        </div>

                        <div>
                        <label className="block text-sm font-medium text-gray-700">Payment Method*</label>
                        <select
                            {...register("paymentMethod", { required: "This field is required" })}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        >
                            <option value="">Select...</option>
                            <option value="Bank Transfer">Bank Transfer</option>
                            <option value="PayPal">PayPal</option>
                            <option value="Check">Check</option>
                        </select>
                        {errors.paymentMethod && (
                            <p className="text-red-500 text-sm mt-1">{errors.paymentMethod.message as string}</p>
                        )}
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Payment Schedule*</label>
                        <textarea
                        {...register("paymentSchedule", { required: "This field is required" })}
                        rows={2}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        placeholder="Example: 50% upfront, 50% on delivery"
                        />
                        {errors.paymentSchedule && (
                        <p className="text-red-500 text-sm mt-1">{errors.paymentSchedule.message as string}</p>
                        )}
                    </div>
                    </section>

                    {/* === Legal Clauses === */}
                    <section className="pb-6">
                    <h2 className="text-xl font-semibold mb-4">Legal Clauses</h2>

                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                        <input
                            type="checkbox"
                            {...register("confidentiality")}
                            defaultChecked
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                        </div>
                        <div className="ml-3 text-sm">
                        <label className="font-medium text-gray-700">Confidentiality Agreement</label>
                        <p className="text-gray-500">
                            The freelancer agrees not to disclose any confidential information.
                        </p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">
                        Termination Terms*
                        </label>
                        <textarea
                        {...register("terminationTerms", { required: "This field is required" })}
                        rows={3}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        placeholder="Example: Either party may terminate with 14 days' notice."
                        />
                        {errors.terminationTerms && (
                        <p className="text-red-500 text-sm mt-1">{errors.terminationTerms.message as string}</p>
                        )}
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Governing Law*</label>
                        <select
                        {...register("governingLaw", { required: "This field is required" })}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        >
                        <option value="French Law">French Law</option>
                        <option value="EU Law">EU Law</option>
                        <option value="Other">Other</option>
                        </select>
                    </div>
                    </section>
                    <section className="signing">
                        <InitCanvaSignature locale={locale} emit={handleSignatureChange}/>
                    </section>
                    {/* Submit Button */}
                    <div className="flex justify-end">
                    <button
                        type="submit"
                        className={`px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 ${checkValidation() ? 'opacity-1' : 'opacity-50'}`} disabled={!checkValidation()}
                    >
                        Generate Contract
                    </button>
                    </div>
                </form>
            </div>
        </main>
    )
    
}

export default Contrat
