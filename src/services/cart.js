export const getProductsOnCart = () => {
  const productsOnCart = localStorage.getItem("products")
  if (productsOnCart) {
    const cartProducts = JSON.parse(productsOnCart)
    return cartProducts
  }
  return []
}

export const addFirstProduct = (name, price) => {
  const firstProduct = JSON.stringify([
    { prodName: name, prodPrice: price, qtd: 1 }
  ])
  localStorage.setItem("products", firstProduct)
}

export const addNewProduct = (productsOnCart, name, price) => {
  const newCartProducts = [
    ...productsOnCart,
    { prodName: name, prodPrice: price, qtd: 1 }
  ]
  localStorage.setItem("products", JSON.stringify(newCartProducts))
}

export const increaseQtd = (productsOnCart, name) => {
  const newCartProducts = productsOnCart.map(product => {
    if (product.prodName === name) {
      product.qtd = product.qtd + 1
      return product
    } else {
      return product
    }
  })
  localStorage.setItem("products", JSON.stringify(newCartProducts))
}

export const decreaseQtd = (productsOnCart, name) => {
  const newCartProducts = productsOnCart.map(product => {
    if (product.prodName === name) {
      if (product.qtd == 0) {
        return product
      }
      product.qtd = product.qtd - 1
      return product
    } else {
      return product
    }
  })
  localStorage.setItem("products", JSON.stringify(newCartProducts))
}

export const removeProduct = (productsOnCart, name) => {
  const newCartProducts = productsOnCart.filter(product => {
    return product.prodName != name
  })
  localStorage.setItem("products", JSON.stringify(newCartProducts))
}

export const cleanCart = () => {
  localStorage.removeItem("products")
}
