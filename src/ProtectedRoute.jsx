import React from 'react'
import { Navigate } from 'react-router'
import { useAuth } from './context/authContext'

function ProtectedRoute({ children }) {
    //To add loading component
    const { user } = useAuth()

    if (!user) return <Navigate to='/login' />

    return <>{children}</>
}

export default ProtectedRoute