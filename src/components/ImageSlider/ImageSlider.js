/**
 * Componente de terceiro para geração de Slider de imagens
 * Documentação completa => https://www.npmjs.com/package/react-responsive-carousel
 * @name ImageSlider
 * @component
 * @param {boolean} showThumbs Define se mostra ou não thumbs das imagens
 * @param {boolean} autoPlay Define se começa a rotacionar as imagens automaticamente
 * @param {boolean} infiniteLoop Define se continua rotacionando as imagens infinitamente
 * @param {boolean} showArrows Define se mostra ou não setas para trocar a imagem
 * @param {boolean} showStatus Define se mostra ou não o status de qual imagem está sendo exibida
 * @returns {function} Componente Slider de imagens
 */

import React, { Component } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

class ImageSlider extends Component {
  render() {
    return (
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
      >
        <div>
          <img src="../../images/banner.jpg" />
        </div>
        <div>
          <img src="../../images/banner.jpg" />
        </div>
        <div>
          <img src="../../images/banner.jpg" />
        </div>
      </Carousel>
    )
  }
}

export default ImageSlider
