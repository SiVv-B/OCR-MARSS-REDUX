import React, { useEffect, useState } from "react";
import { deleteUser,updateUser,getOneUser } from "../../Redux/Actions/UserActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const UserCard = ({ user }) => {
   console.log("hello from userCard")
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [updatedUser, setupDated] = useState({
    username: " ",
    email: " ",
    SelectedFile: " ",
    NumSiret:" ",
    SiegeSocialAdresse:" ",
    SiegeSocialTelephone:" ",
    SiegeSocialEmail:" ",
    RepresentantNom:" ",
    RepresentFonction:" ",
    RepresentantTelephone:" ",
    RepresentantEmail:" ",
    RepresentantNumHabilitation:" ",
    SISERINumProtocole:" ",
    SISERINomCle:" ",
    SISERIUpdate:" ",
    MDTNom:" ",
    MDTPrenom:" ",
    MDTNumHabilitation:" ",
    MDTSiret:" ",
    MDTTelephone:" ",
    MDTEmail:" ",
    ContratNum:" ",
    ContratDateDebut:" ",
    ContratDateFin:" ",

  })
  const handleChange = (event) => {
    setupDated({ ...updatedUser, [event.target.id]: event.target.value });
  };
  const handleClick = () => {
    dispatch(deleteUser(user._id));
  };
  const handleEdit = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser(user._id, user));
    setupDated({ 
      username: " ",
      email: " ",
      SelectedFile: " ",
      NumSiret:" ",
      SiegeSocialAdresse:" ",
      SiegeSocialTelephone:" ",
      SiegeSocialEmail:" ",
      RepresentantNom:" ",
      RepresentFonction:" ",
      RepresentantTelephone:" ",
      RepresentantEmail:" ",
      RepresentantNumHabilitation:" ",
      SISERINumProtocole:" ",
      SISERINomCle:" ",
      SISERIUpdate:" ",
      MDTNom:" ",
      MDTPrenom:" ",
      MDTNumHabilitation:" ",
      MDTSiret:" ",
      MDTTelephone:" ",
      MDTEmail:" ",
      ContratNum:" ",
      ContratDateDebut:" ",
      ContratDateFin:" ",
    });
    setShow(false);
  };
  const getUser=()=>{
    dispatch(getOneUser(user._id))
     navigate(`/details`) 
  }

  return (
    <div>
      <div className="card text-center" style={{ width: "500px" }}>
        <div className="card-header">Client</div>
        <div className="card-body">
          <p>test</p>
          <h5 className="card-title">{user.username}</h5>
          <img className="card-img-top" src={ user.SelectedFile} alt="Client's image"/>          
          <p className="card-text">{user.email}</p>
          <p className="card-text">{user.NumSiret}</p>

        </div>
        <div>
          <button type="button" className="btn btn-danger" onClick={handleClick}>
            Effacer ce client
          </button>
        </div>
        <button type="button" className="btn btn-success" onClick={handleEdit}>
          Mettre à jour ce client
        </button>

       <Link to={`/details/${user._id}`}>
        <button className="btn btn-primary" onClick={getUser}>Voir plus d'info sur ce client</button>
        </Link>

        {show ? (
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label for="username">Username</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="username"
                placeholder="Nom de l'entreprise ou username"
                value={updatedUser.username}
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
                value={updatedUser.email}
              />
            </div>
            <div className="form-group">
              <label for="SelectedFile">Image/logo</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="SelectedFile"
                placeholder="inserer le lien de l'image/logo"
                value={updatedUser.SelectedFile}
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
                value={updatedUser.NumSiret}
              />
            </div>
            <div className="form-group">
              <label for="RepresentantNom">Nom du représentant</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="RepresentantNom"
                value={updatedUser.RepresentantNom}
              />
            </div>
            <div className="form-group">
              <label for="RepresentFonction">Fonction du représentant</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="RepresentFonction"
                value={updatedUser.RepresentFonction}
              />
            </div>
            <div className="form-group">
              <label for="RepresentantTelephone">Télephone du représentant</label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control"
                id="RepresentantTelephone"
                value={updatedUser.RepresentantTelephone}
              />
            </div>
            <div className="form-group">
              <label for="RepresentantEmail">Email du représentant</label>
              <input
                onChange={handleChange}
                type="email"
                className="form-control"
                id="RepresentantEmail"
                value={updatedUser.RepresentantEmail}
              />
            </div>
            <div className="form-group">
              <label for="RepresentantNumHabilitation">N° d'habilitation du représentant</label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control"
                id="RepresentantNumHabilitation"
                value={updatedUser.RepresentantNumHabilitation}
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
                value={updatedUser.SiegeSocialAdresse}
              />
            </div>
            <div className="form-group">
              <label for="SiegeSocialTelephone">Téléphone du siège social</label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control"
                id="SiegeSocialTelephone"
                value={updatedUser.SiegeSocialTelephone}
              />
            </div>
            <div className="form-group">
              <label for="SiegeSocialEmail">Email du siège social</label>
              <input
                onChange={handleChange}
                type="email"
                className="form-control"
                id="SiegeSocialEmail"
                value={updatedUser.SiegeSocialEmail}
              />
            </div>
            <div className="form-group">
              <label for="SISERINumProtocole">N° du protocole SISERI</label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control"
                id="SISERINumProtocole"
                value={updatedUser.SISERINumProtocole}
              />
            </div>
            <div className="form-group">
              <label for="SISERINomCle">Nom clé du protocole SISERI</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="SISERINomCle"
                value={updatedUser.SISERINomCle}
              />
            </div>
            <div className="form-group">
              <label for="SISERIUpdate">SISERI mis à jour le:</label>
              <input
                onChange={handleChange}
                type="date"
                className="form-control"
                id="SISERIUpdate"
                value={updatedUser.SISERIUpdate}
              />
            </div>
            <div className="form-group">
              <label for="MDTNom">Nom du Medecin du Travail:</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="MDTNom"
                value={updatedUser.MDTNom}
              />
            </div>
            <div className="form-group">
              <label for="MDTPrenom">Prénom du Medecin du Travail:</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="MDTPrenom"
                value={updatedUser.MDTPrenom}
              />
            </div>
            <div className="form-group">
              <label for="MDTEmail">Email du Medecin du Travail:</label>
              <input
                onChange={handleChange}
                type="email"
                className="form-control"
                id="MDTEmail"
                value={updatedUser.MDTEmail}
              />
            </div>
            <div className="form-group">
              <label for="MDTTelephone">N° Téléphone du Medecin du Travail:</label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control"
                id="MDTTelephone"
                value={updatedUser.MDTTelephone}
              />
            </div>
            <div className="form-group">
              <label for="MDTNumHabilitation">N° habilitation du Medecin du Travail:</label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control"
                id="MDTNumHabilitation"
                value={updatedUser.MDTNumHabilitation}
              />
            </div>
            <div className="form-group">
              <label for="MDTSiret">N° SIRET du Medecin du Travail:</label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control"
                id="MDTSiret"
                value={updatedUser.MDTSiret}
              />
            </div>
            <div className="form-group">
              <label for="MDTTelephone">N° Téléphone du Medecin du Travail:</label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control"
                id="MDTTelephone"
                value={updatedUser.MDTTelephone}
              />
            </div>
            <div className="form-group">
              <label for="ContratNum">N° du contrat</label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control"
                id="ContratNum"
                value={updatedUser.ContratNum}
              />
            </div>
            <div className="form-group">
              <label for="ContratDateDebut">Date du début du contrat</label>
              <input
                onChange={handleChange}
                type="date"
                className="form-control"
                id="ContratDateDebut"
                value={updatedUser.ContratDateDebut}
              />
            </div>
            <div className="form-group">
              <label for="ContratDateFin">Date de fin du contrat</label>
              <input
                onChange={handleChange}
                type="date"
                className="form-control"
                id="ContratDateFin"
                value={updatedUser.ContratDateFin}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Mettre à jour les informations
            </button>
          </form>
        ) : null}
      </div>
    </div>
  );
};

export default UserCard;
