import React from "react";
import styled from "styled-components";

import facebookImg from "../assets/facebook.png";
import twitterImg from "../assets/twitter.png";
import instagramImg from "../assets/instagram.png";
import pinterestImg from "../assets/pinterest.png";
import youtubeImg from "../assets/youtube.png";
import { Link } from "react-router-dom";

const FooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  margin-top: 1500px;
  background-color: lightgoldenrodyellow;
`;

const FooterPara = styled.p`
  font-size: 13px;
  line-height: 9px;
`;

const SocialImg = styled.img`
  height: 30px;
  width: 30px;
`;

const Footer = () => {
  return (
    <div>
      <FooterStyle>
        <div>
          <div>POLICY INFO</div>
          <div>
            <FooterPara>Privacy Policy</FooterPara>
            <FooterPara>Terms of Sale</FooterPara>
            <FooterPara>Terms of Use</FooterPara>
            <FooterPara>Report Abuse & Takedown Policy</FooterPara>
            <FooterPara>
              <Link to="/faq">FAQ</Link>
            </FooterPara>
          </div>
        </div>
        <div>
          <div>COMPANY</div>
          <div>
            <FooterPara>Impact@pocketShop</FooterPara>
            <FooterPara>
              <Link to="/jobOpportunities">Job opportunities</Link>
            </FooterPara>
            <FooterPara>Blog</FooterPara>
            <FooterPara>Sitemap</FooterPara>
            <FooterPara>
              <Link to="/contactUs">Contact us</Link>
            </FooterPara>
          </div>
        </div>
        <div>
          <div>BUSINESS</div>
          <div>
            <FooterPara>Shopping app</FooterPara>
            <FooterPara>Sell on Pocket shop</FooterPara>
            <FooterPara>Media enquiries</FooterPara>
          </div>
        </div>
        <div>
          <div>POPULAR LINKS</div>
          <div>
            <FooterPara>Lehenga</FooterPara>
            <FooterPara>Headphones</FooterPara>
            <FooterPara>Kid's clothing</FooterPara>
            <FooterPara>Sarees</FooterPara>
            <FooterPara>Shoes</FooterPara>
            <FooterPara>Winter wear</FooterPara>
            <FooterPara>Shirt for men</FooterPara>
          </div>
        </div>
        <div>
          <div>SUBSCRIBE</div>
          <div style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
            <div>
              <SocialImg src={facebookImg} alt="facebookImg" />
            </div>
            <div>
              <SocialImg src={twitterImg} alt="twitterImg" />
            </div>
            <div>
              <SocialImg src={instagramImg} alt="instagramImg" />
            </div>
            <div>
              <SocialImg src={pinterestImg} alt="pinterestImg" />
            </div>
            <div>
              <SocialImg src={youtubeImg} alt="youtubeImg" />
            </div>
          </div>
        </div>
      </FooterStyle>
    </div>
  );
};

export default Footer;