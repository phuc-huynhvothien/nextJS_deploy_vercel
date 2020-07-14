import React, { useState, useEffect } from 'react'
import StyledProduct from './Product.styled'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Banner } from '../../components/Banner'
import { FilterBar } from '../../components/FilterBar'
import { SearchBox } from '../../components/SearchBox'
import { BodyContent, Row, Container, RightSide, LeftSide } from '../../common/StyleComponent'
import { ButtonTransparent } from '../../components/ui-kits/ButtonTransparent'
import { Text } from '../../components/ui-kits/Text'
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
    return (
        <>
            <Header />
            <Banner imageUrl={url} currentUrl="Home / Shop Left Bar" title="Shop Welcome  ^__^" />
            <FilterBar orderAces={true} perPageItem="20" totalItem="60" />
            <BodyContent>
                <Container>
                    <Row>
                        <LeftSide>
                            <div className="shop-sidebar">
                                <SearchBox></SearchBox>
                                {/* searchbox */}
                                <h2 style={{ paddingBottom: "20px" }}>Categories</h2>
                                <ul>
                                    {tagFull.map((item, index) =>
                                        (
                                            <li style={{ paddingBottom: "20px", listStyleType: "none" }}>
                                                <ButtonTransparent active="" children={item.toString()} size="15" line="1.5" color="#7e7e7e" key={index} capitalize={true} ></ButtonTransparent>
                                            </li>
                                        ))}
                                </ul>
                                {/* categories */}

                                {/* color */}

                                {/* popular product */}
                                <div>
                                    {tag.map((item, index) =>
                                        (
                                            <ButtonTransparent active="" children={item.toString() + " /"} size="15" line="1.5" color="#7e7e7e" key={index} ></ButtonTransparent>
                                        ))}
                                </div>
                                {/* tags */}
                            </div>
                        </LeftSide>
                        <RightSide>

                        </RightSide>
                    </Row>
                </Container>
            </BodyContent>

            <Footer />



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


