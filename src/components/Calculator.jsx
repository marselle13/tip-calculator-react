import styled from "styled-components";
import CalculatorInput from "./CalculatorInput";
import SelectInput from "./SelectInput";
import Interface from "./Interface";
import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";

function Calculator() {
  return (
    <Wrapper>
      <Card>
        <CalculatorInterface>
          <CalculatorInput label="Bill" icon={dollar} />
          <SelectInput />
          <CalculatorInput label="Number of People" icon={person} />
        </CalculatorInterface>
        <div>
          <Interface />
        </div>
      </Card>
    </Wrapper>
  );
}

export default Calculator;

const Wrapper = styled.div`
  font-family: spaceMono;
  background: #fff;
  box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
  border-radius: 25px;
  max-width: 920px;
  gap: 48px;
`;

const Card = styled.div`
  display: flex;
  gap: 40px;
  padding: 2rem 2rem 2rem 3rem;
`;

const CalculatorInterface = styled.div`
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;