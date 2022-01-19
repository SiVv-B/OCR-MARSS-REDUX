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
        <a className="navbar-brand">OCR-MARSS</a>
        {isAuth ? (
          <button onClick={handleClick}>LOG OUT</button>
        ) : (
          <div>
              <Link to="/" className="navbar-brand">
              Home
            </Link>
            <Link to="/register" className="navbar-brand">
              Register
            </Link>
            <Link to="/login" className="navbar-brand">
              Login
            </Link>
            <Link to="/bouttons" className="navbar-brand">
              user management
            </Link>
            <Link to="/list" className="navbar-brand">
              user list
            </Link>
            <Link to="/add"  className="navbar-brand">       
            Add User
        </Link>
        <Link to="/intervenantsBoutton"  className="navbar-brand">       
            Intervenant management
        </Link>
        <Link to="/intervenantsListe"  className="navbar-brand">       
            Intervenant liste
        </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
