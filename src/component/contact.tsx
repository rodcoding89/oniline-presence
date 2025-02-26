import { Element } from 'react-scroll';
import Icon from './Icon';
import { useForm } from 'react-hook-form';
interface ContactProps{

}

const Contact:React.FC<ContactProps> = ()=>{
    const {
        register,
        handleSubmit,
        formState: { errors,isValid },reset
      } = useForm({ mode: 'onChange'});
    const sendMessage = (data:any)=>{
        console.log("data",data)
        reset()
    }
    console.log(errors)
    return (
        <Element className="min-h-[200px] mt-[75px]" name="contact">
            <div className="w-[85%] mx-auto">
                <div className="section-heading  text-center"> 
                    <h2 className='uppercase text-thirty'>Nous contacter</h2> 
                </div>
                <div className="w-full flex justify-center items-start gap-10 max-792:flex-col">
                    <div className="contact-info w-1/3 max-792:w-full">
                        <div className="contact-info-box">
                            <div className="contact-icon flex justify-center items-center">  <Icon name='bxl-whatsapp' size='1.3em' color='var(--color-primary)'/>  
                            </div>
                            <div className="contact-desc">
                              <h5 className='text-thirty'>Via whatsapp</h5>
                              <a href="https://wa.me/+33751025598" className='hover:text-secondary'>WhatsApp</a>
                              </div>
                          </div>
                        <div className="contact-info-box">
                            <div className="contact-icon flex justify-center items-center">  <Icon name='bx-phone' size='1.3em' color='var(--color-primary)'/>
                            </div>
                            <div className="contact-desc">
                                <h5 className='text-thirty'>Par téléphone</h5>
                                <a href="tel:+33751025598" className='hover:text-secondary'>+33 7 51 02 55 98</a>
                            </div>
                        </div>
                        <div className="contact-info-box">
                            <div className="contact-icon flex justify-center items-center"><Icon name='bx-envelope' size='1.3em' color='var(--color-primary)'/>  </div>
                            <div className="contact-desc">
                              <h5 className='text-thirty'>Par mail</h5>
                              <a href="mailto:rodriguekwayep.freelance@hotmail.com" className='hover:text-secondary'>rodriguekwayep.freelance@hotmail.com</a>
                            </div>
                        </div>
                        <div className="contact-info-box">
                            <div className="contact-icon flex justify-center items-center"><Icon name='bx-time' size='1.3em' color='var(--color-primary)'/>  </div>
                            <div className="contact-desc">
                              <h5 className='text-thirty'>Horaire</h5>
                              <ul>
                                <li>Lundi - Vendredi</li>
                                <li>09H00 - 17H00</li>
                              </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/3 max-792:w-full">
                        <div className="contact-form">
                            <form onSubmit={handleSubmit((data) => sendMessage(data))}>
                                <div className='w-full flex justify-start items-start gap-5 max-485:flex-col max-485:gap-0'>
                                    <div className="w-1/2 max-485:w-full ">
                                        <div className="form-group">
                                            <input className={`form-control focus:outline-[#aaa] ${errors.name ? '!border-red-500 focus:outline-red-500':'focus:outline-[#aaa]'}`}  placeholder="Name" type="text" {...register('name', { required: true })} aria-invalid={errors.name ? "true" : "false"}/>
                                            {errors.name?.type === 'required' && <div className='text-[.8em] text-red-500'>{'Veuillez saisir votre nom complet'}</div>}
                                        </div>
                                    </div>
                                    
                                    <div className="w-1/2 max-485:w-full">
                                        <div className="form-group">
                                            <input className={`form-control ${errors.email ? '!border-red-500 focus:outline-red-500':'focus:outline-[#aaa]'}`}  placeholder="Email" type="text" {...register('email', { required: true,pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i })} aria-invalid={errors.email ? "true" : "false"}/>
                                            {errors.email?.type == "required" && <div className='text-[.8em] text-red-500'>{'L\'email est obligatoire'}</div>}
                                            {errors.email?.type === "pattern" && <div className='text-[.8em] text-red-500'>{'Veuillez saisir un email valide'}</div>}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="w-full">
                                    <div className=" form-group">
                                        <input className={`form-control focus:outline-[#aaa] ${errors.subject ? '!border-red-500 focus:outline-red-500':'focus:outline-[#aaa]'}`} placeholder="Subject" type="text" {...register('subject', { required: true })} aria-invalid={errors.subject ? "true" : "false"}/>
                                        {errors.subject?.type === "required" && <div className='text-[.8em] text-red-500'>{'Veuillez indiquer l\'objet du message'}</div>}
                                    </div>
                                </div>
                                
                                <div className="w-full">
                                    <div className="form-group">
                                        <textarea className={`form-control focus:outline-[#aaa] ${errors.message ? '!border-red-500 focus:outline-red-500':'focus:outline-[#aaa]'}`} rows={18} placeholder="Your Message" {...register('message', { required: true })} aria-invalid={errors.message ? "true" : "false"}></textarea>
                                        {errors.message?.type === "required" && <div className='text-[.8em] text-red-500'>{'Veuillez saisir votre message'}</div>}
                                    </div>
                                </div>
                                <div className="w-full form-group text-right m-b-0">
                                    <input value="send message" name="submit" className={`btn btn-primary text-fifty ${isValid ? 'cursor-pointer opacity-100' : 'cursor-not-allowed opacity-45'}`} type="submit" disabled={!isValid}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Contact