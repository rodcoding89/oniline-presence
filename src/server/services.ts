"use server"

import transporter from "./init-node-mailer";

interface Email{
    from:string;
    name:string;
    budget?:string;
    subject:string;
    content:string;
}

const sendEmail = async(data:Email)=>{
    try {
        const mailOptions = {
            from: {name:data.name,address:data.from},
            to: process.env.FREELANCE_EMAIL,
            subject: data.subject,
            html : `<div><h3>Salut,</h3><p>Je suis ${data.name} et voila mon besoin</p><p>${data.content}</p><p>Budget : ${data.budget}</p></div>`
        };
        const response = await transporter.sendMail(mailOptions);
        if (response) {
            return 'success'
        }
        return 'error'  
    } catch (error) {
        console.error(error);
        return 'error'
    }
}

export default sendEmail;