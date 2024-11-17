import { Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import Quiz from "../pages/Quiz"
import NotObeyRule from "../pages/Rule"
import EndingPage from "../pages/EndPage"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/not-obey-rule" element={<NotObeyRule />} />
        <Route path="/ending" element={<EndingPage />} />
      </Routes>
    </>
  )
}

export default App
