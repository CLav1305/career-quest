import { Routes, Route } from 'react-router-dom'
import { Start } from './pages/Start'
import { QuizPage } from './pages/QuizPage'
import { BossBattle } from './pages/BossBattle'
import { Myths } from './pages/Myths'
import { Results } from './pages/Results'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/boss" element={<BossBattle />} />
      <Route path="/myths" element={<Myths />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  )
}

export default App
