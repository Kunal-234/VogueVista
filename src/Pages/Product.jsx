import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Component/Breadcrums/Breadcrums';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';
import RelatedProduct from '../Component/RelatedProduct/RelatedProduct';

export default function Product() {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));

  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <RelatedProduct/>
    </div>
  )
}
