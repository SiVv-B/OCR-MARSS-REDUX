import React ,{useState}from "react"
import {addUser} from "../../Redux/Actions/UserActions"
import { register } from "../../Redux/Actions/AuthActions"
import {useDispatch} from 'react-redux'
import {useNavigate} from "react-router"
const UserAdd = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [user,setUser]=useState({
    username: "",
    email: "",
    password: "",
    SelectedFile:"",
    NumSiret:"",
    role:"",
    SiegeSocialAdresse:"",
    SiegeSocialTelephone:"",
    SiegeSocialEmail:"",
    RepresentantNom:"",
    RepresentFonction:"",
    RepresentantTelephone:"",
    RepresentantEmail:"",
    RepresentantNumHabilitation:"",
    SISERINumProtocole:"",
    SISERINomCle:"",
    SISERIUpdate:"",
    MDTNom:"",
    MDTPrenom:"",
    MDTNumHabilitation:"",
    MDTSiret:"",
    MDTTelephone:"",
    MDTEmail:"",
    ContratNum:"",
    ContratDateDebut:"",
    ContratDateFin:"",
  })
  const handleChange=(event)=>{
    setUser({...user,[event.target.id]:event.target.value})
  }
 const onSubmit=(event)=>{
  event.preventDefault()
  dispatch(addUser(user))
  setUser({
    username: "",
    email: "",
    password: "",
    SelectedFile:"",
    NumSiret:"",
    role:"",
    SiegeSocialAdresse:"",
    SiegeSocialTelephone:"",
    SiegeSocialEmail:"",
    RepresentantNom:"",
    RepresentFonction:"",
    RepresentantTelephone:"",
    RepresentantEmail:"",
    RepresentantNumHabilitation:"",
    SISERINumProtocole:"",
    SISERINomCle:"",
    SISERIUpdate:"",
    MDTNom:"",
    MDTPrenom:"",
    MDTNumHabilitation:"",
    MDTSiret:"",
    MDTTelephone:"",
    MDTEmail:"",
    ContratNum:"",
    ContratDateDebut:"",
    ContratDateFin:"",
  })
 
 }
  return (
    <form onSubmit={onSubmit}>
                <div className="form-group">
              <label for="username">Username</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="username"
                placeholder="Nom de l'entreprise ou username"
                value={user.username}
              />
            </div>
            <div className="form-group">
              <label for="email">email</label>
              <input
                onChange={handleChange}
                type="email"
                className="form-control"
                id="email"
                placeholder="email de l'entreprise client"
                value={user.email}
              />
              <div className="form-group">
              <label for="password">mot de passe</label>
              <input
                onChange={handleChange}
                type="password"
                className="form-control"
                id="password"
                placeholder="Créer un mot de passe"
                value={user.password}
              />
            </div>
            </div>
            <div className="form-group">
              <label for="SelectedFile">Image/logo</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="SelectedFile"
                placeholder="inserer le lien de l'image/logo"
                value={user.SelectedFile}
              />
              </div>



            <div className="form-group">
              <label for="NumSiret">N°SIRET</label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control"
                id="NumSiret"
                placeholder="inserer le lien de l'image/logo"
                value={user.NumSiret}
              />
            </div>
            <div className="form-group">
              <label for="RepresentantNom">Nom du représentant</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="RepresentantNom"
                value={user.RepresentantNom}
              />
            </div>
            <div className="form-group">
              <label for="RepresentFonction">Fonction du représentant</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="RepresentFonction"
                value={user.RepresentFonction}
              />
            </div>
            <div className="form-group">
              <label for="RepresentantTelephone">Télephone du représentant</label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control"
                id="RepresentantTelephone"
                value={user.RepresentantTelephone}
              />
            </div>
            <div className="form-group">
              <label for="RepresentantEmail">Email du représentant</label>
              <input
                onChange={handleChange}
                type="email"
                className="form-control"
                id="RepresentantEmail"
                value={user.RepresentantEmail}
              />
            </div>
            <div className="form-group">
              <label for="RepresentantNumHabilitation">N° d'habilitation du représentant</label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control"
                id="RepresentantNumHabilitation"
                value={user.RepresentantNumHabilitation}
              />
            </div>

            <div className="form-group">
              <label for="SiegeSocialAdresse">Adresse du siège social</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="SiegeSocialAdresse"
                placeholder="Adresse du Siège social"
                value={user.SiegeSocialAdresse}
              />
            </div>
            <div className="form-group">
              <label for="SiegeSocialTelephone">Téléphone du siège social</label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control"
                id="SiegeSocialTelephone"
                value={user.SiegeSocialTelephone}
              />
            </div>
            <div className="form-group">
              <label for="SiegeSocialEmail">Email du siège social</label>
              <input
                onChange={handleChange}
                type="email"
                className="form-control"
                id="SiegeSocialEmail"
                value={user.SiegeSocialEmail}
              />
            </div>
            <div className="form-group">
              <label for="SISERINumProtocole">N° du protocole SISERI</label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control"
                id="SISERINumProtocole"
                value={user.SISERINumProtocole}
              />
            </div>
            <div className="form-group">
              <label for="SISERINomCle">Nom clé du protocole SISERI</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="SISERINomCle"
                value={user.SISERINomCle}
              />
            </div>
            <div className="form-group">
              <label for="SISERIUpdate">SISERI mis à jour le:</label>
              <input
                onChange={handleChange}
                type="date"
                className="form-control"
                id="SISERIUpdate"
                value={user.SISERIUpdate}
              />
            </div>
            <div className="form-group">
              <label for="MDTNom">Nom du Medecin du Travail:</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="MDTNom"
                value={user.MDTNom}
              />
            </div>
            <div className="form-group">
              <label for="MDTPrenom">Prénom du Medecin du Travail:</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="MDTPrenom"
                value={user.MDTPrenom}
              />
            </div>
            <div className="form-group">
              <label for="MDTEmail">Email du Medecin du Travail:</label>
              <input
                onChange={handleChange}
                type="email"
                className="form-control"
                id="MDTEmail"
                value={user.MDTEmail}
              />
            </div>
            <div className="form-group">
              <label for="MDTTelephone">N° Téléphone du Medecin du Travail:</label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control"
                id="MDTTelephone"
                value={user.MDTTelephone}
              />
            </div>
            <div className="form-group">
              <label for="MDTNumHabilitation">N° habilitation du Medecin du Travail:</label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control"
                id="MDTNumHabilitation"
                value={user.MDTNumHabilitation}
              />
            </div>
            <div className="form-group">
              <label for="MDTSiret">N° SIRET du Medecin du Travail:</label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control"
                id="MDTSiret"
                value={user.MDTSiret}
              />
            </div>
            <div className="form-group">
              <label for="MDTTelephone">N° Téléphone du Medecin du Travail:</label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control"
                id="MDTTelephone"
                value={user.MDTTelephone}
              />
            </div>
            <div className="form-group">
              <label for="ContratNum">N° du contrat</label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control"
                id="ContratNum"
                value={user.ContratNum}
              />
            </div>
            <div className="form-group">
              <label for="ContratDateDebut">Date du début du contrat</label>
              <input
                onChange={handleChange}
                type="date"
                className="form-control"
                id="ContratDateDebut"
                value={user.ContratDateDebut}
              />
            </div>
            <div className="form-group">
              <label for="ContratDateFin">Date de fin du contrat</label>
              <input
                onChange={handleChange}
                type="date"
                className="form-control"
                id="ContratDateFin"
                value={user.ContratDateFin}
              />
            </div> 
{/*                         <div className="form-group">
              <label for="role">Date de fin du contrat</label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control"
                id="role"
                value={user.role}
              />
            </div> 
             */}
            
            
            
            
      <button type="submit" className="btn btn-primary">
        Ajouter le client
      </button>
    </form>
  )
}

export default UserAdd
