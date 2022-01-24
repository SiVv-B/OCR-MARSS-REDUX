import React from 'react'
import { useSelector } from 'react-redux'
const UseProfile = () => {
  const user = useSelector((state) => state.AuthReducer.user)
  console.log('from userPRofile', user)
  console.log('user ID', user._id)
  return (
    <div className="card" style={{ width: '18rem' }}>
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
    </div>
  )
}

export default UseProfile
