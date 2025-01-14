import {Element, Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

interface HomeProps{

}

const Home:React.FC<HomeProps> = ()=>{
    const { t } = useTranslation();
    return (
        <Element className="min-h-[200px] mt-[65px]" name="home">
            <div className='bg-fifty'>
                <div className='w-[85%] mx-auto flex gap-[40px] justify-center items-start py-10'>
                    <img className='w-[40%]' src='/assets/images/home.svg' alt="home" />
                    <div className='w-[60%] mr-[15%]'>
                        <h1 className='text-secondary mb-3 uppercase text-[3em]'>Lorem ipsum dolor sit amet.</h1>
                        <p className='mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laudantium blanditiis natus error.</p>
                        <span className='cursor-pointer px-3 py-3 text-secondary hover:text-fifty hover:bg-secondary bg-fifty border-2 border-solid border-secondary flex items-center justify-center transition-hover hover:border-fifty duration-500 ease-in'>
                            <Link
                                activeClass="active"
                                spy={true} 
                                smooth={true} 
                                offset={-65} 
                                duration={500} 
                                to={`contact`} 
                                >{t("devi")}
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Home