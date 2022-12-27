import React from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from "../context/authContext";

function Home() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    async function logOut() {
        await logout()
        navigate('/login')
    }

  return (
    <section id='home'>
        <p>Welcome {user.email}</p>
        <button onClick={logOut}>Logout</button>
    </section>
  )
}

export default Home