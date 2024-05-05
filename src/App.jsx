//npm modules
import { Route, Routes } from 'react-router-dom'

//pages
import Starships from './pages/Starships/Starships'

//components
import NavBar from './components/NavBar/NavBar'

//css
import './App.css'

function App() {


  return (
    <>
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Starships />} />
      </Routes>
    </div>
    </>
  )
}

export default App
