import styled from "styled-components";

const Img4Col = (props) => {
  return (
    <Container>
      <Images>
        <img
          src="https://assets.ajio.com/medias/sys_master/images/images/h2a/h41/46465229193246/07012022-D-unisex-brands-soughtafter-ucb-3060.jpg"
          alt=""
          srcset=""
        />
      </Images>
      <Images>
        <img
          src="https://assets.ajio.com/medias/sys_master/images/images/h3b/h79/46513627627550/07012022-D-ajiomania-prebuzz-brands-soughtafter-avaasa-upto70.jpg"
          alt=""
          srcset=""
        />
      </Images>
      <Images>
        <img
          src="https://assets.ajio.com/medias/sys_master/images/images/h20/h4c/46465229520926/07012022-D-unisex-brands-soughtafter-adidas-3050.jpg"
          alt=""
          srcset=""
        />
      </Images>
      <Images>
        <img
          src="https://assets.ajio.com/medias/sys_master/images/images/h03/h3c/46465229389854/07012022-D-unisex-brands-soughtafter-uspa-min40.jpg"
          alt=""
          srcset=""
        />
      </Images>
      <Images>
        <img
          src="https://assets.ajio.com/medias/sys_master/images/images/h47/hc0/46465229783070/07012022-D-unisex-brands-soughtafter-lifestyle-upto50.jpg"
          alt=""
          srcset=""
        />
      </Images>
      <Images>
        <img
          src="https://assets.ajio.com/medias/sys_master/images/images/h84/hf8/46465229848606/07012022-D-unisex-brands-soughtafter-newbalance-3050.jpg"
          alt=""
          srcset=""
        />
      </Images>
      <Images>
        <img
          src="https://assets.ajio.com/medias/sys_master/images/images/h55/h13/46513627562014/07012022-D-unisex-brands-soughtafter-outryt-upto70.jpg"
          alt=""
          srcset=""
        />
      </Images>

      <Images>
        <img
          src="https://assets.ajio.com/medias/sys_master/images/images/hf2/h66/46465230307358/07012022-D-unisex-brands-soughtafter-biba-4060.jpg"
          alt=""
          srcset=""
        />
      </Images>
    </Container>
  );
};
const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Images = styled.div`
  	position: relative;
	border: 1px solid #333;
	overflow: hidden;
	width: 400px;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
  img {
    width: 100%;
 
    vertical-align: top;
    transition: all 0.3s;
    	vertical-align: top;
	max-width: 100%;
	-moz-transition: all 0.3s;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
  &:hover {
    -moz-transform: scale(1.02);
    -webkit-transform: scale(1.1);
    transform: scale(1.02);
  }
`;
export default Img4Col;
