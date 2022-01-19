import {
  GET_ALL_USERS,
  UPDATE_USER,
  GET_USER,
  DELETE_USER,
 
} from '../Actions/ActionTypes'
const initialState = {
  users: [], user:null, message: ' hello', loading: true, isAuth: false,}
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.payload }
    case UPDATE_USER:
      return { ...state, message: action.payload }
    case GET_USER:
      return { ...state, user: action.payload, message: 'alo' }
      default:
      return state
  
  }
}
export default UserReducer

//GET_SINGLE_USER --> action.payload.user essayer de travailler avec GET_USER de AuthReducer
