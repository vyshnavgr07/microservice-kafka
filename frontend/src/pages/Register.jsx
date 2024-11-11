import React from 'react'
import { useForm } from 'react-hook-form'
import useRegister from '../hooks/useRegister';

const Register = () => {
    const {register,handleSubmit,formState:{errors}}=useForm();
const {loading,registerhook}=useRegister()
    const onSubmit=async(data)=>{
       await  registerhook(data)
    }
  return (
 <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6"  onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" 
             {...register('email',{required:'email is required'})}
            name="email" type="email" autocomplete="email" 
            placeholder={errors.email?errors.email.message:"enter your email"}
            class={`block w-full rounded-md border-0 py-1.5 
                ${errors.email?'placeholder:text-center placeholder:text-red-600 placeholder:text-xl':'placeholder:text-center placeholder:text-gray-500'}
              text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
               placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6`}/>
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900">username</label>
          <div class="mt-2">
            <input    {...register('username')}    class="block w-full    rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"/>
          </div>
        </div>
  
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
           </div>
          <div class="mt-2">
            <input id="password"  {...register('password')} type="password" autocomplete="current-password" class={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 `}/>
          </div>
        </div>
  
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </form>
  
  
    </div>
  </div>
  
  )
}

export default Register