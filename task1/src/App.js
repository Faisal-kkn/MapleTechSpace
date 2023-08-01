import React, { useState } from 'react';
import { HiOutlineUser } from 'react-icons/hi';
import { FiMail } from 'react-icons/fi';
import { BiLock, BiLogoLinkedin } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

const socialMedia = [
  FaFacebookF,
  AiOutlineGooglePlus,
  BiLogoLinkedin
]

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm({ name: '', email: '', password: '' });

  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleFormSubmit = () => {
    console.log(formData);
  }

  return (
    <main className='flex justify-center items-center w-full min-h-screen px-4'>
      <div className="bg-white rounded-2xl shadow-2xl lg:flex overflow-hidden md:w-4/5 lg:w-3/5">
        <SideBar />
        <div className='lg:w-2/4 flex-1'>
          <div className="py-10 text-center">
            <h2 className='text-3xl font-bold text-green-500 '> Create Account </h2>
            <div className='flex gap-2 my-5 justify-center'>
              {
                socialMedia.map((item) => {
                  return (

                    <div className='border-[1px] border-gray-400/50 rounded-full'>
                      <SocialMedia Icon={item} />
                    </div>
                  )
                })
              }
            </div>
            <p className='text-gray-400 mb-4 text-sm'>or use your email for registration:</p>
            <div className='flex flex-col items-center'>
              <form className='w-full' onSubmit={handleSubmit(handleFormSubmit)}>
                <div className='mx-auto w-[75%]'>
                  <div className='bg-gray-100 p-2 flex items-center'>
                    <HiOutlineUser className='text-gray-400 m-2 h-5 w-5' />
                    <input type="text" value={formData?.name} {...register('name', { required: true, minLength: 4, maxLength: 20 })} onChange={handleChange} id="name" placeholder='Name' className='bg-gray-100 outline-none text-sm font-medium flex-1' />
                  </div>
                  <p className='font-normal text-xs m-0  mb-3 text-left text-red-600'> {errors.name && 'Name is required and min 4 max 20'}</p>
                  <div className='bg-gray-100 p-2 flex items-center'>
                    <FiMail className='text-gray-400 m-2 h-5 w-5' />
                    <input type="email" value={formData?.email} {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} onChange={handleChange} id="email" placeholder='Email' className='bg-gray-100 outline-none text-sm font-medium flex-1' />
                  </div>
                  <p className='font-normal text-xs m-0  mb-3 text-left text-red-600'> {errors.email && 'Email is required'}</p>
                  <div className='bg-gray-100 p-2 flex items-center'>
                    <BiLock className='text-gray-400 m-2 h-5 w-5' />
                    <input type="password" value={formData?.password} {...register("password", { required: true, pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[^\s]+$/ })} onChange={handleChange} id="password" placeholder='Password' className='bg-gray-100 outline-none text-sm font-medium flex-1' />
                  </div>
                  <p className='font-normal text-xs m-0  mb-3 text-left text-red-600'> {errors.password && 'Password is required (Should be at least one Capital letter, symbol and number)'}</p>
                  <Button background={true} content={'Sign up'} type={true} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function SideBar() {
  return (
    <div className='lg:w-2/5 bg-green-500 text-white py-12 px-4 text-center relative flex flex-col items-center justify-center'>
      <div className='text-left font-bold absolute top-3 left-3'><span className="text-green-200">Dip</span>Rella</div>
      <h2 className='text-4xl font-bold mb-5'>Welcome Back!</h2>
      <p className='mb-10 text-sm'>To keep connected with us please <br className='hidden lg:block' /> login with your personal info</p>
      <Button background={false} content={'Sign In'} />
    </div>
  );
}

function SocialMedia({ Icon }) {
  return (
    <div className='border-[1px] border-gray-400/50 rounded-full'>
      <Icon className='text-gray-600 m-2 h-4 w-4' />
    </div>
  )
}

function Button({ background, content, type }) {
  return (
    <button type={type ? 'submit' : 'button'} className={`${background ? 'bg-green-500 hover:bg-transparent hover:border-green-500 border-transparent' : 'hover:bg-white border-white'} hover:text-green-500 text-white rounded-full px-12 py-3 inline-block font-semibold uppercase border-2`}>{content}</button>
  )
}

export default App;
