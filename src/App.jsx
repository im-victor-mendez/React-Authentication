import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import ProtectedRoute from './ProtectedRoute'
import { AuthProvider } from './context/authContext'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
            <Route path='/' element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
