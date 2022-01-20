import "./Banner.css";
import { Button } from "@chakra-ui/react";
const Banner = (props) => {
  return (
    <>
      <section id="banner">
        <div class="container">
          <h4> Lorem, ipsum dolor.</h4>
          <h1>
            Lorem ipsum dolor <br />
            sit amet
          </h1>
          <Button colorScheme="blue">Buy Now</Button>
        </div>
      </section>
      <section className="addidas">
        <img
          src="https://assets.ajio.com/medias/sys_master/images/images/he4/h7e/45929191669790/10122021-D-unisex-brands-soughtafter-adidas.jpg"
          alt=""
          srcset=""
        />
      </section>
      <section className="foot">
        <img
          src="https://assets.ajio.com/medias/sys_master/images/images/hbf/h20/45789425238046/16.jpg"
          alt=""
          srcset=""
        />
      </section>
    </>
  );
};
export default Banner;
