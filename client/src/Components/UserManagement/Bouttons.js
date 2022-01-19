import React from "react";
import { Link } from "react-router-dom";
import {GetUsers} from "../../Redux/Actions/UserActions"
import {useDispatch} from "react-redux"

function Bouttons() {
  const dispatch=useDispatch()
  const handleClick=()=>{
   dispatch(GetUsers())
  }
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <div style={{ marginBottom: "20px" }}>
        <Link to="/list">
          <button type="button" className="btn btn-primary" onClick={handleClick}>
            LIST
          </button>
        </Link>
      </div>
      <div>
        <Link to="/add">
          <button type="button" className="btn btn-primary">
            Add User
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Bouttons;
