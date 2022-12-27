import React from 'react'
import { Navigate } from 'react-router'
import { useAuth } from './context/authContext'

function ProtectedRoute({ children }) {
    const { user, loading } = useAuth()

    if (loading) return <>Loading</>
    
    if (!user || !localStorage.getItem('user')) return <Navigate to='/login' />

    return <>{children}</>
}

export default ProtectedRoute