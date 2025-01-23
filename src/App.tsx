import { AppProvider } from './app-context';
import './App.css'
import RootPage from './component';


function App() {
  return (
    <>
    <AppProvider>
      <RootPage/>
    </AppProvider>
    </>
  )
}

export default App
