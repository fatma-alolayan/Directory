import styled from "styled-components";

export const Header = styled.h1`
  text-align: center;
  color: black;
  font-family: cursive;
  font-size: 70px;
`;

export const MovieWrapper = styled.div`
  text-align: center;
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
  background: #03071e;
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
  color: #d00000;
  text-align: center;
  background: #03071e;
  font-size: 24px;
  width: 900px;
  height: 200px;

  img {
    width: 300px;
    height: 370px;
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
