import React from "react"

import axios from "axios"

import Head from "next/head"
import Layout from "../components/Layout/Layout"
import NavBar from "../components/NavBar/NavBar"
import ImageSlider from "../components/ImageSlider/ImageSlider"

import Products from "../components/Products/Products"
import Footer from "../components/Footer/Footer"
import ContentContainer from "../components/Container/Container"

const Home = ({ products }) => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      <ImageSlider />
      <ContentContainer>
        <Products products={products} />
      </ContentContainer>
      <Footer />
    </Layout>
  )
}

Home.getInitialProps = async () => {
  const response = await axios.get("https://api.myjson.com/bins/9e9fl")
  return {
    products: response.data
  }
}

export default Home
