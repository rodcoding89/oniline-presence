import { Element } from 'react-scroll';
interface ContactProps{

}

const Contact:React.FC<ContactProps> = ()=>{
    return (
        <Element className="min-h-[200px] mt-[75px]" name="contact">
            <h1>Contact</h1>
        </Element>
    )
}

export default Contact