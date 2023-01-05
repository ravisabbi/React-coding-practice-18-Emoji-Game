// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {emojiUrl, emojiName, id} = emojiDetails
  const clickEmoji = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-btn" onClick={clickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
