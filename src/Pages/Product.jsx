import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import BreadCrumb from '../Components/Breadcrumbs/Breadcrumb.jsx';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx';
import { ShopContext } from '../Context/ShopContext.jsx';
import Descriptionbox from '../Components/Descriptionbox/Descriptionbox.jsx';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts.jsx';
function Product() {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e) => e.id === Number(productId));
return(<div>
    <BreadCrumb product={product}/>
    <ProductDisplay product={product}/>
    <Descriptionbox/>
    <RelatedProducts/>
</div>)
}
export default Product;