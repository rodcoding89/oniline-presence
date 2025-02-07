import { Element } from 'react-scroll';
import Icon from './Icon';
import { useContext } from 'react';
import { AppContext } from '../app-context';
import { services } from '../utils/constant';
interface ServiceProps{

}

const Services:React.FC<ServiceProps> = ()=>{
    const {setContextData} = useContext(AppContext)
    const handleShowMore = (id:number)=>{
        setContextData({state:"show",value:true,size:"w-[70%]",mode:'service',id:id})
    }
    return (
        <Element className="mt-[75px]" name="services">
            <div className='bg-fifty h-[500px]'>
                <h1 className='mb-10 mx-[calc(15%/2)] pt-[20px] uppercase'>Services</h1>
                <p className='mx-[calc(15%/2)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore sunt tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore sunt tenetur.</p>
            </div>
            <div className='w-[85%] mx-auto mt-[-275px]'>
                <div className='flex justify-center items-start gap-y-8 flex-wrap'>
                    {
                        services.map((item:any)=>{
                            return (
                                <div key={item.id} className='w-1/3 px-[30px] border-b-4 border-solid py-[40px] bg-white boxShadow transition-hover duration-[.4s] ease-in border-white hover:border-b-secondary'>
                                    <div className='flex justify-start items-center gap-2 mb-3'><span className='w-16 h-16 rounded-full bg-secondary flex justify-center items-center'><Icon name={item.service.icon} color="#fff" size="1.6em"/></span><h3 className='uppercase text-[1.1em] flex-1'>{item.service.serviceName}</h3></div>
                                    <p className='mb-3'>{item.service.shortDescript}</p>
                                    <div onClick={()=>handleShowMore(item.id)} className='border-2 border-solid border-secondary py-2 px-5 text-center cursor-pointer transition-hover duration-[.5s] ease-in hover:bg-secondary hover:text-white'>En savoir plus</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Element>
    )
}

export default Services