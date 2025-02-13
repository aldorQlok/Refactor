import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Projects from './pages/Projects'
import Cv from './pages/Cv'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Projects />}></Route>
        <Route path="/CV" element={<Cv />}></Route>
      </Routes>
    </ BrowserRouter>
  )
}

export default App
