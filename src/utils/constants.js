export const API_BASE_URL = 'https://api.escuelajs.co/api/v1'

export const API_ENDPOINTS = {
  PRODUCTS: `${API_BASE_URL}/products`,
  PRODUCTS_AVAILABLES: `${API_BASE_URL}/products?offset=0&limit=6`,
  PRODUCTS_SUGGESTED: `${API_BASE_URL}/products?offset=6&limit=2`,
  PRODUCTS_SNACKS: `${API_BASE_URL}/categories/19/products?offset=0&limit=6`,
}
