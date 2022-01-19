import React ,{useState}from "react"
import {addIntervenant} from "../../Redux/Actions/IntervenantActions"
import {useDispatch} from 'react-redux'
import {useNavigate} from "react-router"

const AddIntervenant = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [intervenant,setIntervenant]=useState({Nom:" ",Prenom:" ",NSS:" "})
  const handleChange=(event)=>{
    setIntervenant({...intervenant,[event.target.id]:event.target.value})
  }
 const onSubmit=(event)=>{
  event.preventDefault()
  dispatch(addIntervenant(intervenant))
  setIntervenant({Nom:" ",Prenom:" ",NSS:" "})
 
 }
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group"  >
        <label for="Nom">Nom</label>
        <input onChange ={handleChange}  type="text" className="form-control" id="Nom" value={intervenant.Nom} />
      </div>
      <div className="form-group">
        <label for="email">email</label>
        <input onChange ={handleChange} type="text" className="form-control" id="Prenom" value={intervenant.Prenom} />
      </div>
      <div className="form-group">
        <label for="NSS">N°SS</label>
        <input onChange ={handleChange} type="number" className="form-control" id="NSS" value={intervenant.NSS} />
      </div>

      <button type="submit" className="btn btn-primary">
        Ajouter un intervenant
      </button>
    </form>
  )
}

export default AddIntervenant
