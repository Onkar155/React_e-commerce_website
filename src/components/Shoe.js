import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Shoe = (props) => {
  const history = useHistory();
  const on_to_lavis = () => {
    history.push("/");
  };
  return (
    <>
      <Container>
        <Content>
          <Wrap>
            <img
              onClick={on_to_lavis}
              src="https://assets.ajio.com/medias/sys_master/images/images/hc7/hc2/45789416620062/10122021-D-unisex-category-footwear-reebok-3060.jpg"
              alt=""
            />
          </Wrap>
          <Wrap>
            <img
              src="https://assets.ajio.com/medias/sys_master/images/images/hd2/h63/45789411377182/10122021-D-unisex-brands-flaunt-campus-upto50.jpg"
              alt=""
            />
          </Wrap>
          <Wrap>
            <img
              src="https://assets.ajio.com/medias/sys_master/images/images/h11/h11/45789416554526/10122021-D-unisex-category-footwear-brands-upto50.jpg"
              alt=""
              srcset=""
            />
          </Wrap>
          <Wrap>
            <img
              src="https://assets.ajio.com/medias/sys_master/images/images/ha5/h80/45789416423454/10122021-D-unisex-category-footwear-rossobrunello-upto30.jpg"
              alt=""
              srcset=""
            />
          </Wrap>
        </Content>
        <section style={{ padding: "60px" }}>
          <img
            src="https://assets.ajio.com/medias/sys_master/images/images/h20/h9f/45789425303582/17.jpg"
            alt=""
            srcset=""
          />
        </section>
      </Container>
    </>
  );
};
const Container = styled.div`
  padding-top: 80px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
export default Shoe;
