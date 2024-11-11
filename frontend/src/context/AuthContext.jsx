import React, { createContext, useContext, useState } from 'react'

const AutUserContext=createContext();


export const useAuthContext=()=>{
return useContext(AutUserContext)
}









export const AuthContextProvider = ({children}) => {
  const [userAuth,setUserAuth]=useState(null)
  return (
    <div>
      <AutUserContext.Provider value={{userAuth,setUserAuth}}>
      {children}
      </AutUserContext.Provider>
      </div>
  )
}

