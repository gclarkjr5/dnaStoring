import axios from 'axios';

export const handleStringChange = input => {
    return {
        type: 'STRING_INPUT_CHANGE',
        payload: input
    }
}
export const handleDNAChange = input => {
    return {
        type: 'DNA_INPUT_CHANGE',
        payload: input
    }
}

export const stringtranslate = input => dispatch => {
    dispatch({type: 'STRING_TRANSLATE', payload: {}})
    axios.post('/string', {input: input})
        .then(res => {
            dispatch({type: 'STRING_TRANSLATE_SUCCESS', payload: res.data})
        })
        .catch(err => {
            dispatch({type: 'STRING_TRANSLATE_ERROR', err: err})
        })
}

export const dnatranslate = input => dispatch => {
    dispatch({type: 'DNA_TRANSLATE', payload: {}})
    axios.post('/dna', {input: input})
        .then(res => {
            dispatch({type: 'DNA_TRANSLATE_SUCCESS', payload: res.data})
        })
        .catch(err => {
            dispatch({type: 'DNA_TRANSLATE_ERROR', err: err})
        })
}

export const newType = val => {
    return {
        type: 'DNA_TYPE_CHANGE',
        payload: val
    }
}