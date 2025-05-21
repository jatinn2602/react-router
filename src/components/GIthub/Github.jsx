import React, { useEffect, useState } from 'react'
import { data, useLoaderData } from 'react-router-dom'


function Github() {
    const data=useLoaderData()
    // method-1 to fetch data but this is not optimized as compared as to method-2
    // const [data, setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/jatinn2602')
    //     .then(response=> response.json())
    //     .then(data=> {
    //         console.log(data);
    //         setData(data)
            
    //     })
    // },[])

  return (
    <div>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

// Method-2 to fetch data using methods
export const toGetGithubInfo=async()=>{
    const response= await fetch('https://api.github.com/users/jatinn2602')
    return response.json()
}

