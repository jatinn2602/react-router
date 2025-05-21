import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
  return (
    <div className='flex bg-gray-700 text-center'> 
      User: {userid}
    </div>
  )
}

export default User
