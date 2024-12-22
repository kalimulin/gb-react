import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs"

import products from "../../data"

import "./Product.scss"
import {useParams} from "react-router-dom";

const Product = () => {
    let params = useParams()
    const product = products.find(product => +product.id === +params.id)
    const {id, title, imageUrl} = product

    return (
      <div className="product-page">
          <Breadcrumbs title={'NEW ARRIVALS'} path={'HOME / MEN / <span>NEW ARRIVALS</span>'} />
          <section className="product-page__slideshow slideshow">
              <div className="slideshow__prev">
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="none">
                      <path d="m21.7 7.75-7.75 7.75 7.75 7.75-1.55 3.1L9.3 15.5 20.15 4.65l1.55 3.1Z"></path>
                  </svg>
              </div>
              <div className="slideshow__next">
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="none">
                      <path d="m21.7 7.75-7.75 7.75 7.75 7.75-1.55 3.1L9.3 15.5 20.15 4.65l1.55 3.1Z"></path>
                  </svg>
              </div>
              <div className="slideshow__slides">
                  <div className="slideshow__slide">
                      <img src={`../../${imageUrl}`} alt="product"/>
                  </div>
              </div>
          </section>
          <div className="product-page__texts">
              <div className="container">
                  <div className="product-page__title1">WOMEN COLLECTION</div>
                  <div className="product-page__title2">{title}</div>
                  <p className="product-page__desc">Compellingly actualize fully researched processes before proactive
                      outsourcing. Progressively syndicate collaborative architectures before cutting-edge services.
                      Completely visualize parallel core competencies rather than exceptional portals. </p>
                  <div className="product-page__price">$561</div>
                  <div className="product-page__chooses">
                      <div className="product-page__choose"><span>CHOOSE COLOR</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" fill="none">
                              <path
                                d="M5.002 5.648a.71.71 0 0 1-.457-.165L.258 1.88A.723.723 0 0 1 .65.607a.711.711 0 0 1 .523.164l3.83 3.228L8.831.885a.712.712 0 0 1 1.007.108.722.722 0 0 1-.1 1.052l-4.287 3.48a.71.71 0 0 1-.45.122Z"></path>
                          </svg>
                      </div>
                      <div className="product-page__choose"><span>CHOOSE SIZE</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" fill="none">
                              <path
                                d="M5.002 5.648a.71.71 0 0 1-.457-.165L.258 1.88A.723.723 0 0 1 .65.607a.711.711 0 0 1 .523.164l3.83 3.228L8.831.885a.712.712 0 0 1 1.007.108.722.722 0 0 1-.1 1.052l-4.287 3.48a.71.71 0 0 1-.45.122Z"></path>
                          </svg>
                      </div>
                      <div className="product-page__choose"><span>QUANTITY</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" fill="none">
                              <path
                                d="M5.002 5.648a.71.71 0 0 1-.457-.165L.258 1.88A.723.723 0 0 1 .65.607a.711.711 0 0 1 .523.164l3.83 3.228L8.831.885a.712.712 0 0 1 1.007.108.722.722 0 0 1-.1 1.052l-4.287 3.48a.71.71 0 0 1-.45.122Z"></path>
                          </svg>
                      </div>
                  </div>
                  <a href="#/cart" className="product-page__button-add">
                      <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M26.1998 29C25.5521 28.9738 24.9404 28.6948 24.4961 28.2227C24.0518 27.7506 23.8103 27.1232 23.8234 26.475C23.8365 25.8269 24.1032 25.2097 24.5662 24.7559C25.0292 24.3022 25.6516 24.048 26.2999 24.048C26.9482 24.048 27.5706 24.3022 28.0336 24.7559C28.4966 25.2097 28.7633 25.8269 28.7764 26.475C28.7895 27.1232 28.5479 27.7506 28.1036 28.2227C27.6593 28.6948 27.0477 28.9738 26.3999 29H26.1998ZM6.75183 26.32C6.75183 25.79 6.90901 25.2718 7.20349 24.8311C7.49797 24.3904 7.91654 24.0469 8.40625 23.844C8.89596 23.6412 9.43484 23.5881 9.95471 23.6915C10.4746 23.7949 10.9521 24.0502 11.3269 24.425C11.7017 24.7998 11.957 25.2773 12.0604 25.7972C12.1638 26.317 12.1107 26.8559 11.9078 27.3456C11.705 27.8353 11.3615 28.2539 10.9208 28.5483C10.4801 28.8428 9.96194 29 9.43188 29C9.07977 29.0003 8.73102 28.9311 8.40564 28.7966C8.08026 28.662 7.7846 28.4646 7.53552 28.2158C7.28645 27.9669 7.08891 27.6713 6.9541 27.3461C6.81929 27.0208 6.74988 26.6721 6.74988 26.32H6.75183ZM10.5519 20.686C10.2924 20.6868 10.0398 20.6024 9.83301 20.4457C9.62617 20.2891 9.47648 20.0689 9.40686 19.819L4.57385 2.36401H1.18091C0.867422 2.36401 0.566761 2.23947 0.345093 2.01781C0.123425 1.79614 -0.00109863 1.49549 -0.00109863 1.18201C-0.00109863 0.868519 0.123425 0.567873 0.345093 0.346205C0.566761 0.124537 0.867422 5.81268e-06 1.18091 5.81268e-06H5.46191C5.7214 -0.00080736 5.97394 0.0837201 6.18066 0.240568C6.38739 0.397416 6.53674 0.617884 6.60583 0.868006L11.4388 18.323H24.6168L28.9999 8.27501H14.3999C14.2417 8.27961 14.0843 8.25242 13.9368 8.19507C13.7893 8.13771 13.6548 8.05134 13.5413 7.94108C13.4277 7.83082 13.3375 7.69891 13.2759 7.55315C13.2143 7.40739 13.1825 7.25075 13.1825 7.0925C13.1825 6.93426 13.2143 6.77762 13.2759 6.63186C13.3375 6.4861 13.4277 6.35419 13.5413 6.24393C13.6548 6.13367 13.7893 6.0473 13.9368 5.98994C14.0843 5.93259 14.2417 5.90541 14.3999 5.91001H30.8129C31.0086 5.90996 31.2011 5.95866 31.3733 6.05172C31.5454 6.14478 31.6917 6.27926 31.7988 6.44301C31.9067 6.60729 31.9723 6.79569 31.9897 6.99145C32.0072 7.18721 31.976 7.38424 31.8989 7.565L26.4939 19.977C26.4015 20.1876 26.2499 20.3668 26.0574 20.4927C25.8649 20.6186 25.6399 20.6858 25.4099 20.686H10.5519Z"></path>
                      </svg>
                      <span>Add to Cart</span></a></div>
          </div>
          <div className="product-page__other-products">
              <div className="container">
                  <div className="product-list">
                      <div className="product-list__items">
                          <div className="product-list__item">
                              <div className="product-list__image">
                                  <img src="../../img/" alt="product-list"/>
                                  <div className="product-list__overlay">
                                      <div className="product-list__add"><img className="product-list__add-icon"
                                                                              src="img/icon-cart.02c7b4eb.svg"
                                                                              alt="cart"/><span>Add to Cart</span></div>
                                  </div>
                              </div>
                              <a aria-current="page" href="#/product"
                                 className="router-link-active router-link-exact-active product-list__item-text">
                                  <div className="product-list__item-title">ELLERY X M'O CAPSULE</div>
                                  <div className="product-list__item-desc">Known for her sculptural takes on traditional
                                      tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.
                                  </div>
                                  <div className="product-list__item-price">$52.00</div>
                              </a></div>
                          <div className="product-list__item">
                              <div className="product-list__image"><img src="img/products/2.png" alt="product-list"/>
                                  <div className="product-list__overlay">
                                      <div className="product-list__add"><img className="product-list__add-icon"
                                                                              src="img/icon-cart.02c7b4eb.svg"
                                                                              alt="cart"/><span>Add to Cart</span></div>
                                  </div>
                              </div>
                              <a aria-current="page" href="#/product"
                                 className="router-link-active router-link-exact-active product-list__item-text">
                                  <div className="product-list__item-title">ELLERY X M'O CAPSULE</div>
                                  <div className="product-list__item-desc">Known for her sculptural takes on traditional
                                      tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.
                                  </div>
                                  <div className="product-list__item-price">$52.00</div>
                              </a></div>
                          <div className="product-list__item">
                              <div className="product-list__image"><img src="img/products/3.png" alt="product-list"/>
                                  <div className="product-list__overlay">
                                      <div className="product-list__add"><img className="product-list__add-icon"
                                                                              src="img/icon-cart.02c7b4eb.svg"
                                                                              alt="cart"/><span>Add to Cart</span></div>
                                  </div>
                              </div>
                              <a aria-current="page" href="#/product"
                                 className="router-link-active router-link-exact-active product-list__item-text">
                                  <div className="product-list__item-title">ELLERY X M'O CAPSULE</div>
                                  <div className="product-list__item-desc">Known for her sculptural takes on traditional
                                      tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.
                                  </div>
                                  <div className="product-list__item-price">$52.00</div>
                              </a></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default Product
