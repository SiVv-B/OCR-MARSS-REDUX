import React from 'react'
import { useSelector } from 'react-redux'
const UseProfile = () => {
  const user = useSelector((state) => state.AuthReducer.user)
  console.log('from userPRofile', user)
  console.log('user ID', user._id)
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h1> from user profile</h1>
        <p className="card-text">{user && user.username} </p>
        <img className="card-img-top" src={user && user.SelectedFile} alt="Client's image"/>
        <p className="card-text">{user && user.email}</p>
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
        <p className="card-text">{user && user.ContratNum}</p>
        <p className="card-text">{user && user.ContratDateDebut}</p>
        <p className="card-text">{user && user.ContratDateFin}</p>
      </div>
    </div>
  )
}

export default UseProfile
