import React, { Component } from "react";
import Slider from "@bit/akiran.react-slick.slider";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 500,
      cssEase: "linear",
    };
    return (
      <div className="container">
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <style>{cssstyle}</style>

        <Slider {...settings}>
          <div>
            <img
              src="https://assets.ajio.com/medias/sys_master/images/images/h65/h93/46465221918750/07012022-D-unisex-internationalbrands-superdry-3050.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <img
              src="https://assets.ajio.com/medias/sys_master/images/images/h26/h8e/46465222180894/07012022-D-unisex-internationalbrands-trendyol-4060.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <img
              src="https://assets.ajio.com/medias/sys_master/images/images/h07/hf7/46465222246430/07012022-D-unisex-internationalbrands-koton-3060.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <img
              src="https://assets.ajio.com/medias/sys_master/images/images/h65/h93/46465221918750/07012022-D-unisex-internationalbrands-superdry-3050.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <img
              src="https://assets.ajio.com/medias/sys_master/images/images/hfe/h95/46465221984286/07012022-D-unisex-internationalbrands-ax-2050.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <img
              src="https://assets.ajio.com/medias/sys_master/images/images/hff/h62/46465222115358/07012022-D-unisex-internationalbrands-marks-spencer-upto60.jpg"
              alt=""
              srcset=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}

const cssstyle = `
.container {
  margin: 0 auto;
  padding: 0px 1px 0px 1px;
  width: 100%;
}
.img{
  width:100%;
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    z-index:-1;
    padding: 2px;
    
}

// .slick-next:before, .slick-prev:before {
//     color: grey;
// }
`;
