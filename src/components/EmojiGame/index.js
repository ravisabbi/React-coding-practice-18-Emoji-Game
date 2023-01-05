import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {isGameInProgress: true, clickedEmojiList: [], topScore: 0}

  getshuffledEmojisList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  finishTheGameAndSetTopScore = newScore => {
    const {topScore} = this.state
    if (newScore > topScore) {
      this.setState({topScore: newScore, isGameInProgress: false})
    }
    this.setState({isGameInProgress: false})
  }

  onClickEmoji = id => {
    const {emojisList} = this.props

    const {clickedEmojiList} = this.state
    const isAlreadyClicked = clickedEmojiList.includes(id)
    if (isAlreadyClicked) {
      this.finishTheGameAndSetTopScore(clickedEmojiList.length)
    } else {
      if (emojisList.length - 1 === clickedEmojiList.length) {
        this.finishTheGameAndSetTopScore(clickedEmojiList.length)
      }

      this.setState({clickedEmojiList: [...clickedEmojiList, id]})
    }
  }

  renderingEmojiList = () => {
    const shuffledEmojiList = this.getshuffledEmojisList()
    return (
      <ul className="emoji-card-container">
        {shuffledEmojiList.map(eachEmoji => (
          <EmojiCard
            emojiDetails={eachEmoji}
            key={eachEmoji.id}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  onResetGame = () => {
    this.setState({isGameInProgress: true, clickedEmojiList: []})
  }

  renderingScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isWin = emojisList.length === clickedEmojiList.length

    return (
      <WinOrLoseCard
        isWin={isWin}
        score={clickedEmojiList.length}
        onResetGame={this.onResetGame}
      />
    )
  }

  render() {
    const {isGameInProgress, clickedEmojiList, topScore} = this.state
    const currentScore = clickedEmojiList.length

    return (
      <div className="app-container">
        <NavBar
          isGameInProgress={isGameInProgress}
          currentScore={currentScore}
          topScore={topScore}
        />
        <div className="emoji-game-body">
          {isGameInProgress
            ? this.renderingEmojiList()
            : this.renderingScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
