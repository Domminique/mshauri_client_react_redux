import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Landing, Error, Register, ProtectedRoute } from './pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  Profile,
  AddJob,
  AllJobs,
  Mentees,
  Stats,
  SharedLayout,
} from './pages/dashboard'
import Footer from './components/Footer'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
          <Route path='mentees' element={<Mentees />} />
        </Route>
        <Route path='landing' element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' />
      <Footer />
    </BrowserRouter>
  )
}

export default App
