import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/RM-CS')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-100  text-2xl p-4 flex items-center w-full'>
        <img src={data.avatar_url} alt='git-profile-picture' width={300} style={{borderRadius: "50%"}} />
        <div className="px-4"> 
            Github Profile: {data.name} <br />
            Github url: <Link to={data.html_url} target='_blank' className='underline text-blue-600'>{data.html_url}</Link>
        </div>
    </div>    
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/RM-CS')
    return response.json()
}