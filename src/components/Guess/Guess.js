import { range } from "../../utils"
import { checkGuess } from "../../game-helpers"

const Guess = ({ value, answer }) => {
  const checkedGuess = checkGuess(value, answer)
  console.log({ checkedGuess })

  const Cell = ({ letter, status }) => {
    const className = status ? `cell ${status}` : "cell"
    return <span className={className}>{letter}</span>
  }

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={checkedGuess ? checkedGuess[num].letter : undefined}
          status={checkedGuess ? checkedGuess[num].status : undefined}
        />
      ))}
    </p>
  )
}

export default Guess
