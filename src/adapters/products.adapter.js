export const productsAdapter = (product) => {
  const { id, title, price, description, images } = product

  const productAdapted = {
    id,
    title,
    price,
    description,
    imageUrl: images[0], // Tomamos la primera imagen del array
  }

  return productAdapted
}
