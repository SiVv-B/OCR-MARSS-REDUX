import React ,{ useEffect}from "react";
import { useSelector ,useDispatch} from "react-redux";
import {getOneUser} from "../../Redux/Actions/UserActions"
import { useParams } from "react-router";

import { Link } from "react-router-dom";


const SingleUser = () => {
  console.log("hello from singleuser")
    const dispatch=useDispatch()
    const {id}=useParams();
    console.log("userID",id)
    const user=useSelector(state=>state.UserReducer.user)
    console.log("user: from single user",user)

    useEffect(()=>{
  dispatch(getOneUser(id)) 
    },[])

   if(!user){
       return 'loading';
   }
  return (
    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
      <p className="card-text">{user && user._id}</p>
      <p className="card-text">{user && user.username}</p>
      <p className="card-text">{user && user.email}</p>
        <img className="card-img-top" src={user.SelectedFile} alt="Client's image"/>
        <p className="card-text">{user && user.SiegeSocialAdresse}</p>
        <p className="card-text">{user && user.SiegeSocialTelephone}</p>
        <p className="card-text">{user && user.SiegeSocialEmail}</p>
        <p className="card-text">{user && user.RepresentantNom}</p>
        <p className="card-text">{user && user.RepresentFonction}</p>
        <p className="card-text">{user && user.RepresentantTelephone}</p>
        <p className="card-text">{user && user.RepresentantEmail}</p>
        <p className="card-text">{user && user.RepresentantNumHabilitation}</p>
        <p className="card-text">{user && user.SISERINumProtocole}</p>
        <p className="card-text">{user && user.SISERINomCle}</p>
        <p className="card-text">{user && user.SISERIUpdate}</p>
        <p className="card-text">{user && user.MDTNom}</p>
        <p className="card-text">{user && user.MDTPrenom}</p>
        <p className="card-text">{user && user.MDTTelephone}</p>
        <p className="card-text">{user && user.MDTEmail}</p>
        <p className="card-text">{user && user.MDTNumHabilitation}</p>
        <p className="card-text">{user && user.ContratNum}</p>
        <p className="card-text">{user && user.ContratDateDebut}</p>
        <p className="card-text">{user && user.ContratDateFin}</p>
     
      </div>
      
    </div>
  );
};

export default SingleUser;
