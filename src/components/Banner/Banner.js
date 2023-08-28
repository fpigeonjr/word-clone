const Banner = ({ isGuessCorrect, answer, numGuesses, GUESS_LIMIT }) => {
  if (isGuessCorrect) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in <strong>{numGuesses} guesses</strong>.
        </p>
      </div>
    )
  } else if (numGuesses >= GUESS_LIMIT) {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    )
  } else {
    return null
  }
}

export default Banner
