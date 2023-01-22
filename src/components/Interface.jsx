import styled from "styled-components";
import CalculationText from "./CalculationText";
function Interface(props) {
  return (
    <CalculatedInterface>
      <Items>
        <CalculationText
          text="Tip Amount"
          amount={
            isFinite(props.tipAmount) && +props.tipAmount > 0
              ? props.tipAmount
              : "0.00"
          }
        />
        <CalculationText
          text="Total"
          amount={
            isFinite(props.tipTotal) && +props.tipTotal > 0
              ? props.tipTotal
              : "0.00"
          }
        />
      </Items>
      <ButtonDiv>
        <Button onClick={props.onClick}>Reset</Button>
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
  @media (max-width: 920px) {
    width: 375px;
  }
  @media (max-width: 375px) {
    width: 326px;
  }
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
  &:hover {
    background: #9fe8df;
  }
`;
