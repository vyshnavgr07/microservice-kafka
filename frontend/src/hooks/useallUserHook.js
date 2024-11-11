import { useEffect, useState } from "react"
import api from '../api/userinterceptor.js'

const useallUserHook = () => {

const [loading,setLoading]=useState(false);
const [user,setUser]=useState(null)

    const allUserHook=async()=>{
        try {
            console.log('first')
            const response=await api.post('/user/user')
            console.log(response,'respoo')
            setUser(response)
           
        } catch (error) {
            console.log(error,'errr')
        }
   
}

useEffect(()=>{
    allUserHook()
    },[]) 

return {loading,user}
}

export default useallUserHook