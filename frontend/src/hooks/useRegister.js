import { useState } from "react"
import api from "../api/userinterceptor"

const useRegister = () => {
const [loading,setLoading]=useState(false)

const registerhook=async (data)=>{
setLoading(true)
    try {
    const response=await api.post('/signup',data,{withCredentials:true})

    } catch (error) {
        console.log(error)
    }finally{
setLoading(false)
    }
}

return {loading,registerhook}
}

export default useRegister