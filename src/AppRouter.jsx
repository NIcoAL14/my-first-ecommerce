import { Routes, Route } from 'react-router-dom'
import routes from './routerConfig'

function AppRouter() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}

      {routes.map((layout, index) => (
        <Route key={index} element={layout.element}>
          {layout.children?.map((child, childIndex) => (
            <Route key={childIndex} path={child.path} element={child.element} />
          ))}
        </Route>
      ))}
    </Routes>
  )
}

export default AppRouter
