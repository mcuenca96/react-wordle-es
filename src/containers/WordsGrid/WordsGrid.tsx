import * as React from 'react'
import useCurrentInputValue from '../../hooks/useCurrentInputValue'
import constants from '../../constants'
import dictionary from '../../assets/words.json'
import validateWord from '../../helpers/validateWord'
import useGridValues from '../../hooks/useGridValues'


const { WORDS_LENGTH, ATTEMPTS } = constants

const WordsGrid = () => {
  const {word, isReadyToValidate} = useCurrentInputValue()
  const  {words, attempt}  = useGridValues(word)
  
  const solution = dictionary[Math.floor(Math.random() * dictionary.length)];
  const parsedSolution = solution.toLocaleUpperCase()


  const valueCharsStatesList = validateWord({isReadyToValidate, solution: parsedSolution, word})

  const getCellStyle = (index: number) => {
    return  valueCharsStatesList ? valueCharsStatesList[index] : ''
  }

  return (
    <div>
      <div className='grid-cells'>
        {[...Array(ATTEMPTS * WORDS_LENGTH)].map((_, index) => {
          const test = index + 1 > WORDS_LENGTH ? index + 1 - (WORDS_LENGTH * Math.round(index / WORDS_LENGTH)) : index
          return <span key={index} className={`cell + ${getCellStyle(index)} `}>
            {(words[attempt] || '').split('')[test]}
          </span>
       })}
      </div>
    </div>
  )
}



export default WordsGrid
