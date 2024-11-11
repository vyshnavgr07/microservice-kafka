import { useEffect, useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Alluser from './pages/Alluser'
import { useAuthContext } from './context/authContext'



function App() {
const [users,setUsers]=useState(null)

const fetchData=async()=>{
  try {
    const response=await fetch('https://jsonplaceholder.typicode.com/users');
const data=await response.json()
console.log(data,"data")
setUsers(data)
  } catch (error) {
    console.log(error,'err')
  }


}

useEffect(()=>{
fetchData()
},[])

console.log(users,'userss')
  return (
    <div className='bg-gray-600 w-full  h-screen justify-center items-center'>
      <div>
      {users?.map((x)=>(
     <h1  className='text-4xl'>{x.name}</h1>   
      ))}
       
        <button  >click</button>
      </div>

    </div>
  )
}

export default App
