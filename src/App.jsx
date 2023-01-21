import logo from "./images/logo.svg";
import Calculator from "./components/Calculator";
import styled from "styled-components";
function App() {
  return (
    <div className="App">
      <ImgDiv>
        <img src={logo} alt="logo" />
      </ImgDiv>
      <div>
        <Calculator />
      </div>
    </div>
  );
}

export default App;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 10rem 0 5rem;

  @media (max-width: 920px) {
    margin: 50px 0 40px;
  }
`;
