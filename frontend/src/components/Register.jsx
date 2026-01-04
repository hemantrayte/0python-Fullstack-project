import React, { useState } from 'react'
import axios from "axios"

const Register = () => {
  // const [username, setUsername] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:""
  })

  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', formData)
      console.log("data:", response.data)
      console.log('registartion Successfully')
      setFormData({
        username:"",
        email:"",
        password:""
      })
      setErrors({})
      setSuccess(true)
    } catch (error) {
      setErrors(error.response.data)
      console.log("Registration error: ", error.response.data)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
     <div className='container'>
       <div className="row justify-content-center">
        <div className="col-md-6 bg-light-dark p-5 rounded">
          <h3 className="text-light text-center mb-4">
            Create an Account
          </h3>
          <form onSubmit={handleRegistration}>

            {/* username  */}
            <div className='mb-3'>
              <input onChange={handleInputChange} value={formData.username} name='username' type="text" className='form-control' placeholder='Enter username'  />
            {/* error username */}
            <small>{errors.username && <div className='text-danger'>{errors.username}</div>}</small>
            </div>

            <div className='mb-3'>
              <input onChange={handleInputChange} value={formData.email} name='email' type="email" className='form-control mb-3' placeholder='Enter email' />

              {/* error email */}
            <small>{errors.email && <div className='text-danger'>{errors.email}</div>}</small>
            </div>
            
            <div className='mb-5'>
              <input onChange={handleInputChange} type="password" className='form-control' value={formData.password} name='password' placeholder='Set Password' />

              {/* error password */}
            <small>{errors.password && <div className='text-danger'>{errors.password}</div>}</small>
            </div>
            {
              success && <div className="alert alert-success">Registration Successfull</div>
            }


            {/* button is loading on conditional rendering */}
            {loading ? (
              <button  type="submit" className='btn btn-info d-block mx-auto' disabled>Please Wait...</button>
            ) : (
              <button  type="submit" className='btn btn-info d-block mx-auto'>Register</button>
            )}

          </form>
        </div>
       </div>
     </div>
    </>
  )
}

export default Register
