import React from 'react'
import './Footer.scss'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <div className="footer">
      <img src="/images/logo.png" alt="" width={120} height={80} className='logo' />
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          VelvetVogue epitomizes timeless elegance, offering a curated collection of luxurious fashion that seamlessly blends sophistication and comfort. Our commitment is to empower individuals to embrace their unique style with meticulously crafted velvet garments.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>+65 9874 5632</span>
          <span>test@example.com</span>
          <div className="social">
            <FacebookRoundedIcon style={{color: "#81542F"}} />
            <InstagramIcon style={{color: "#81542F", marginLeft: "15px"}}/>
            <TwitterIcon style={{color: "#81542F", marginLeft: "15px"}}/>
            <PinterestIcon style={{color: "#81542F", marginLeft: "15px"}}/>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className='copyright'>
              © Copyright 2024. All Rights Reserved.
          </span>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer