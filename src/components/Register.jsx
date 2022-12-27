import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from "../context/authContext";

function Register() {
  const [user, setUser] = useState({})
  const [error, setError] = useState('')

  const { signUp } = useAuth()
  const navigate = useNavigate()

  function handleChange(event) {
    const target = event.target
    setUser({ ...user, [target.name]: target.value })
  }

  async function onSubmit() {
    try {
      await signUp(user.email, user.password)
      setUser({email: '', password: ''})
      setError('')
      navigate('/')
    } catch (error) {
      {/* To personalize errors */}
      setError(error.message)
    }
  }

  return (
    <section id='register'>
      {error && <>{error}</>}
        <form onSubmit={
          (event) => {
            event.preventDefault()

            onSubmit(event)
          }
        }>
            <label>
                Email:
                <input type="email" name="email" id="register-email" value={user.email} onChange={handleChange} />
            </label>

            <label>
                Password:
                <input type="password" name="password" id="register-password" value={user.password} onChange={handleChange} />
            </label>
            <button type="submit">Register</button>
        </form>
    </section>
  )
}

export default Register