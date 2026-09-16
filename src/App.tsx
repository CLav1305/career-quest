import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Start } from './pages/Start'
import { QuizPage } from './pages/QuizPage'
import { Myths } from './pages/Myths'
import { Results } from './pages/Results'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/myths" element={<Myths />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  )
}

export default App
