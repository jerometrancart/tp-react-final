import { productList } from "../../datas/ProductList";


import ProductItem from "./ProductItem";

import "../../styles/Product/Products.css";

function Products() {
  return (
    <div className="Products">
      <h1>Produits</h1>
      <div>
        {productList.map((product, id) => (
          <div key={id}>
            <ProductItem product={product}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;