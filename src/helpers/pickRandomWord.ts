import { type WordConditions } from '../utils/types'

export default function pickRandomWord({
  dictionary,
  conditions,
}: {
  dictionary: string[]
  conditions: WordConditions
}) {
  const { length = 5, contains, excluded = [], matches } = conditions

  const normalizedDictionary = normalizeDictionary(dictionary)

  const matchingWords = normalizedDictionary.filter(
    word =>
      word.length === length &&
      !excluded.some(excludedWord => word.includes(excludedWord))
  )

  return matchingWords[
    Math.floor(Math.random() * matchingWords.length)
  ].toLowerCase()
}

function normalizeDictionary(dictionary: string[]) {
  return dictionary.map(word =>
    word.normalize('NFD').replace(/\p{Diacritic}/gu, '')
  )
}
