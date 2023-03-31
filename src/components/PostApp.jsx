import React, { useState } from 'react'
import axios from "axios"

const PostApp = () => {
  const apiLink = "https://jsonplaceholder.typicode.com/posts"
    var [PostAppList,changePostName] = useState([
        
          
    ])
    React.useEffect(
  
      ()=>{
        axios.get(apiLink).then(
          (response)=>{
           changePostName(response.data) 
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
      
      
      <th scope="col">UserId</th>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
    </tr>
  </thead>
  <tbody>
   {PostAppList.map((value,index) =>{
    return (
        <tr>
            <td>{value.userId}</td>
            <td>{value.id}</td>
            <td>{value.title}</td>
            <td>{value.body}</td>
          
        </tr>
    )
   })}

  </tbody>
</table>
    </div>
  )
}

export default PostApp