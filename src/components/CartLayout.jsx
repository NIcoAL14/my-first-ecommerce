import { Outlet } from 'react-router-dom'

function CartLayout() {
  return (
    <>
      <h1>CartLayout Header</h1>
      <Outlet />
    </>
  )
}

export default CartLayout
