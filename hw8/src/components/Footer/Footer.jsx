import React from 'react'

import social_facebook from "../../img/social_facebook.svg"
import social_instagram from "../../img/social_instagram.svg"
import social_pinterest from "../../img/social_pinterest.svg"
import social_twitter from "../../img/social_twitter.svg"
import creator from "../../img/creator.png"

import "./Footer.scss"

function Footer() {
  return (
    <>
      <section className="review">
        <div className="container">
          <div>
            <div className="review__ava">
              <img
                src={creator} alt="user"
              />
            </div>
            <div className="review__text">Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum</div>
          </div>
          <div className="subscribe">
            <div className="subscribe__title">SUBSCRIBE</div>
            <div className="subscribe__subtitle">FOR OUR NEWLETTER AND PROMOTION</div>
            <form className="subscribe__email">
              <input type="email" className="subscribe__email-field" placeholder="Enter Your Email" />
              <div className="subscribe__email-submit">Subscribe</div>
            </form>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer__socials">
            <div className="footer__social">
              <img src={social_facebook} className="footer__social-img" alt="social"/>
            </div>
            <div className="footer__social">
              <img src={social_instagram} className="footer__social-img" alt="social"/>
            </div>
            <div className="footer__social">
              <img src={social_pinterest} className="footer__social-img" alt="social"/>
            </div>
            <div className="footer__social">
              <img src={social_twitter} className="footer__social-img" alt="social"/>
            </div>
          </div>
          <div className="footer__copyright">© 2024 Brand All Rights Reserved.</div>
        </div>
      </footer>
    </>
  )
}

export default Footer
