import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import Button from '../components/ui-kits/Button/Button'
import withApollo from '../utils/withApollo'
import { useQuery } from '@apollo/react-hooks'
import { GET_PRODUCTS } from '../graphql/product/product.query'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Card } from '../components/ui-kits/Card'
import Router from 'next/router'
import Link from 'next/link'
// import 'bootstrap/dist/css/bootstrap.min.css';
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
  return (
    <>
      <Head>
        <title>STRANGS Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Layout>
        <StyledHomeBody>
          {posts.data.map((data) => (
            <Card
              key={data.id}
              imageURL={data.image}
              buttonGroups={
                <>
                  <Link href="/product/[id]" as={`/product/${data.id}`}>
                    <a>View by Link</a>
                  </Link>
                  <Button onClick={() => Router.push(`/product/${data.id}`)}>View by Router</Button>
                  <Button>Add to Cart</Button>
                </>
              }
            >
              {data.name}
            </Card>
          ))}
          <h1>Hi</h1>
        </StyledHomeBody>
      </Layout>
      <Footer />
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