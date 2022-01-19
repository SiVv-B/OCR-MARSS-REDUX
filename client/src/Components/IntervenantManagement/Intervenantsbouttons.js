import React from "react";
import { Link } from "react-router-dom";
import {GetIntervenants} from "../../Redux/Actions/IntervenantActions"
import {useDispatch} from "react-redux"

function Intervenantsbouttons() {
  const dispatch=useDispatch()
  const handleClick=()=>{
   dispatch(GetIntervenants())
  }
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <div style={{ marginBottom: "20px" }}>
        <Link to="/listIntervenants">
          <button type="button" className="btn btn-primary" onClick={handleClick}>
            Liste des intervenants
          </button>
        </Link>
      </div>
      <div>
        <Link to="/addIntervenant">
          <button type="button" className="btn btn-primary">
            Ajouter un intervenant
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Intervenantsbouttons;
