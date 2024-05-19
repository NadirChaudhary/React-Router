import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
        
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    // },[])

  return (
    <div className='bg-white text-center mt-7 rounded-3xl text-gray-700 p-4 text-3xl font-semibold'>
        Github

        <div className='flex justify-center items-center p-4'>
        <img src={data.avatar_url} className='rounded-full h-96 w-96'/>
        </div>

        <p className='p-4 text-xl text-black font-normal'>Github followers : {data.followers} </p>

    </div>
  )
}

export default Github




export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}