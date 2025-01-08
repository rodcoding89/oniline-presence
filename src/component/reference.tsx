import { Element } from 'react-scroll';
interface ReferenceProps{

}

const Reference:React.FC<ReferenceProps> = ()=>{
    return (
        <Element className="min-h-[200px] mt-[75px]" name="reference">
            <h1>Reférence</h1>
        </Element>
    )
}

export default Reference