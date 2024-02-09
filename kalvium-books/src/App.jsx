import './App.css'
import HomePage from './components/HomePage'
import Register from './components/Register';
import {Routes,Route} from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
    {/* <HomePage/> */}
    {/* <Register/> */}
  <Routes>
    <Route path="/CA-5-kalviumBooks_Pawan" element={<HomePage/>}></Route>
    <Route path="/CA-5-kalviumBooks_Pawan/register" element={<Register />}></Route>
  </Routes>
    </>
  )
}

export default App
