import constants from "../constants"

const {VALIDWORDINVALIDPOSITION, VALIDWORDVALIDPOSITION, INVALIDWORD } = constants

type ValidateWordParams = { 
    word: string, 
    solution: string,
    isReadyToValidate: boolean
}


const validateWord = ({word,  solution, isReadyToValidate}: ValidateWordParams) => 
   isReadyToValidate && [...Array(solution.length)].map(( _,index) => {
    if(word.charAt(index) === solution.charAt(index)) return VALIDWORDVALIDPOSITION
    if(solution.includes(word.charAt(index))) return VALIDWORDINVALIDPOSITION
    else return INVALIDWORD
   })


export default validateWord