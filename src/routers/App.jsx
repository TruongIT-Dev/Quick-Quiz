import { Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import NotObeyRule from "../pages/Rule"
import EndingPage from "../pages/EndPage"
import QuizPage from "../pages/Quiz"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/not-obey-rule" element={<NotObeyRule />} />
        <Route path="/ending" element={<EndingPage />} />
      </Routes>
    </>
  )
}

export default App
