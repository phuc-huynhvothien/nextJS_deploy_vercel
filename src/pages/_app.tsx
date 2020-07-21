import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../components/Theme'
function MyApp({ Component, pageProps }: AppProps) {
    return(<ThemeProvider theme={theme}>
        <Head>
            <title>STRANGS Template</title>
            <link rel="icon" href="/favicon.ico" />
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
                rel="stylesheet"
            ></link>
            <meta charSet="utf-8" />
            <link rel="manifest" href="/manifest.json" />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                rel="stylesheet"
            />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
            />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
    </ThemeProvider>)
     
}

export default MyApp

 