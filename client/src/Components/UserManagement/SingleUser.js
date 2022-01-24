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
      <p className="card-subtitle mb-2 text-muted">Nom de l'entreprise: </p>
        <p className="card-text">{user && user.username} </p>
        <img className="card-img-top" src={user && user.SelectedFile} alt="Client's image"/>
        <p className="card-subtitle mb-2 text-muted">email de l'entreprise</p>
        <p className="card-text">{user && user.email}</p>
        <p className="card-subtitle mb-2 text-muted">N°SIRET de l'entreprise</p>
        <p className="card-text">{user && user.NumSiret}</p>
        <p className="card-subtitle mb-2 text-muted">Adresse du siège social</p>
        <p className="card-text">{user && user.SiegeSocialAdresse}</p>
        <p className="card-subtitle mb-2 text-muted">Téléphone du siège social</p>
        <p className="card-text">{user && user.SiegeSocialTelephone}</p>
        <p className="card-subtitle mb-2 text-muted">Email du siège social</p>
        <p className="card-text">{user && user.SiegeSocialEmail}</p>
        <p className="card-subtitle mb-2 text-muted">Nom du représentant de l'enreprise</p>
        <p className="card-text">{user && user.RepresentantNom}</p>
        <p className="card-subtitle mb-2 text-muted">Fonction du représentant de l'enreprise</p>
        <p className="card-text">{user && user.RepresentFonction}</p>
        <p className="card-subtitle mb-2 text-muted">Téléphone du représentant de l'enreprise</p>
        <p className="card-text">{user && user.RepresentantTelephone}</p>
        <p className="card-subtitle mb-2 text-muted">Email du représentant de l'enreprise</p>
        <p className="card-text">{user && user.RepresentantEmail}</p>
        <p className="card-subtitle mb-2 text-muted">N°d'habilitation du représentant de l'enreprise</p>
        <p className="card-text">{user && user.RepresentantNumHabilitation}</p>
        <p className="card-subtitle mb-2 text-muted">N° du protocole SISERI</p>
        <p className="card-text">{user && user.SISERINumProtocole}</p>
        <p className="card-subtitle mb-2 text-muted">Nom clé du protocole SISERI</p>
        <p className="card-text">{user && user.SISERINomCle}</p>
        <p className="card-subtitle mb-2 text-muted">Date de mise à jour du protocole SISERI</p>
        <p className="card-text">{user && user.SISERIUpdate}</p>
        <p className="card-subtitle mb-2 text-muted">Nom du Médecin de travail</p>
        <p className="card-text">{user && user.MDTNom}</p>
        <p className="card-subtitle mb-2 text-muted">Prénom du Médecin de travail</p>
        <p className="card-text">{user && user.MDTPrenom}</p>
        <p className="card-subtitle mb-2 text-muted">Téléphone du Médecin de travail</p>
        <p className="card-text">{user && user.MDTTelephone}</p>
        <p className="card-subtitle mb-2 text-muted">Email du Médecin de travail</p>
        <p className="card-text">{user && user.MDTEmail}</p>
        <p className="card-subtitle mb-2 text-muted">N° d'habilitation du Médecin de travail</p>
        <p className="card-text">{user && user.MDTNumHabilitation}</p>
        <p className="card-subtitle mb-2 text-muted">N° du contrat</p>
        <p className="card-text">{user && user.ContratNum}</p>
        <p className="card-subtitle mb-2 text-muted">Date du début du contrat</p>
        <p className="card-text">{user && user.ContratDateDebut}</p>
        <p className="card-subtitle mb-2 text-muted">Date de fin du contrat</p>
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
