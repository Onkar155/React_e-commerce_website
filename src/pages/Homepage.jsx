import styled from "styled-components";
import Header from "../components/Navbar_main/Header";
import ImgSlider from "../components/ImgSlider";
import ImgSlider2 from "../components/ImgSlider2";

import Brands from "../components/Brands";
import Banner from "../components/Banner";
import Shoe from "../components/Shoe";
import Img4Col from "../components/Img4Col";
export default function Homepage() {
  return (
    <>
      <Header />

      <Container>
        <ImgSlider />
        <Brands />
        <Banner />
        <Shoe />
        <Banner2>
          <CTALogoOne
            src="https://www.ajio.com/medias/sys_master/images/images/hdc/h53/46465221787678/07012022-D-unisex-internationalbrands-brands.jpg"
            alt=""
          />
        </Banner2>
        <ImgSlider2 />

        <Banner3
          src="https://assets.ajio.com/medias/sys_master/images/images/h15/h13/46465228996638/15.jpg"
          alt=""
        />
        {/* col of the four imges */}
        <Img4Col />
        <Banner4
          src="https://assets.ajio.com/medias/sys_master/images/images/h15/h13/46465228996638/15.jpg"
          alt=""
        />
        <Banner2>
          <Topdiscount src="https://assets.ajio.com/medias/sys_master/images/images/h03/h8e/46465217593374/07012022-D-unisex-ss22-newseason-upto30.jpg" />
        </Banner2>
      </Container>
    </>
  );
}
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
const Banner2 = styled.div``;
const Banner3 = styled.img`
  width: 100%;
  align-self: center;
`;
const Banner4 = styled.img`
  width: 100%;
  align-self: center;
`;
const Topdiscount = styled.img`
  width: 100%;
  align-self: center;
`;
const CTALogoOne = styled.img`
  margin-bottom: 4px;
  
  width: 100%;
  vertical-align: top;
  z-Index: -1;
  &:hover {
        

    transform: scale(1.01);
    border-color: rgba(249, 249, 249, 0.8);
    z-Index: -1;
    transition: all 1s ease;
  }
   
}
`;
