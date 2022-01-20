import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img
            src="https://www.ajio.com/medias/sys_master/images/images/h23/h3f/45483732959262/22112021-D-MHP-topbannercarousel-stealoftheday-p1-brands-under2299.jpg"
            alt=""
          />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img
            src="https://assets.ajio.com/medias/sys_master/images/images/h39/h60/46431225741342/27122021-D-unisex-onlyonAJIO-brands-bestof2021.jpg"
            alt=""
          />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img
            src="https://assets.ajio.com/medias/sys_master/images/images/h7e/h47/45789414522910/10122021-D-unisex-onlyonAJIO-coolestbrands-brands.jpg"
            alt=""
          />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img
            src="https://assets.ajio.com/medias/sys_master/images/images/h1b/hf8/45789414719518/10122021-D-unisex-brands-exclusive-leecooper-upto70.jpg"
            alt=""
          />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
      background-color: rgba(49, 60, 83, 0.1);
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;
