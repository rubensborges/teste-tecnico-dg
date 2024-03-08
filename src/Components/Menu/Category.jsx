import { styled } from "styled-components";
import Subcategories from "./Subcategories";

// Neste componente o processo é semelhante, recebo os dados do objeto via props, fazendo um desestructuring para facilitar a leitura e renderizo os dados com chave "nome" do objeto. Após, eu chamo outro componente, Subcategories, passando também por props os dados do objeto com as chaves "subcategorias". No componente pai, Categories, eu criei uma regra CSS para esconder o componente Subcategories e ao se passar o mouse no elemento renderizado, mostrar. Optei por essa abordagem de display none e display flex com hover, por questão de otimização e leveza do código. De início pensei em fazer com estados, setando o valor do estado para true ou false dependendo do movimento do user e mostrando ou não o elemento. Porém percebi que era uma soulução desnecessária, sendo que poderia ser feito apenas com regras de CSS.
const Category = ({category}) => {
  
  return (
      <Categories>
        {category.nome}
        <Subcategories className="sub-menu" subcategories={category.subcategorias} />
      </Categories>
  )
}

export default Category;

const Categories = styled.div`
  cursor: pointer;
  width: 128px;
  display: flex;
  color: white;
  font-size: 20px;
  height: 100%;
  align-items: center;
  position: relative;
  justify-content: center;
  & > .sub-menu{
    display: none;
  }

  &:hover > .sub-menu{
    display: flex;
  }

  &:hover{
    background-color: red;
  }
`
    
    
