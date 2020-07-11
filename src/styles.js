import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
  
    background-color: black;
  }
`;

export const Header = styled.h1`
  text-align: center;
  color: white;
  font-family: cursive;
  font-size: 70px;
`;

export const MovieWrapper = styled.div`
  text-align: center;
  border: solid 10px white;
  padding-bottom: 10px;
`;

export const Poster = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 180px;
  height: 250px;
`;

export const MovieTitle = styled.h2`
  color: #d00000;
  text-align: center;
  // background: #03071e;
  height: 60px;
  padding-top: 20px;
  font-size: 24px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px 250px 250px 250px;
  grid-gap: 20px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
`;

export const MovieDetaileStyle = styled.div`
  margin-left: auto;
  margin-right: auto;
  color: white;
  text-align: center;
  background: #03071e;
  font-size: 15px;
  width: 900px;
  height: 200px;
  padding-bottom: 80px;

  img {
    width: 200px;
    height: 270px;
  }

  h1 {
    color: #d00000;
    text-align: center;
    background: #03071e;
    height: 60px;
    padding-top: 20px;
    font-size: 30px;
  }
`;
export const RecomendedMovie = styled.div`
  border: solid 10px white;
  background: #03071e;
  margin-left: auto;
  margin-right: auto;
  margin-top: 320px;
  width: 600px;
  height: 250px;
  display: grid;
  grid-template-columns: 100px 200px 200px 200px;

  img {
    display: block;
    margin-top: 50px;
    margin-right: 50%;
    margin-left: 50%;
    width: 100px;
    height: 170px;
  }

  h4 {
    color: #d00000;
    font-size: 15px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const RecoTitle = styled.h3`
  color: white;
  text-align: center;
  font-size: 30px;
  font-family: cursive;
  margin-top: 5px;
  margin-left: 15px;
`;
export const BackList = styled.h2`
  color: white;
  margin: 20px;
`;
