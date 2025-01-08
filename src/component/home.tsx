import { Element } from 'react-scroll';
interface HomeProps{

}

const Home:React.FC<HomeProps> = ()=>{
    return (
        <Element className="min-h-[200px] mt-[75px]" name="home">
            <h1>Home</h1>
        </Element>
    )
}

export default Home