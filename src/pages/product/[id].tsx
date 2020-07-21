import React, { useState, useEffect } from 'react'
import StyledProduct from './Product.styled'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Banner } from '../../components/Banner'
import { FilterBar } from '../../components/FilterBar'
import { SearchBox } from '../../components/SearchBox'
import { BodyContent, Row, Container, RightSide, LeftSide } from '../../common/StyleComponent'
import { ButtonTransparent } from '../../components/ui-kits/ButtonTransparent'
import { Text } from '../../components/ui-kits/Text';
import { Product } from '../../components/Product'
export interface IProductDetail {
    name: string
    description: string
}
export interface PropductDetailProps {
    product: IProductDetail
}

const ProductDetail: React.FC<PropductDetailProps> = (props) => {
    const url = "http://lezada-next.themesmummy.com/assets/images/backgrounds/breadcrumb-bg-1.png";
    const tag = ["decor", "fashion", "men", "women", "cosmetics", "furniture", "perfumes", "wearable"];
    const tagFull = ["all categories", "decor", "fashion", "men", "women", "cosmetics", "furniture", "perfumes", "wearable"];
    const fakeProduct = [
        {
            id: "1",
            productId: 21,
            uid: "Product1_STK",
            name: "Product1",
            adminId: "SKT",
            price: "19.00",
            priceDiscount: "15.30",
            discountPercent :"-10%",
            isNew  : true,
            urlImage: "/product/p1.jpg",
            urlImageHover: "/product/p2.jpg", 
        },
        {
            id: "2",
            productId: 22,
            uid: "Product2_STK",
            name: "Product2",
            adminId: "SKT",
            price: "20.00",
            priceDiscount: "10.00",
            discountPercent :"-50%",
            isNew  : false,
            urlImage: "/product/p2.jpg",
            urlImageHover: "/product/p3.jpg", 
        },
        {
            id: "3",
            productId: 23,
            uid: "Product3_STK",
            name: "Product3",
            adminId: "SKT",
            price: "20.00",
            // priceDiscount: "16.00",
            // discountPercent :"-20%",
            isNew  : true,
            urlImage: "/product/p3.jpg",
            urlImageHover: "/product/p4.jpg", 
        },
        {
            id: "4",
            productId: 24,
            uid: "Product4_STK",
            name: "Product4",
            adminId: "SKT",
            price: "20.00",
            priceDiscount: "18.00",
            discountPercent :"-12%",
            isNew  : false,
            urlImage: "/product/p4.jpg",
            urlImageHover:  "/product/p5.jpg", 
        },

    ];
    return (
        <>
            <h1>Detail :)</h1>
        </>
    )
}
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://min-shop.herokuapp.com/rest/product')
    const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = posts.data.map(
        (product) => ({
            params: { id: product.id }
        })
    )

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://min-shop.herokuapp.com/rest/product/${params.id}`)
    const product = await res.json()
    return { props: { product } }
}
export default ProductDetail


