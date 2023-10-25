import { useState } from "react";
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function RecommendationPage() {


  const products = [
    { id: 1, name: 'Produto 1', image: "https://lojavivara.vtexassets.com/arquivos/ids/400314/Anel-Life-Patuas-Lua-Prata-17273_set.jpg?v=638247790065530000", category: 'silver' },
    { id: 2, name: 'Produto 2', image: "https://lojavivara.vtexassets.com/arquivos/ids/406942/Pulseira-Life-Sua-Historia-53995_set.jpg?v=638264260894070000", category: 'silver' },
    { id: 3, name: 'Produto 3', image: "https://lojavivara.vtexassets.com/unsafe/480x480/center/middle/https%3A%2F%2Flojavivara.vtexassets.com%2Farquivos%2Fids%2F327820%2FEscapulario-Life-Fe-Cruz-e-Coracao-Prata-com-Banho-Ouro-Amarelo-2564_set.jpg%3Fv%3D638060322312400000", category: 'gold' },
    { id: 4, name: 'Produto 4', image: "https://cdn.awsli.com.br/600x700/2258/2258460/produto/161756902/44615105f9.jpg", category: 'gold' },
    { id: 5, name: 'Produto 5', image: "https://lojavivara.vtexassets.com/arquivos/ids/519215/Argola-Life-Redonda-Prata-20mm-22399_set.jpg?v=638282422878030000", category: 'silver' },
    { id: 6, name: 'Produto 6', image: "https://lojavivara.vtexassets.com/arquivos/ids/327167/Colar-Life-Forms-Coracao-Prata-Cravejado-Incolor-2332_set.jpg?v=638054955746730000", category: 'silver' },
    { id: 7, name: 'Produto 7', image: "https://lojavivara.vtexassets.com/arquivos/ids/606728/Anel-Knot-em-Ouro-Amarelo-18k-3331_1_set.png?v=638330739325930000", category: 'gold' }
  ];

  const [recommendations, setRecommendations] = useState([])


  function chooseCategory(chosenCategory) {
    const choice = products.filter(product => chosenCategory.includes(product.category));
    setRecommendations(choice)
    // }
  }


  return (
    <PageContainer>
      <div>
        <h2>Produtos Disponíveis</h2>
        <h3>Clique em um produto de sua preferência</h3>
        {products.map(product => (
          <img src={product.image} key={product.id} onClick={() => chooseCategory(product.category)} />
        ))}

        <h2>Produtos Recomendados</h2>
        {recommendations.map(product => (
          <img src={product.image} key={product.id} />
        ))}
      </div>

      <Link to="/" style={{ textDecoration: 'none' }}>
        <BottomAtt>Voltar para a página inicial</BottomAtt>
      </Link>
    </PageContainer>
  )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-top: 70px;
    img{
      width: 180px;
    }
    
`

const BottomAtt = styled.div`
width: 100%;
  height: 20px;
    display: flex;
    justify-content: center;
    padding: 10px;
    background-color: #b4e7c7;
    margin: 20px;
    font-size: 20px;
    cursor:pointer;
    color: white;
    text-decoration: none;
`
