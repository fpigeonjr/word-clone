import { checkGuess } from "../../game-helpers"

const Guess = ({ value, answer }) => {
  const checkedGuess = checkGuess(value, answer)
  console.log({ checkedGuess })

  return (
    <p className="guess">
      {checkedGuess?.map((guess, index) => (
        <span
          key={index}
          className={`cell ${guess.status}`}
        >
          {guess.letter}
        </span>
      ))}
    </p>
  )
}

export default Guess
