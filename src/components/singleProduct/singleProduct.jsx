import data from '../../product_data'
import { useParams } from 'react-router-dom'
import '../singleProduct/singleProduct.css'

function SingleProduct() {
  const queryParms = useParams()
  const filteredProduct = data.products.filter(x => x.id === Number(queryParms.id))
  let product = filteredProduct[0]



  return (
    <div className="product-page">
      <div className="product-card">
        <img src={product.thumbnail} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>

        <div className="product-info">
          <p><span>Price:</span> ${product.price}</p>
          <p><span>Category:</span> {product.category}</p>
          <p><span>Brand:</span> {product.brand}</p>
          <p><span>Rating:</span> {product.rating}/5</p>
          <p><span>Stock:</span> {product.stock}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
