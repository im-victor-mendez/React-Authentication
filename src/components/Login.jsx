import React, { useState } from 'react'

function Login() {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    function handleChange(event) {
        const target = event.target
        setUser({ ...user, [target.name]: target.value })
    }

  return (
    <section id='login'>
        {error && <>{error}</>}
        <form>
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