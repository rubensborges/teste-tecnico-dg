
import './App.css'
import Header from './Components/Header/Header'
import Menu from './Components/Menu/Menu'

const categories = [
  {
    "nome": "Início",
    "subcategorias": []
  },
  {
    "nome": "Produtos",
    "subcategorias": [
      {
        "nome": "Eletrônicos",
        "subcategorias": [
          {
            "nome": "Smartphones"
          },
          {
            "nome": "Laptops"
          },
          {
            "nome": "Acessórios"
          }
        ]
      },
      {
        "nome": "Roupas",
        "subcategorias": [
          {
            "nome": "Camisetas"
          },
          {
            "nome": "Calças"
          },
          {
            "nome": "Sapatos"
          }
        ]
      }
    ]
  },
  {
    "nome": "Contato",
    "subcategorias": []
  }
]
// Aqui eu optei por renderizar no app.jsx os dois componentes principais. Passei pro Componente Manu o array da api como props e coloquei o mesmo nome por facilidade de leitura

function App() {

  return (
    <>
      <Header />
      <Menu categories={categories} />
    </>
  )
}

export default App
