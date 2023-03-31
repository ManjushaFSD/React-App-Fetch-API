import React, { useState } from 'react'
import axios from "axios"

const Photoapp = () => {
  const apiLink = "https://jsonplaceholder.typicode.com/photos"
  var [photoList,changePhotos] = useState([

  
  ])
React.useEffect(
  
  ()=>{
    axios.get(apiLink).then(
      (response)=>{
       changePhotos(response.data) 
      }
    )
    console.log("Test")
  },[]
)
  return (
    <div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Album ID</th>
      <th scope="col">ID</th>
      <th scope="col">title</th>
      <th scope="col">url</th>
      <th scope="col">thumbnailurl</th>
    </tr>
  </thead>
  <tbody>
   {photoList.map((value,index) =>{
    return (
        <tr>
            <td>{value.albumId}</td>
            <td>{value.id}</td>
            <td>{value.title}</td>
            <td>{value.url}</td>
            <td>{value.thumbnailUrl}</td>
        </tr>
    )
   })}

  </tbody>
</table>


    </div>
  )
}

export default Photoapp