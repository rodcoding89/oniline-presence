import { Element } from 'react-scroll';
interface PriceProps{

}

const Price:React.FC<PriceProps> = ()=>{
    return (
        <Element className="min-h-[200px] mt-[75px]" name="price">
            <h1>Tarif</h1>
        </Element>
    )
}

export default Price