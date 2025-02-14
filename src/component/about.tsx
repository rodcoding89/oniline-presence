import { Element } from 'react-scroll';
import Icon from './Icon';
interface AboutProps{

}
const stat = [
    {
        title:"Années d'esperience",
        nb:8,
        icon:"bx-code-alt"
    },
    {
        title:"Projet web réalisés",
        nb:10,
        icon:"bx-customize"
    },{
        title:"Client Satisfait",
        nb:8,
        icon:"bx-line-chart"
    }
]
const About:React.FC<AboutProps> = ()=>{
    return (
        <Element className="min-h-[200px] mt-[75px]" name="about">
            <div className='w-[85%] mx-auto'>
                <h1 className='text-center uppercase text-thirty mb-10'>A propos</h1>
                <div className='flex justify-around items-center gap-8 max-920:flex-col'>
                    <div className="parcours w-1/3 max-920:w-full">
                        <h3 className='text-[#aaa] text-[1.5em] mb-4'>Parcours</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt debitis tenetur magni minima minus consequuntur aut aperiam autem, consequatur in.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt debitis tenetur magni minima minus consequuntur aut aperiam autem, consequatur in.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt debitis tenetur magni minima minus consequuntur aut aperiam autem, consequatur in.</p>
                    </div>
                    <img className='w-1/3 max-920:w-2/3 max-485:w-full' src="/assets/images/about.svg" alt="about" />
                    <div className="experience w-1/3 max-920:w-full">
                        <h3 className='text-[#aaa] text-[1.5em] mb-4'>Expériences</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt debitis tenetur magni minima minus consequuntur aut aperiam autem, consequatur in.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt debitis tenetur magni minima minus consequuntur aut aperiam autem, consequatur in.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt debitis tenetur magni minima minus consequuntur aut aperiam autem, consequatur in.</p>
                    </div>
                </div>
                <div className="stat flex justify-start items-center flex-wrap gap-5 mt-4 max-485:justify-center">
                    {
                        stat.map((item,index)=>{
                            return (
                                <div key={index} className='flex justify-start items-start gap-2'>
                                    <Icon name={item.icon+' mt-5'} size='3em' color='var(--color-primary)'/>
                                    <div className='flex flex-col gap-1'>
                                        <em className='not-italic text-[4em] relative before:w-full before:h-[3px] before:bg-thirty before:absolute before:left-[5px] before:bottom-0 w-fit'>{item.nb}</em>
                                        <span className='ml-1 mt-1'>{item.title}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Element>
    )
}

export default About