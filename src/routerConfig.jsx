import Layout from './components/Layout'
import CartLayout from './components/CartLayout'
import { HomePage, AboutPage, AddProductPage, CartPage, NotFoundPage, ProductDetailPage } from './pages'

const routerConfig = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/product/:productId',
        element: <ProductDetailPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/add-product',
        element: <AddProductPage />,
      },
    ],
  },
  {
    element: <CartLayout />,
    children: [
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]

export default routerConfig
