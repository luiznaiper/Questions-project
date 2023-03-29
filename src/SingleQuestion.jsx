import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)

  const handleClick = () => {
    setShowInfo(!showInfo)
  }

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={handleClick}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />} 
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestion
