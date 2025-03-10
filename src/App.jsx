import { Route, Routes } from "react-router"
import Root from "./components/Root/Root"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Events from "./components/Events/Events"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/events" element={<Events />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
