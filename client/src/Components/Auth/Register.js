import React, { useState } from "react"
import { register } from "../../Redux/Actions/AuthActions"
import { useDispatch } from "react-redux"
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
import AuthReducer from "../../Redux/Reducers/UserReducer"

const Register = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    username: " ",
    email: " ",
    password: " ",
    SelectedFile:" ",
  })
  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value })
  }
  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(register(user,navigate))
    setUser({
      username: " ",
      email: " ",
      password: " ",
      SelectedFile:" ",
    })
  }
  
  
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label for="username">Username</label>
        <input
          value={user.username}
          onChange={handleChange}
          type="text"
          className="form-control"
          id="username"
          aria-describedby="emailHelp"
          placeholder="Enter username"
        />
      </div>
      <div className="form-group">
        <label for="email">Email address</label>
        <input
          value={user.email}
          onChange={handleChange}
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input
          value={user.password}
          onChange={handleChange}
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <label for="SelectedFile">Logo/image de l'entreprise client</label>
        <input
          value={user.SelectedFile}
          onChange={handleChange}
          type="text"
          className="form-control"
          id="SelectedFile"
          placeholder="logo photo"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Creer un compte
      </button>
    </form>
  )
}

export default Register
