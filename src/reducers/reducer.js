

export default (state = {}, action) => {
  switch (action.type) {
    case 'STRING_INPUT_CHANGE':
      return {
        ...state,
        string: action.payload
      }
    case 'DNA_INPUT_CHANGE':
      return {
        ...state,
        dna: action.payload
      }
    case 'STRING_TRANSLATE_SUCCESS':
      return {
        ...state,
        dna: action.payload
      }
    case 'DNA_TRANSLATE_SUCCESS':
      return {
        ...state,
        string: action.payload
      }

    default:
      return state
  }
}