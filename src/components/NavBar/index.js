// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, currentScore, isGameInProgress} = props

  return (
    <nav className="navbar">
      <div className="name-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="logo-name">Emoji Game</h1>
      </div>

      {isGameInProgress && (
        <div className="score-container">
          <p className="score">Score: {currentScore}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
