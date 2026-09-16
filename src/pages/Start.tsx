import { useNavigate } from 'react-router-dom'

export function Start() {
  const navigate = useNavigate()

  return (
    <>
      <h1>Career Quest</h1>
      <p>
        <button className="rounded-full ..." onClick={() => navigate('/quiz')}>
          START QUIZ
        </button>
      </p>
      <p>
        Discover your career character!
      </p>
    </>
  )
}