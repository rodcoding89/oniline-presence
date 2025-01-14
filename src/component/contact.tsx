import { Element } from 'react-scroll';
import Icon from './Icon';
interface ContactProps{

}

const Contact:React.FC<ContactProps> = ()=>{
    return (
        <Element className="min-h-[200px] mt-[75px]" name="contact">
            <div className="w-[85%] mx-auto">
                <div className="section-heading  text-center"> 
                    <h2 className='uppercase text-thirty'>Nous contacter</h2> 
                </div>
                <div className="w-full flex justify-center items-start gap-10">
                    <div className="contact-info w-1/3">
                        <div className="contact-info-box">
                            <div className="contact-icon">  <Icon name='bx-home' size='16px' color='var(--color-primary)'/>  
                            </div>
                            <div className="contact-desc">
                              <h5 className='text-thirty'>Address</h5>
                              <p>123, Street Name, City, Post Code</p>
                              </div>
                          </div>
                      
                          <div className="contact-info-box">
                            <div className="contact-icon"><Icon name='bx-envelope' size='16px' color='var(--color-primary)'/>  </div>
                            <div className="contact-desc">
                              <h5 className='text-thirty'>Email</h5>
                              <p>yourmail@mail.com</p>
                            </div>
                        </div>
                      
                        <div className="contact-info-box">
                            <div className="contact-icon">  <Icon name='bx-phone' size='16px' color='var(--color-primary)'/>
                            </div>
                            <div className="contact-desc">
                              <h5 className='text-thirty'>Call US</h5>
                              <p>+00 123-456-789</p>
                            </div>
                        </div>
                    </div>
                  
              
                    <div className="w-2/3">
                        <div className="contact-form">
                            <form action="contact.php" method="post">
                            
                            <div className='w-full flex justify-start items-start gap-5'>
                                <div className="w-1/2">
                                    <div className="form-group">
                                    <input className="form-control focus:outline-[#aaa]" name="name"  placeholder="Name" type="text"/>
                                    </div>
                                </div>
                                
                                <div className="w-1/2">
                                    <div className="form-group">
                                    <input className="form-control focus:outline-[#aaa]" name="email"  placeholder="Email" type="email"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="w-full">
                                <div className=" form-group">
                                <input className="form-control focus:outline-[#aaa]" name="subject" placeholder="Subject" type="text"/>
                                </div>
                                </div>
                            
                            <div className="w-full">
                                <div className="form-group">
                                <textarea className="form-control focus:outline-[#aaa]" name="message" rows={18} placeholder="Your Message"></textarea>
                                </div>
                            </div>
                            <div className="w-full form-group text-right m-b-0">
                                <input value="send message" name="submit" className="btn btn-primary" type="submit"/>
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