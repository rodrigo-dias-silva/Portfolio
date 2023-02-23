import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Error from '../pages/error'

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}