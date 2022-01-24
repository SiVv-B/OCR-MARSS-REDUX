import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { logOut } from "../Redux/Actions/AuthActions"; 
const Navbar = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const handleClick=()=>{
    dispatch(logOut())
    navigate("/login")
  }
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" style={{color:'red'}}>OCR-MARSS</a>
        {isAuth ? (
          <button onClick={handleClick}>LOG OUT</button>
        ) : (null)}
          <div>
              <Link to="/" className="navbar-brand">
              Page d'accuil
            </Link>
            <Link to="/register" className="navbar-brand">
              Créer un compte
            </Link>
            <Link to="/login" className="navbar-brand">
              Se connecter
            </Link>
            <Link to="/list" className="navbar-brand">
              liste des clients
            </Link>
            <Link to="/add"  className="navbar-brand">       
           Ajouter un client
        </Link>
        <Link to="/intervenantsListe"  className="navbar-brand">       
            Liste des intervenants
        </Link>
        <Link to="/intervenant-add"  className="navbar-brand">       
            Ajouter un intervenant
        </Link>
        <Link to="/toutintervenantsdesclients"  className="navbar-brand">       
            liste intervenant relié user
        </Link>

          </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
