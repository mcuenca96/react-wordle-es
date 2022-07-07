import * as React from 'react'
import constants from '../constants'

const { WORDS_LENGTH} = constants

function useGridValues(currentWord: string) {
    const [attempt, setAttempt] = React.useState<number>(0)
    const [words, setWords] = React.useState<string[]>([])

    React.useEffect(() => {
        const parsedWords = words
        parsedWords.splice(attempt, 1, currentWord)
        setWords(parsedWords)
        if(currentWord.length === WORDS_LENGTH) setAttempt(attempt + 1)
    },[currentWord])

    return {words, attempt}
}


export default useGridValues