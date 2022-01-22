import React ,{ useEffect}from "react"
import { useSelector ,useDispatch} from "react-redux"
import {getOneUser} from "../../Redux/Actions/UserActions"
import { useParams } from "react-router"

import { Link } from "react-router-dom"


const SingleUser = () => {
  console.log("hello from singleuser")
    const dispatch=useDispatch()
    const {id}=useParams()
    console.log("userID",id)
    const user=useSelector(state=>state.UserReducer.user)
    console.log("user: from single user",user)

    useEffect(()=>{
  dispatch(getOneUser(id)) 
    },[])

   if(!user){
       return 'loading'
   }
  return (
    <div>
    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
      <p className="card-text">{user && user._id}</p>
      <p className="card-text">{user && user.username}</p>
      <p className="card-text">{user && user.email}</p>
        <img className="card-img-top" src={user.SelectedFile} alt="Client's image"/>
        <p className="card-text">{user && user.NumSiret}</p>
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
        <p className="card-text">{user && user.MDTSiret}</p>
        <p className="card-text">{user && user.ContratNum}</p>
        <p className="card-text">{user && user.ContratDateDebut}</p>
        <p className="card-text">{user && user.ContratDateFin}</p>    
      </div>

     
{/* 
      <Link to={`/intervenant-details/${intervenant._id}`}>
        <button className="btn btn-primary">voir plus de details sur l'intervenant</button>
        </Link>
        {show ? (
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label for="Nom">nom de l'intervenant</label>
              //,,........ faire un déroulant pour montrer plus de details sur l'intervenant
              plus boutton modifier et boutton supprimer
       */}
             <Link to={"/intervenantsListe"}>
        <button className="btn btn-primary">voir plus de details sur l'intervenant</button>
        </Link>
      <button>ajouter un intervenant</button>
      </div>
      
    </div>
  )
}

export default SingleUser
