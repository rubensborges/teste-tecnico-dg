import styled from "styled-components";

// Neste outro componente, em que ficam os dados das subcategorias do objeto, segui a mesma ideia do componente Category. Os dados do array chegam até ele por meio das props, em que também optei pelo desestructuring por facilidade da leitura, faço um map nos dados para renderizar as primeiras subcategorias com o styled componente Category, passando os dados com chave "nome". Após, dentro do styled component SubMenu, realizo outro map nos dados da props subcategorias, em que renderizo os dados das chaves "nome" e "subcategorias" dentro das subcategorias "eletronicos" e "roupas". Para a regra de apenas mostrar os elementos quando o user passa o mouse por cima, segui a mesma lógica CSS do componente Category, display none nos elementos com classe "sub-menu" e display flex quando o elemento renderizado receber o hover do mouse. 

const Subcategories = ({subcategories, className}) => {

  return (
      <Menu className={className}>
          {subcategories.map((e, index) => (
            <Category key={index}>
              {e.nome}
              <SubMenu>
                {e.subcategorias.map((a, index) => (
                  <SubMenuItem className="sub-menu" key={index}>
                    {a.nome}
                  </SubMenuItem>
                ))}
              </SubMenu>
            </Category>
          ))}
        </Menu>
    )
  }
  
export default Subcategories;

const Menu = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 50px;
  background-color: #fefeff;
  position: absolute;
`

const SubMenu = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  left: 90%;
  position: absolute;
  top: 20px;
  background-color: #fefeff;
  
`

const SubMenuItem = styled.div`
  padding: 18px;
  &:hover{
    background-color: red;
  }
`

const Category = styled.div`
  padding: 18px;
  color: black;
  position: relative;
  & .sub-menu{
    display: none ;
  }
  &:hover .sub-menu{
    display: flex;
  }
  &:hover{
    background-color: red;
  }
`





