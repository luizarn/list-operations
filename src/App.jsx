import styled from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ListPage from "./listPage/LIstPage"
import RecommendationPage from "./listPage/RecommendationPage"


export default function App() {


    return (
        <BrowserRouter>
            <NavContainer>Teste de Nivelamento - FIRST JOB</NavContainer>

            <Routes>
                
                <Route path='/' element={<ListPage />} />
                <Route path='/14' element={<RecommendationPage />} />
            </Routes>
        </BrowserRouter>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #3a8ee8;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #3a8ee8;
    }
`