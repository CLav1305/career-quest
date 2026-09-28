import { Routes, Route } from 'react-router-dom'
import { Start } from './pages/StartPage'
import { QuizPage } from './pages/QuizPage'
import { BossBattle } from './pages/BossBattle'
import { Myths } from './pages/MythPage'
import { Results } from './pages/ResultsPage'
import { InfoPage } from './pages/InfoPage'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/info" element={<InfoPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/boss" element={<BossBattle />} />
      <Route path="/myths" element={<Myths />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  )
}

export default App
