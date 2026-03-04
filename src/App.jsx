import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'

import AppRouter from './AppRouter'
import { Suspense } from 'react'
import Header from './components/Header'
import Loader from './components/Loader'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loader />}>
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
