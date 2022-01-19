import {
    GET_ALL_INTERVENANTS,
    GET_INTERVENANT,
    UPDATE_INTERVENANT,
   
  } from '../Actions/ActionTypes'
  const initialState = {
    intervenants: [], intervenant:null, message: ' hello', loading: true, }
  const IntervenantReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_INTERVENANTS:
        return { ...state, intervenants: action.payload }
      case UPDATE_INTERVENANT:
        return { ...state, message: action.payload }
      case GET_INTERVENANT:
        return { ...state, intervenant: action.payload, message: 'alo' }
        default:
        return state
    
    }
  }
  export default IntervenantReducer
  
  //GET_SINGLE_USER --> action.payload.user essayer de travailler avec GET_USER de AuthReducer
  