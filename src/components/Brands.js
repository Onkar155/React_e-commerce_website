import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Brands = (props) => {
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
              src="https://assets.ajio.com/medias/sys_master/images/images/h6f/h89/45789411016734/10122021-D-unisex-brands-soughtafter-levis-min50.jpg"
              alt=""
            />
          </Wrap>
          <Wrap>
            <img
              src="https://assets.ajio.com/medias/sys_master/images/images/hbc/h6b/45789411049502/10122021-D-unisex-brands-soughtafter-nike-upto60.jpg"
              alt=""
            />
          </Wrap>
          <Wrap>
            <img
              src="https://assets.ajio.com/medias/sys_master/images/images/h40/he9/45789411180574/10122021-D-unisex-brands-soughtafter-puma-4070.jpg"
              alt=""
              srcset=""
            />
          </Wrap>
          <Wrap>
            <img
              src="https://assets.ajio.com/medias/sys_master/images/images/ha8/h63/45836365889566/10122021-D-unisex-brands-soughtafter-veromoda-5070.jpg"
              alt=""
              srcset=""
            />
          </Wrap>
          <Wrap>
            <img
              src="https://assets.ajio.com/medias/sys_master/images/images/h06/h15/45816269504542/10122021-D-unisex-category-westernwear-ck-upto50.jpg"
              alt=""
              srcset=""
            />
          </Wrap>

          <Wrap>
            <img
              src="https://assets.ajio.com/medias/sys_master/images/images/ha8/h63/45836365889566/10122021-D-unisex-brands-soughtafter-veromoda-5070.jpg"
              alt=""
              srcset=""
            />
          </Wrap>
          <Wrap>
            <img
              src="https://assets.ajio.com/medias/sys_master/images/images/h4e/h47/45789411213342/10122021-D-unisex-brands-soughtafter-johnplayers-upto70.jpg"
              alt=""
              srcset=""
            />
          </Wrap>
          <Wrap>
            <img
              src="https://assets.ajio.com/medias/sys_master/images/images/hd6/hef/45836365955102/10122021-D-unisex-brands-soughtafter-only-5080.jpg"
              alt=""
              srcset=""
            />
          </Wrap>
        </Content>
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
export default Brands;
