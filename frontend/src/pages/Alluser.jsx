import React from 'react'
import useallUserHook from '../hooks/useallUserHook'

const Alluser = () => {
    const {loading,user}=useallUserHook();

    console.log(user,'userrrr')
  return (
    <div>Alluser</div>
  )
}

export default Alluser