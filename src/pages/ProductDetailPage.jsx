import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { API_ENDPOINTS } from '../utils/constants'

function ProductDetailPage() {
  const { productId } = useParams()
  const productUrl = `${API_ENDPOINTS.PRODUCTS}/${productId}`

  const { data, loading, error } = useFetch(productUrl)

  if (loading) return <div>Cargando producto...</div>
  if (error) return <div>Error al cargar el producto</div>

  return (
    <div className="product-detail">
      <h1>{data?.title}</h1>
      <img src={data?.imageUrl} alt={data?.title} />
      <p>{data?.description}</p>
      <p><strong>Precio:</strong> ${data?.price}</p>
    </div>
  )
}

export default ProductDetailPage
