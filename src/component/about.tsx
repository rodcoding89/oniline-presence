import { Element } from 'react-scroll';
import Icon from './Icon';
import { useTranslation } from 'react-i18next';
import { pathwayData } from '../utils/constant';
interface AboutProps{

}

const About:React.FC<AboutProps> = ()=>{
    const { t } = useTranslation();
    const pathway = pathwayData.map((item:any)=>{
        return {title:t(item.title),country:t(item.country),periode:t(item.periode),description:t(item.description)}
    })
    const stat = [
        {
            title:t("yearExperiences"),
            nb:8,
            icon:"bx-code-alt"
        },
        {
            title:t("realiseProject"),
            nb:10,
            icon:"bx-customize"
        },{
            title:t("satisfiedCustomer"),
            nb:8,
            icon:"bx-line-chart"
        }
    ]
    return (
        <Element className="mt-[110px]" name="about">
            <div className='w-[85%] mx-auto'>
                <h1 className='text-center uppercase text-thirty mb-10'>{t("about")}</h1>
                <div className='flex justify-around items-center gap-8 max-920:flex-col'>
                    <div className="parcours w-1/3 max-920:w-full">
                        <h3 className='text-[#aaa] text-[1.5em] mb-4'>{t("pathway")}</h3>
                        <div className='flex flex-col gap-y-4 ml-4'>
                        {
                            pathway.map((item,index)=>{
                                return (
                                    <div key={index}
                                    >
                                        <h4 className='mb-3 text-secondary'>{item.title}</h4>
                                        <div className='ml-4'>
                                            <p className='flex justify-start items-center gap-2 mb-1'>
                                                <span><strong>{t("periode")}</strong>:</span>{item.periode}</p>
                                            <p className='flex justify-start items-center gap-2 mb-2'>
                                                <span><strong>{t("country")}</strong>:</span>{item.country}</p>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                    <img className='w-1/3 max-920:w-2/3 max-485:w-full' src="/assets/images/about.svg" alt="about" />
                    <div className="experience w-1/3 max-920:w-full">
                        <h3 className='text-[#aaa] text-[1.5em] mb-4'>{t("expiriences")}</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt debitis tenetur magni minima minus consequuntur aut aperiam autem, consequatur in.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt debitis tenetur magni minima minus consequuntur aut aperiam autem, consequatur in.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt debitis tenetur magni minima minus consequuntur aut aperiam autem, consequatur in.</p>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center'>
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
            </div>
        </Element>
    )
}

export default About