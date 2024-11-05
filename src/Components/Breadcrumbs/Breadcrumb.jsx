import React, { useContext } from 'react';
import './Breadcrumb.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
function BreadCrumb(props) {
    const {product} = props;
return(<div className='breadcrumb'>
    HOME <img src={arrow_icon} alt=''/> SHOP <img src={arrow_icon} alt=''/>{product.category.toUpperCase()} 
    <img src={arrow_icon} alt=''/> {product.name}
</div>)
}
export default BreadCrumb;