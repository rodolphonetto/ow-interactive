import React from "react"

import Head from "next/head"
import Layout from "../components/Layout/Layout"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import ContentContainer from "../components/Container/Container"
import CartList from "../components/CartList/CartList"

const Cart = ({}) => {
  return (
    <Layout>
      <Head>
        <title>Cart</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      <ContentContainer>
        <CartList />
      </ContentContainer>
      <Footer />
    </Layout>
  )
}

export default Cart
