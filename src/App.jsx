import { Route, Routes } from "react-router-dom"

import Home from './components/pages/Home';
import QuizPage from './components/pages/Quiz';
import NotObeyRule from "./components/pages/Rule";
import EndingPage from './components/pages/EndPage';


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
