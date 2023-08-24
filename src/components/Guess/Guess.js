const Guess = ({ guesses }) => {
  return (
    <p className="guess">
      {guesses.length > 0 ? (
        <>
          {guesses.map(({ id, guess }) =>
            guess.split("").map((letter, index) => (
              <span
                key={`${id}-${index}`}
                className="cell"
              >
                {letter}
              </span>
            ))
          )}
        </>
      ) : (
        <>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
        </>
      )}
    </p>
  )
}

export default Guess
