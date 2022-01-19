import React, { useEffect, useState } from "react";
import { deleteUser } from "../../Redux/Actions/UserActions";
import { useDispatch } from "react-redux";
import { updateUser,getOneUser } from "../../Redux/Actions/UserActions";
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
    age: 0,
  });
  const handleChange = (event) => {
    setupDated({ ...updatedUser, [event.target.id]: event.target.value });
  };
  const handleClick = () => {
    dispatch(deleteUser(user._id));
  };
  const handleEdit = (event) => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser(user._id, updatedUser));
    setupDated({ username: " ", email: " ", age: " " });
    setShow(false);
  };
  const getUser=()=>{
    dispatch(getOneUser(user._id))
    navigate('/details')
  }

  return (
    <div>
      <div className="card text-center" style={{ width: "500px" }}>
        <div className="card-header">User</div>
        <div className="card-body">
          <p>from UserCar</p>
          <h5 className="card-title">from UserCard{user.username}</h5>
          <p className="card-text">{user.email}</p>
          {user.age}
        </div>
        <div>
          <button type="button" class="btn btn-danger" onClick={handleClick}>
            Delete
          </button>
        </div>
        <button type="button" class="btn btn-success" onClick={handleEdit}>
          Update
        </button>

       <Link to={`/details/${user._id}`}>
        <button className="btn btn-primary" onClick={getUser}>see user</button>
        </Link>

        {show ? (
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label for="username">username</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="username"
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
                value={updatedUser.email}
              />
            </div>
            <div className="form-group">
              <label for="age">age</label>
              <input
                onChange={handleChange}
                type="number"
                className="form-control"
                id="age"
                value={updatedUser.age}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        ) : null}
      </div>
      <div></div>
    </div>
  );
};

export default UserCard;