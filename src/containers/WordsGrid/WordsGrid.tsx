import * as React from 'react'
import constants from '../../constants'
import { type Props } from './types'
import words from '../../assets/words.json'


const ATTEMPTS = 6

const { WORDS_LENGTH} = constants

const WordsGrid = () => {
  const [error, setError] = React.useState<string | null>(null)

  const solution = React.useRef<string>()

  React.useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    solution.current = randomWord
  }, [])


  return (
    <div>
      <div className='grid-cells'>
        {[...Array(WORDS_LENGTH * ATTEMPTS)].map((_, index) => <span key={index} className="cell" />)}
      </div>
    </div>
  )
}

export default WordsGrid
