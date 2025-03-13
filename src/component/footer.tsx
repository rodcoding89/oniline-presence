import { Link } from 'react-router-dom';
import Icon from './Icon';
interface FooterProps{

}

const Footer:React.FC<FooterProps> = ()=>{
    return (
        <footer className='bg-primary w-full flex justify-start items-center gap-8 flex-col py-10 mt-10 px-[8%] '>
            <div className='flex justify-center items-start w-full gap-x-[13vw] gap-y-4 max-520:flex-col max-520:justify-center max-640:items-center max-520:w-full'>
                <div className='text-fifty w-1/2'><img src="assets/images/logo.webp" alt="logo" className='w-auto h-[100px] rounded-full'/></div>
                <div className='flex justify-start items-start w-1/2'>
                    <div className='flex justify-start items-start flex-col gap-5'>
                        <h4 className='text-fifty uppercase font-semibold'>Partager sur les reseaux sociaux</h4>
                        <div className='flex justify-center items-center gap-6 max-420:gap-4'>
                            <Link to={'/fr/legal-notice'} className='flex justify-center items-center socialMediaIcon'><Icon name='bx bxl-facebook-circle pt-1' size='1.5em' color='var(--color-fifty)'/></Link>
                            <Link to={'/fr/legal-notice'} className='flex justify-center items-center socialMediaIcon'><Icon name='bx bxl-twitter pt-1' size='1.5em' color='var(--color-fifty)'/></Link>
                            <Link to={'/fr/legal-notice'} className='flex justify-center items-center socialMediaIcon'><Icon name='bx bxl-instagram pt-1' size='1.5em' color='var(--color-fifty)'/></Link>
                            <Link to={'/fr/legal-notice'} className='flex justify-center items-center socialMediaIcon'><Icon name='bx bxl-linkedin pt-1' size='1.5em' color='var(--color-fifty)'/></Link>
                            <span className='flex justify-center items-center socialMediaIcon'><Icon name='bx bx-share-alt pt-1' size='1.5em' color='var(--color-fifty)'/></span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='border-secondary w-full'/>
            <div className='flex justify-center items-start gap-x-[13vw] gap-y-4 w-full max-640:flex-col'>
                <div className='w-1/2 max-640:w-full'>
                    <h4 className='text-fifty uppercase font-semibold mb-3'>Développeur Web/Mobile Freelance</h4>
                    <p className='text-[#aaa]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae distinctio quas obcaecati aliquid, possimus corrupti provident a reiciendis voluptatum voluptas perspiciatis voluptates minima expedita, minus magnam, eligendi ad placeat quibusdam.</p>
                </div>
                <div className='w-1/2 flex justify-start items-start max-640:w-full max-640:justify-start max-640:items-start'>
                    <div className="flex justify-start items-start gap-x-5 gap-y-4 flex-wrap">
                        <div className="flex justify-start items-start gap-2">
                            <Icon name='bxl-whatsapp' size='1.3em' color='var(--color-fifty)'/>
                            <div className="">
                                <h5 className='text-fifty uppercase font-semibold'>Via whatsapp</h5>
                                <a href="https://wa.me/+33751025598" className='hover:text-link text-fifty text-[13px]'>WhatsApp</a>
                            </div>
                        </div>
                        <div className="flex justify-start items-start gap-2">
                            <Icon name='bx-phone' size='1.3em' color='var(--color-fifty)'/>
                            <div className="">
                                <h5 className='text-fifty uppercase font-semibold'>Par téléphone</h5>
                                <a href="tel:+33751025598" className='hover:text-link text-fifty text-[13px]'>+33 7 51 02 55 98</a>
                            </div>
                        </div>
                        <div className="flex justify-start items-start gap-2">
                            <Icon name='bx-time' size='1.3em' color='var(--color-fifty)'/>
                            <div className="w-full">
                                <h5 className='text-fifty uppercase font-semibold'>Horaire</h5>
                                <ul>
                                    <li className='text-fifty text-[13px]'>Lundi - Vendredi</li>
                                    <li className='text-fifty text-[13px]'>09H00 - 17H00</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-start items-start gap-2">
                            <Icon name='bx-envelope' size='1.3em' color='var(--color-fifty)'/>
                            <div className="w-full">
                                <h5 className='text-fifty uppercase font-semibold'>Par mail</h5>
                                <a href="mailto:rodriguekwayep.freelance@hotmail.com" className='hover:text-link text-fifty text-[13px]'>rodriguekwayep.freelance@hotmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center gap-x-[13vw] gap-y-4 max-520:flex-col max-520:w-full'>
                <Link to={'/fr/legal-notice'} className='text-fifty underline hover:text-link w-1/2 text-left'>Mentions légales</Link>
                <p className='text-fifty w-1/2 text-left max-520:text-center'>© Copyright {new Date().getFullYear()} Tous droits réservés.</p>
            </div>
        </footer>
    )
}

export default Footer