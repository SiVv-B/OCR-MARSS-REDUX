import React from "react";
import { useSelector } from "react-redux";
const UseProfile = () => {
  const user=useSelector(state=>state.AuthReducer.user)
  console.log('from userPRofile',user)
 
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <p className="card-text">{user&&user.username} </p>
        <p className="card-text">{user &&user.email}</p>
        
      </div>
    </div>
  );
};

export default UseProfile;
