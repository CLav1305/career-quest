import { Link } from 'react-router-dom'

export function Start() {
  return (
    <>
      <h1>Career Quest</h1>
      <p>
        <Link to="/quiz">START QUIZ</Link>
      </p>
      <p>
        Discover which career character matches you!
      </p>
    </>
  )
}