import React, { useState } from "react"
import { deleteIntervenant,updateIntervenant,getOneIntervenant } from "../../Redux/Actions/IntervenantActions"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router"

const IntervenantCard = ({ intervenant }) => {
   console.log("hello from IntervenantCard")
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [updatedIntervenant, setupDated] = useState({
    Nom: " ",
    Prenom: " ",
    NSS: 0,
  })
  const handleChange = (event) => {
    setupDated({ ...updatedIntervenant, [event.target.id]: event.target.value })
  }
  const handleClick = () => {
    dispatch(deleteIntervenant(intervenant._id))
  }
  const handleEdit = () => {
    if (show) {
      setShow(false)
    } else {
      setShow(true)
    }
  }
  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(updateIntervenant(intervenant._id, updatedIntervenant))
    setupDated({ Nom: " ", Prenom: " ", NSS: " " })
    setShow(false)
  }
  const getIntervenant=()=>{
    dispatch(getOneIntervenant(intervenant._id))
    navigate('/intervenant-details')
  }

  return (
    <div>
      <div className="card text-center" style={{ width: "500px" }}>
        <div className="card-header">Intervenant</div>
        <div className="card-body">
          <p className="card-title">{intervenant.Nom}</p>
          <p className="card-text">{intervenant.Prenom}</p>
          <p className="card-text">{intervenant.NSS}</p>
         
        </div>
        <div>
          <button type="button" class="btn btn-danger" onClick={handleClick}>
            Supprimer Intervenant
          </button>
        </div>
        <button type="button" class="btn btn-success" onClick={handleEdit}>
          Modifier Intervenant
        </button>

       <Link to={`/intervenantDetails/${intervenant._id}`}>
        <button className="btn btn-primary" onClick={getIntervenant}>see user</button>
        </Link>

        {show ? (
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label for="Nom">nom de l'intervenant</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="Nom"
                value={updatedIntervenant.Nom}
              />
            </div>
            <div className="form-group">
              <label for="Prenom">Prénom</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="Prenom"
                value={updatedIntervenant.Prenom}
              />
            </div>
            <div className="form-group">
              <label for="NSS">N°SS</label>
              <input
                onChange={handleChange}
                type='number'
                className="form-control"
                id="NSS"
                value={updatedIntervenant.NSS}
              />
            </div>
        

            <button type="submit" className="btn btn-primary">
              Appliquer
            </button>
          </form>
        ) : null}
      </div>
      <div></div>
    </div>
  )
}

export default IntervenantCard
