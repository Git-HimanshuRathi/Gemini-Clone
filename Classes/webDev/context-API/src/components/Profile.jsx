import React , {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext)

  if(!user) return <h3>No user found</h3>

  return <div>Welcome {user.userName}</div>
}

export default Profile