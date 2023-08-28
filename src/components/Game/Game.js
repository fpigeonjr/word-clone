import React from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"
import Form from "../Form"
import GuessList from "../GuessList"
import Banner from "../Banner"

// Pick a random word on every pageload.
const GUESS_LIMIT = 6
const answer = sample(WORDS)
let isGuessCorrect = false
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])

  const addGuess = (guess) => {
    const newGuess = {
      id: crypto.randomUUID(),
      guess
    }
    const nextGuess = [...guesses, newGuess]
    setGuesses(nextGuess)
    isGuessCorrect = guess === answer
  }

  return (
    <>
      <Banner
        isGuessCorrect={isGuessCorrect}
        answer={answer}
        numGuesses={guesses.length}
        GUESS_LIMIT={GUESS_LIMIT}
      />
      <GuessList
        guesses={guesses}
        answer={answer}
      />
      <Form
        isGuessCorrect={isGuessCorrect}
        addGuess={addGuess}
        numGuesses={guesses.length}
        GUESS_LIMIT={GUESS_LIMIT}
      />
    </>
  )
}

export default Game
