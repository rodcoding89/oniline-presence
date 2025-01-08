import { Element } from 'react-scroll';
interface ServiceProps{

}

const Services:React.FC<ServiceProps> = ()=>{
    return (
        <Element className="min-h-[200px] mt-[75px]" name="services">
            <h1>Services</h1>
        </Element>
    )
}

export default Services