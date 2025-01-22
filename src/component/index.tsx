
import { AppProvider } from "../app-context"
import Footer from "./footer"
import Header from "./header"
import Main from "./main"
import PopUp from "./popup"

interface RootPageProps{

}

const RootPage:React.FC<RootPageProps> = ()=>{
    return (
        <AppProvider>
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
            <PopUp/>
        </AppProvider>
    )
}

export default RootPage