import {
  GET_ALL_INTERVENANTS,
  GET_INTERVENANT,
  UPDATE_INTERVENANT,
  ADD_INTERVENANT,
   
  } from '../Actions/ActionTypes'
  const initialState = {
    intervenants: [], intervenant:{}, message: ' hello', loading: true, }
  const IntervenantReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_INTERVENANTS:
        return { ...state, intervenants: action.payload }
      case UPDATE_INTERVENANT:
        return { ...state, intervenant: action.payload }
      case GET_INTERVENANT:
        return { ...state, intervenant: action.payload, message: 'update intervenant works' }
        case ADD_INTERVENANT:
          return { ...state, intervenant: action.payload,  }
        default:
        return state
    
    }
  }
  export default IntervenantReducer
  
  //GET_SINGLE_USER --> action.payload.user essayer de travailler avec GET_USER de AuthReducer
  