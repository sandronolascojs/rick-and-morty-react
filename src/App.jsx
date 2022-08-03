import { Routes, Route } from 'react-router-dom'
import ListCharacters from './pages/ListCharacters.jsx'
import './App.css'
import PageCharacter from './pages/PageCharacter.jsx'

function App() {
  return (
      <Routes>
        <Route path='/' element={<ListCharacters />}/>
        <Route path='/character/:id' element={<PageCharacter />} />
      </Routes>
  )
}

export default App
