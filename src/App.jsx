import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'

import AppRouter from './AppRouter'
import Loader from './components/Loader'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
