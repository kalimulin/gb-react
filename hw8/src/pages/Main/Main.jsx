import { Link } from "react-router-dom"
import ProductItem from "../../components/ProductItem/ProductItem"
import { HandySvg } from "handy-svg"

import products from "../../data"

import top_brand_img from "../../img/top_brand_img.png"
import top_brand_title from "../../img/top_brand_title.svg"

import { ReactComponent as FeatureDelivery_icon } from "../../img/feature_icon1.svg"
import { ReactComponent as FeatureDiscount_icon } from "../../img/feature_icon2.svg"
import { ReactComponent as FeatureQuality_icon } from "../../img/feature_icon3.svg"

import "./Main.scss"

function MainPage() {
  return (
    <div className="home-page">
      <div className="content">
        <section className="banner">
          <div className="banner__left">
            <img src={top_brand_img} className="banner__left-img" alt="banner"/>
          </div>
          <div className="banner__text-block">
            <div className="banner__title">THE BRAND</div>
            <div className="banner__subtitle">OF LUXERIOUS <span>FASHION</span></div>
          </div>
        </section>
        <section className="sections">
          <div className="container">
            <Link to="/catalog" className="sections__item section section_for_women">
              <div className="section__text">
                <div className="section__text1">30% OFF</div>
                <div className="section__text2">FOR WOMEN</div>
              </div>
            </Link>
            <Link to="/catalog" className="sections__item section section_for_men">
              <div className="section__text">
                <div className="section__text1">HOT DEAL</div>
                <div className="section__text2">FOR MEN</div>
              </div>
            </Link>
            <Link to="/catalog" className="sections__item section section_for_kids">
              <div className="section__text">
                <div className="section__text1">NEW ARRIVALS</div>
                <div className="section__text2">FOR KIDS</div>
              </div>
            </Link>
            <Link to="/catalog" className="sections__item section section_for_accesories">
              <div className="section__text">
                <div className="section__text1">LUXIROUS &amp; TRENDY</div>
                <div className="section__text2">ACCESORIES</div>
              </div>
            </Link>
          </div>
        </section>
        <div className="products center">
          <p className="products_title">Fetured Items</p>
          <p className="products_text">
            Shop for items based on what we featured in this week
          </p>
          <div className="product_items">
            {products.slice(6).map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
          <div className="products_button">
            <Link className="browse_button" to="/catalog">
              Browse All Product
            </Link>
          </div>
        </div>
        <section>
          <div className="features center">
            <figure>
              <div className="feature">
                <FeatureDelivery_icon className="feature_icon"/>
                <h4 className="feature_title">Free Delivery</h4>
                <p className="feature_description">
                  Worldwide delivery on all. Authorit tively morph
                  next-generation innov tion with extensive models.
                </p>
              </div>
            </figure>
            <figure>
              <div className="feature">
                <FeatureDiscount_icon className="feature_icon"/>
                <h4 className="feature_title">Sales & discounts</h4>
                <p className="feature_description">
                  Worldwide delivery on all. Authorit tively morph
                  next-generation innov tion with extensive models.
                </p>
              </div>
            </figure>
            <figure>
              <div className="feature">
                <FeatureQuality_icon className="feature_icon"/>
                <h4 className="feature_title">Quality assurance</h4>
                <p className="feature_description">
                  Worldwide delivery on all. Authorit tively morph
                  next-generation innov tion with extensive models.
                </p>
              </div>
            </figure>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MainPage
