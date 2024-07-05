import './App.css'
import Login from './components/login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Protect from './components/protect'
import Home from './pages/home'
import Firstpage from './pages/firstpage'
import Register from './components/register'
import AdminPanel from './pages/AdminPanel'

function App() {

  return (
    <Router>
      <div className=''>
        <Routes>
            <Route path='/' element={<Firstpage />} />
            <Route path="/register" element={<Register />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/home' element={
              <Protect role="user"><Home/></Protect>
            }
            />
            <Route path='/admin/userlist' element={
              <Protect role="admin"><AdminPanel/></Protect>
            }
            />
            <Route path='*' element='404 Not Found'/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
