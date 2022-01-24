import React, { useEffect } from 'react'
import { GetUsers } from '../../Redux/Actions/UserActions'
import UserCard from './UserCard'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const UserList = () => {
    const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetUsers())
  }, [dispatch])

  const users = useSelector((state) => state.UserReducer.users)
  console.log('Users list:', users)
  
  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      {users.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
    </div>
  )
}
export default UserList
