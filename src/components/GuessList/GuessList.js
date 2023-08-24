import Guess from "../Guess"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import { range } from "../../utils"

const GuessList = ({ guesses }) => {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess
          key={num}
          value={guesses[num]?.guess}
        />
      ))}
    </div>
  )
}

export default GuessList
