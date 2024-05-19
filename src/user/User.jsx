import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='bg-white text-black text-3xl p-4 mt-7 rounded-3xl'>
        User : {id}</div>
  )
}

export default User