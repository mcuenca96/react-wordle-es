import * as React from 'react'
import constants from '../constants'

const { WORDS_LENGTH } = constants

function useCurrentInputValue(){
    const [word, setWord] =  React.useState<string>('')
    const [isReadyToValidate, setReadyToValidate] = React.useState<boolean>(false)

    const onEnter = () => {
        if(word.length === WORDS_LENGTH) {
            setReadyToValidate(true)
            setWord('')
        }
    }

    const onDelete = () => {
      setWord(word.slice(0, -1))
    } 

    const onAddLetter = (key: string) => {
       setWord(word + key.toLocaleUpperCase())
    }

    React.useEffect(() => {
        const listener = (e: KeyboardEvent) => {
         if(e.code === 'Enter') onEnter()
         if(e.code === 'Backspace') onDelete()
         if (e.key.length === 1 && e.key >= 'a' && e.key <= 'z' && word.length < WORDS_LENGTH) onAddLetter(e.key)
        }
        window.addEventListener('keyup', listener)
        return () => {
          window.removeEventListener('keyup', listener)
        }
    })


    return {word, isReadyToValidate}

}

export default useCurrentInputValue