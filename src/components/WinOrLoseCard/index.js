// Write your code here.

import './index.css'

const wonUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {score, isWin, onResetGame} = props

  const imgUrl = isWin ? wonUrl : loseUrl
  const gameStatus = isWin ? 'You Won' : 'You Lose'
  const scoreLabel = isWin ? 'Best Score' : 'Score'
  const resetGame = () => {
    onResetGame()
  }

  return (
    <div className="card">
      <div className="image-section-container">
        <img src={imgUrl} alt="win or lose" className="image" />
      </div>
      <div className="text-score-container">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="score-point">{score}/12</p>
        <button type="button" className="resetBtn" onClick={resetGame}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
