import * as React from 'react'

import { type Props } from './types'
import pickRandomWord from '../../helpers/pickRandomWord'

const WordsGrid = () => {
  const [dictionary, setDictionary] = React.useState<string[]>([])
  const [solution, setSolution] = React.useState<string | null>(null)

  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    fetch('https://random-word-api.herokuapp.com/all?lang=es&swear=1')
      .then(async response => ({ response, payload: await response.json() }))
      .then(({ response, payload }) => {
        if (response.status === 200 && payload.length) {
          setDictionary(payload)
          const randomWord = pickRandomWord({
            dictionary: payload,
            conditions: { length: 5, excluded: ['a', 'e'] },
          })
          console.log(randomWord)
        } else {
          const { Error } = payload
          setError(Error)
        }
      })
  }, [])

  return <div>Grid goes here</div>
}

export default WordsGrid
