import React from 'react'

import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import withApollo from '../utils/withApollo'
import { Banner } from '../components/Banner'
import { FilterBar } from '../components/FilterBar'
import { SearchBox } from '../components/SearchBox'
import { ProductTrend } from '../components/Product'
import { BodyContent, Row, Container, RightSide, LeftSide,Div,H3,ButtonDefault,TagA,H1,H2 } from '../common/StyleComponent'
import { ButtonTransparent } from '../components/ui-kits/ButtonTransparent'
import { Product } from '../components/Product'
import { ColorBox } from '../components/ui-kits/ColorBox'

import { Button } from 'reactstrap';
export const HomeContainer = styled.div``

export const StyledHomeBody = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  grid-template-columns: repeat(auto-fill, 220px);
  grid-gap: 10px;
`

function Home({ posts }) {
  // const { loading, error, data } = useQuery(GET_PRODUCTS, {
  //   variables: {
  //     input: {
  //       page: 1,
  //       keyword: 'Samsung',
  //     },
  //   },
  // })
  // if (error) return <h1>Error</h1>
  // if (loading) return <h1>Loading...</h1>

  // const products = data?.getAllProduct?.data
  // if (!products || !products.length) {
  //   return <p>Not found</p>
  // }
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
      discountPercent: "-10%",
      isNew: true,
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
      discountPercent: "-50%",
      isNew: false,
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
      isNew: true,
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
      discountPercent: "-12%",
      isNew: false,
      urlImage: "/product/p4.jpg",
      urlImageHover: "/product/p5.jpg",
    },

  ];
  return (
    <>
      
      <Banner imageUrl="/product/banner.png" currentUrl="Home / Shop Left Bar" title="Shop Welcome  ^__^" />
      <FilterBar orderAces={true} perPageItem="20" totalItem="60" />
      <BodyContent>
        <Container>
          <Row>
            <LeftSide>
              <Div >
                <SearchBox></SearchBox>
                <H2 style={{ paddingBottom: "20px" }}>Categories</H2>
                <ul>
                  {tagFull.map((item, index) =>
                    (
                      <li style={{ paddingBottom: "20px", listStyleType: "none" }} key={index}>
                        <ButtonTransparent active="" children={item.toString()} size="15" line="1.5" color="#7e7e7e" key={index} capitalize={true} ></ButtonTransparent>
                      </li>
                    ))}
                </ul>

                <H2 style={{ paddingBottom: "20px" }}>Color</H2>
                <Button color="success">success</Button>{' '}
                <ul style={{ listStyleType: "none",display:"inline-flex" }}>
                  <li >
                    <ColorBox colorText="red" isCircle={true} ></ColorBox>
                  </li>
                  <li>
                    <ColorBox colorText="yellow" isCircle={true} size="30" ></ColorBox>
                  </li>
                  <li>
                    <ColorBox colorText="gray" isCircle={false} size="35" ></ColorBox>
                  </li>
                  <li>
                    <ColorBox colorText="gray" isCircle={true}  reset={true} ></ColorBox>
                  </li>
                </ul>
                <ProductTrend></ProductTrend>
                <Div>
                  {tag.map((item, index) =>
                    (
                      <ButtonTransparent active="" children={item.toString() + " /"} size="15" line="1.5" color="#7e7e7e" key={index} ></ButtonTransparent>
                    ))}
                </Div>
              </Div>
            </LeftSide>
            <RightSide>
              {fakeProduct.map((item, index) => (
                <Product key={index} id={item.id} adminId={item.adminId}
                  price={item.price} priceDiscount={item.priceDiscount}
                  productId={item.productId} name={item.name}
                  discountPercent={item.discountPercent}
                  uid={item.uid} urlImage={item.urlImage}
                  isNew={item.isNew}
                  urlImageHover={item.urlImageHover}></Product>
              ))}
            </RightSide>
          </Row>
        </Container>
      </BodyContent>

     
    </>
  )
}
export async function getStaticProps() {
  const res = await fetch('https://min-shop.herokuapp.com/rest/product')
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  }
}
// export default withApollo({ ssr: true })(Home)
export default Home;