export type WordConditions = {
    length: number
    excluded?: string[],
    contains?: string[]
    matches?: string[] 
}