import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

interface HeaderProps{

}

const Header:React.FC<HeaderProps> = ()=>{
    return (
        <header className='w-full h-[65px] fixed top-0 left-0 bottom-0 right-0 bg-[#aaa] z-10 flex items-center'>
            <div className='mx-auto flex justify-between items-center w-[80%]'>
                <Link
                className='cursor-pointer'
                activeClass="active" 
                spy={true} 
                smooth={true} 
                offset={-65} 
                duration={500}
                to={`home`}
                >LOGO</Link>
                <nav className='flex justify-start items-center gap-4'>
                    <Link
                    className='cursor-pointer'
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    offset={-65} 
                    duration={500}
                    to={`home`}>Accueil</Link>
                    <Link 
                    className='cursor-pointer'
                    activeClass="active"
                    spy={true} 
                    smooth={true} 
                    offset={-65} 
                    duration={500} 
                    to={`about`}>A propos</Link>
                    <Link
                    className='cursor-pointer'
                    activeClass="active"
                    spy={true} 
                    smooth={true} 
                    offset={-65} 
                    duration={500} 
                    to={`price`}>Tarif</Link>
                    <Link
                    className='cursor-pointer'
                    activeClass="active"
                    spy={true} 
                    smooth={true} 
                    offset={-65} 
                    duration={500} 
                    to={`services`}>Services</Link>
                    <Link
                    className='cursor-pointer'
                    activeClass="active"
                    spy={true} 
                    smooth={true} 
                    offset={-65} 
                    duration={500} 
                    to={`reference`}>Reférence</Link>
                    <Link
                    className='cursor-pointer'
                    activeClass="active"
                    spy={true} 
                    smooth={true} 
                    offset={-65} 
                    duration={500} 
                    to={`contact`}>Contact</Link>
                </nav>
                <div>LANG</div>
            </div>
        </header>
    )
}

export default Header