import {Element, Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

interface HomeProps{

}

const Home:React.FC<HomeProps> = ()=>{
    const { t } = useTranslation();
    return (
        <Element className="min-h-[200px] mt-[65px]" name="home">
            <div className='w-full flex gap-[40px] justify-center items-start relative'>
                <div className='w-full bg-[rgba(0,0,0,.3)] absolute pl-[calc(15%/2)] z-[2px] h-full pr-[40%] left-0 top-0'>
                    <div className='flex flex-col justify-start pt-[200px] items-center h-full'>
                        <h1 className='text-secondary mb-3 uppercase text-[3em]'>Lorem ipsum dolor sit amet.</h1>
                        <p className='mb-3 text-fifty'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laudantium blanditiis natus error.</p>
                        <div className='flex justify-start items-center gap-5 w-full mt-3 ml-5'>
                            <span className='cursor-pointer px-6 py-3 text-fifty bg-secondary rounded-2xl hover:text-secondary hover:bg-fifty flex items-center justify-center transition-hover duration-500 ease-in'>
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
                            <span className='cursor-pointer px-6 py-3 text-secondary bg-fifty rounded-2xl hover:text-fifty hover:bg-secondary flex items-center justify-center transition-hover duration-500 ease-in'>
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
                </div>
                <img className='w-full aspect-video' src='/assets/images/home.jpg' alt="home" />
            </div>
        </Element>
    )
}

export default Home