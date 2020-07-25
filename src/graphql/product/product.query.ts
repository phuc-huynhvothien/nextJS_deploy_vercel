import { gql } from 'apollo-boost'

export const GET_PRODUCTS = gql`
  query getAllProduct($input: GetAllProductInput!) {
    getAllProduct(input: $input) {
      data {
        id
        sku
        name
        price
        finalPrice
        promotionPercent
        namePath
        imgUrl
      }
    }
  }
`

export const GET_PRODUCT = gql`
  query GetProduct($input: GetProductDetailInput!) {
    getProductDetail(input: $input) {
      id
      name
      price
      images
      description
    }
  }
`

// export const SIGN_IN = gql`
// mutation signIn{
//   signIn(input:{
//     email:"phuc@gmail.com"
//     password:"1234567"
//   }){
//     accessToken
//     nextToken
    
//   }
// }
// `

export const SIGN_IN = gql`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input) {
      accessToken
      nextToken
    }
  }
`
export const SIGN_UP = gql`
  mutation SignUp($input: SignUpInput!) {
    signUp(input: $input) {
      id 
      fullName 
      photoURL 
      email 
      accessToken 
      enable2FA 
      role
      QRCode
    }
  }
`