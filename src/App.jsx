import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './components/Register'
import { AuthProvider } from './context/authContext'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path='/register' element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
