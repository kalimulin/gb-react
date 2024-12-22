import ProductItem from "../ProductItem/ProductItem"

import "./ProductList.scss"

const ProductList = ({products}) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
