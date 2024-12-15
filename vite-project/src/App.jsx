import Navbar from "./Nav"
import { Route, Routes } from "react-router-dom"
import About from "./page/about"
import Contact from "./page/contact"
import Servis from "./page/servis"
import Homepage from "./page/home"

function App() {
  return (
  <div>
      <Navbar/>
      <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/servis" element={<Servis/>} />
          <Route path="/home" element={<Homepage/>} />
      </Routes>
  </div>
  )
}

export default App
