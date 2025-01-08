import { Element } from 'react-scroll';
interface AboutProps{

}

const About:React.FC<AboutProps> = ()=>{
    return (
        <Element className="min-h-[200px] mt-[75px]" name="about">
        <h1>A propos</h1>
        </Element>
    )
}

export default About