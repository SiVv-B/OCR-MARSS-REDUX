import React, { useEffect } from 'react'

import IconButton from '@mui/material/IconButton'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import Tooltip from '@mui/material/Tooltip'

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
    <div>
      <div>
        <Fab size="small" color="inherit" aria-label="add">
          <Tooltip title="Ajouter Un client">
            <IconButton>
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Fab>
      </div>
      <div style={{ 
        
    border:'solid',
          display: 'flex' , flexDirection: 'row',
          flexWrap: 'wrap',justifyContent: 'space-evenly',
          alignItems: 'center',
          alignContent: 'flex-start',
          width:'80%'
          }}>
  
        {users.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  )
}
export default UserList
