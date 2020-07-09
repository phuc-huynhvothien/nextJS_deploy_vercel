import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { IProduct } from '../../models/IProduct'



const ProductDetail = () => {
    const router = useRouter()
    const { pid,foo } = router.query
    const initialProductDetail: IProduct = undefined

    const [productDetail, setProductDetail] = useState(initialProductDetail);

    useEffect(() => {
        if (pid !== undefined) {
            fetch(`https://min-shop.herokuapp.com/rest/product/${pid}`)
                .then(response => response.json())
                .then((response: IProduct) => {
                    setProductDetail(response);
                    console.log(productDetail);
                })
        }
    }, [pid])

    return (
        <>
        <h1>HIHI {pid} - {productDetail?productDetail.adminId : "EMPTY :)"}  </h1>
        </>
    )
}

export default ProductDetail


