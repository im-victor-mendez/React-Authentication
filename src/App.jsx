import { Routes } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './context/authContext'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
