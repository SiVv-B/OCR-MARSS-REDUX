import React from 'react'
import UserCard from "./UserCard"
import {useSelector} from "react-redux" 
 const UserList = () => {
     const users=useSelector(state=>state.UserReducer.users)
    console.log("users:", users)
     return (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
            {users.map((user)=> <UserCard key={user._id} user={user}/>)}

           
        </div>
    )
}
export default UserList