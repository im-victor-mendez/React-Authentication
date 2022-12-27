import React from 'react'
import { useAuth } from "../context/authContext";

function Home() {
    const { user } = useAuth()
  return (
    <section id='home'>
        <p>Welcome {user.email}</p>
    </section>
  )
}

export default Home