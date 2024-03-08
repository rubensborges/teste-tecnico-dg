import { styled } from "styled-components";
import Category from "./Category";

// Nesse componente eu recebo o array como props, faço um map nos dados da props e renderizo cada uma das categorias principais pelo componente Category. O styled component Container é para encapsular o Componente Category e centralizá-los
const Menu = ({categories}) => {
  return (
    <Container>
      {categories.map((e, index) => (
        <Category key={index} category={e} />
      ))}
    </Container>
  )
}


export default Menu;

const Container = styled.div`
  background-color: rgba(15, 23,42);
  height: 50px;
  display: flex;
  gap: 30px;
  justify-content: center;
`;

      




  


