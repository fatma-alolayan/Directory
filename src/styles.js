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
  font-size: 15px;
  width: 900px;
  height: 200px;

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
  border: solid 10px black;
  margin-left: auto;
  margin-right: auto;
  margin-top: 450px;
  width: 800px;
  height: 400px;

  display: auto;

  img {
    width: 100px;
    height: 170px;
    margin-top: 150px;
    margin-right: 50%;
    margin-left: 50%;
    float: left;
  }

  h4 {
    color: #d00000;
    text-align: center;

    font-size: 15px;
    margin-top: 70px;
    margin-right: 50px;
  }
`;

export const RecoTitle = styled.h3`
  color: blue;
  text-align: center;
  font-size: 20px;
`;
