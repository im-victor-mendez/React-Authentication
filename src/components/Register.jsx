import React, { useState } from 'react'

function Register() {
  const [user, setUser] = useState({})

  function handleChange({ target: name, value }) {
    setUser({ ...user, [name]: value })
  }

  function onSubmit() {
    
  }

  return (
    <section id='register'>
        <form onSubmit={
          (event) => {
            event.preventDefault()

            onsubmit()
          }
        }>
            <label>
                Email:
                <input type="email" name="email" id="register-email" onChange={handleChange} />
            </label>

            <label>
                Password:
                <input type="password" name="password" id="register-password" onChange={handleChange} />
            </label>
        </form>
    </section>
  )
}

export default Register