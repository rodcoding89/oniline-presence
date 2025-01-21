import {Element, Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

interface HomeProps{

}

const Home:React.FC<HomeProps> = ()=>{
    const { t } = useTranslation();
    return (
        <Element className="min-h-[200px] mt-[65px]" name="home">
            <div className='w-full bg-secondary'>
                <div className='w-full flex gap-[40px] justify-center items-start'>
                    <div className='flex flex-col justify-center items-center self-stretch ml-[calc(15%/2)]'>
                        <h1 className='text-fifty mb-3 uppercase text-[3em]'>Lorem ipsum dolor sit amet.</h1>
                        <p className='mb-3 text-fifty'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laudantium blanditiis natus error.</p>
                        <div className='flex justify-start items-center gap-5 w-full mt-3 ml-5'>
                            <span className='cursor-pointer px-6 py-3 text-secondary bg-fifty rounded-2xl hover:outline-fifty hover:outline hover:outline-1 hover:bg-secondary hover:text-fifty flex items-center justify-center transition-hover duration-500 ease-in'>
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
                            <span className='cursor-pointer px-6 py-3 text-fifty bg-transparent border-[1px] border-solid border-fifty rounded-2xl hover:text-secondary hover:bg-fifty hover:border-fifty flex items-center justify-center transition-hover duration-500 ease-in'>
                                <Link
                                    activeClass="active"
                                    spy={true} 
                                    smooth={true} 
                                    offset={-65} 
                                    duration={500} 
                                    to={`services`} 
                                    >Nos services
                                </Link>
                            </span>
                        </div>
                    </div>
                    <img className='w-1/2 rounded-tl-[100px] rounded-bl-[100px] h-[550px]' src='/assets/images/home.jpg' alt="home" />
                </div>
            </div>
        </Element>
    )
}

export default Home