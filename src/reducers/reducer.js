

export default (state = {}, action) => {
  switch (action.type) {
    case 'STRING_INPUT_CHANGE':
      return {
        ...state,
        stringValue: action.payload
      }
    case 'DNA_INPUT_CHANGE':
      return {
        ...state,
        dnaValue: action.payload
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
    case 'DNA_TYPE_CHANGE':
      return {
        ...state,
        DNARNA: action.payload
      }

    default:
      return state
  }
}