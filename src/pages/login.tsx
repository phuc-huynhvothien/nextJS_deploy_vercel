import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import withApollo from '../utils/withApollo'
import { SIGN_IN } from '../graphql/product/product.query'
import { gql, useMutation } from '@apollo/client';
export interface ILogin {
    accessToken: string
    nextToken: string
  }

const Login: React.FC<ILogin> = (props) =>{
    const [
        updateTodo,
        { loading: mutationLoading, error: mutationError,data: mutationData },
      ] = useMutation(SIGN_IN);
      
    function handleLogin(e){
        e.preventDefault();
        updateTodo({ variables: {  email:"phuc@gmail.com", password:"1234567"} });
        console.log(mutationData);
    }
    
    return <>
       {mutationLoading && <p>Loading...</p>}
        {mutationError && <p>Error :( Please try again</p>}
        <button onClick={() => handleLogin(event)}>
            Click me!
      </button>
    </>
}
export default withApollo({ ssr: true })(Login)