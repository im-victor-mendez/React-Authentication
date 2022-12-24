import './App.css'
import { AuthProvider } from './context/authContext'

function App() {
  return (
    <div className="App">
      <AuthProvider>
      </AuthProvider>
    </div>
  )
}

export default App
