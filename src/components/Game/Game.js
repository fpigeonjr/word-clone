import React from "react"

import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import { sample } from "../../utils"
import { WORDS } from "../../data"
import Form from "../Form"
import GuessList from "../GuessList"
import WonBanner from "../WonBanner/WonBanner"
import LostBanner from "../LostBanner/LostBanner"

// Pick a random word on every pageload.

const answer = sample(WORDS)
let isGuessCorrect = false
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])
  // running, won, lost
  const [gameStatus, setGameStatus] = React.useState("running")

  const addGuess = (guess) => {
    const newGuess = {
      id: crypto.randomUUID(),
      guess
    }
    const nextGuess = [...guesses, newGuess]
    setGuesses(nextGuess)
    isGuessCorrect = guess === answer
    if (isGuessCorrect) {
      setGameStatus("won")
    } else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost")
    }
  }

  return (
    <>
      <GuessList
        guesses={guesses}
        answer={answer}
      />
      <Form
        addGuess={addGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === "won" && <WonBanner numGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  )
}

export default Game
