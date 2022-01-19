import React ,{ useEffect}from "react";
import { useSelector ,useDispatch} from "react-redux";
import {getUser} from "../../Redux/Actions/AuthActions"
import UserReducer from '../../Redux/Reducers/UserReducer';
import {getOneUser} from "../../Redux/Actions/UserActions"
import { useParams } from "react-router";

const SingleUser = () => {
  console.log("hello from singleuser")
    const dispatch=useDispatch()
    const {id}=useParams();
    console.log("userID",id)
    const user=useSelector(state=>state.UserReducer.user)
    console.log("user: from single user",user)

    useEffect(()=>{
      
  dispatch(getUser(id)) 
    },[])

   if(!user){
       return 'loading';
   }
  return (
    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <p>username from singleUser.js</p>
        <h5 className="card-title">{user.username}</h5>
        <p className="card-text">
          {user.email}
        </p>
        <p>{user.id}</p>
     
      </div>
    </div>
  );
};

export default SingleUser;
