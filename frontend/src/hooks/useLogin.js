import { useState } from "react"
import api from "../api/userinterceptor";
import { useAuthContext } from "../context/authContext";


const useLogin = () => {
 const [loading,setLoading]=useState(false);
const {setUserAuth}=useAuthContext()
 const Login=async(data)=>{
    setLoading(true)
try {
    const response=await api.post('/login',data,{withCredentials:true})
    setUserAuth(response.data.existUser)
    console.log(response,'respoo')
    
} catch (error) {
   console.log(error) 
}finally{
    setLoading(false)
}
 }

 return {loading,Login}
}

export default useLogin