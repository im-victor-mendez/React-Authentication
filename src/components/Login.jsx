import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../context/authContext'

function Login() {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const { login } = useAuth()
    const navigate = useNavigate()

    function handleChange(event) {
        const target = event.target
        setUser({ ...user, [target.name]: target.value })
    }

    async function onSubmit() {
        try {
            await login(user.email, user.password)
            navigate('/')
        } catch (error) {
            setError(error)
        }
    }

  return (
    <section id='login'>
        {error && <>{error}</>}
        <form onSubmit={
            (event) => {
                event.preventDefault()
                onSubmit()
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
            <button type="submit">Login</button>
        </form>
    </section>
  )
}

export default Login