import styled from "styled-components";
import CalculationText from "./CalculationText";
function Interface() {
  return (
    <CalculatedInterface>
      <Items>
        <CalculationText text="Tip Amount" amount="4.27" />
        <CalculationText text="Total" amount="32.79" />
      </Items>
      <ButtonDiv>
        <Button>Reset</Button>
      </ButtonDiv>
    </CalculatedInterface>
  );
}

export default Interface;

const CalculatedInterface = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 412px;
  height: 100%;
  background: #00474b;
  border-radius: 15px;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 2.5rem;
`;

const ButtonDiv = styled.div`
  padding: 0 2.5rem 2.5rem;
`;

const Button = styled.button`
  width: 100%;
  background: #26c2ae;
  border-radius: 5px;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #00474b;
  border: none;
  text-transform: uppercase;
  font-family: "SpaceMono";
  padding: 10px 0;
`;
