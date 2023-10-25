import { useEffect, useState } from "react";
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function ListPage() {

  const [listNumbers, setListNumbers] = useState([]);
  const [newList, setNewList] = useState([]);
  const [media, setMedia] = useState(0);
  const [number, setNumber] = useState("");
  const [numberFound, setNumberFound] = useState(false);
  const [analysis, setAnalysis] = useState(false);

  useEffect(() => {
    generateRandomNumbers();
  }, []);


  function handleMedia(numbers) {
    let soma = 0;
    for (let i = 0; i < numbers.length; i++) {
      soma += numbers[i]
    }
    setMedia(soma / numbers.length)

    quickSort(numbers)
  }


  function quickSort(numbers) {
    if (numbers.length <= 1) {
      return numbers;
    }

    const pivot = numbers[0];
    const left = [];
    const right = [];

    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < pivot) {
        left.push(numbers[i]);
      } else {
        right.push(numbers[i]);
      }
    }

    const sortedList = [...quickSort(left), pivot, ...quickSort(right)];
    return sortedList;
  }

  function generateRandomNumbers() {
    const randomList = [];
    for (let i = 0; i < 8; i++) {
      randomList.push(Math.floor(Math.random() * 100));
    }
    setListNumbers(randomList);
    const sortedList = quickSort(randomList);
    setNewList(sortedList);
    handleMedia(randomList);
  }

  function handleResult() {
    let low = 0;
    let high = newList.length - 1;

    if (number !== "") {
      while (low <= high) {
        let middle = Math.floor((low + high) / 2);

        if (newList[middle] === Number(number)) {
          setNumberFound(true);
          setAnalysis(true);
          return;
        } else if (newList[middle] < Number(number)) {
          low = middle + 1;
        } else {
          high = middle - 1;
        }
      }
      setNumberFound(false);
      setAnalysis(true);
    }

  }

  function handleInputChange(e) {
    setNumber(e.target.value);
    if (e.target.value === "") {
      setAnalysis(false);
    }
  }


  return (
    <PageContainer>
      A lista aleatória  de números é {JSON.stringify(listNumbers)}
      <BottomAtt onClick={() => window.location.reload()}>Gere uma nova lista clicando aqui </BottomAtt>

      <ListContainer>
        A média dos números é: {media.toFixed(2).toString().replace(".", ",")}

        <p>A partir da lista gerada aleatoriamente, segue uma lista ordenada: {JSON.stringify(newList)}</p>

        Certifique se um número está presente na lista ou não:

        <StyledInput
          name="word"
          placeholder="Escreva o número aqui"
          type="text"
          value={number}
          onChange={handleInputChange}
          required
        />
        <StyledButton type="submit" onClick={handleResult}>
          Enviar
        </StyledButton>
        {analysis ? (numberFound ? "Esse número pertence à lista" : "Esse número não pertence à lista") : ""}
        <Link to="/14" style={{ textDecoration: 'none' }}>
        <BottomAtt>Ir para a próxima página</BottomAtt>
      </Link>
      </ListContainer>
  
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
    
`
const ListContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
    align-items: center
    
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
`
const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 13px;
  padding: 10px;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  font-size: 20px;
  line-height: 25px;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"};
  color: ${(props) => props.disabled ? "#AFAFAF" : "#666666"};
  &::placeholder{
    color:  #000000;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
  }
`

const StyledButton = styled.button`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  background: #3a8ee8;
  color: #C3CFD9;
  margin: 15px;
`