import React, { useState, useEffect } from 'react'
import StyledProduct from './Product.styled'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Banner } from '../../components/Banner'
import { FilterBar } from '../../components/FilterBar'
import {
    StyleBannerLayout,
    StyleBannerContainer,
    StyleBannerTitle,
    StyleBannerUrl
} from '../../components/Banner/Banner.styled';
export interface IProductDetail {
    name: string
    description: string
}
export interface PropductDetailProps {
    product: IProductDetail
}

const ProductDetail: React.FC<PropductDetailProps> = (props) => {
    const url = "http://lezada-next.themesmummy.com/assets/images/backgrounds/breadcrumb-bg-1.png";
    return (
        <>
            {/* <Header />
            <h2>{props.product?.name}</h2>
            <StyledProduct dangerouslySetInnerHTML={{ __html: props.product?.description }} />
            <Footer /> */}
            <Banner imageUrl="" currentUrl="" title="SayHello" />
            <FilterBar orderAces={true} perPageItem="1" totalItem="60" />

            
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


