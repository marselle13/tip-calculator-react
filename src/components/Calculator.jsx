import styled from "styled-components";
import { useState } from "react";
import CalculatorInput from "./CalculatorInput";
import SelectInput from "./SelectInput";
import Interface from "./Interface";
import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";

function Calculator() {
  const [selectedButton, setSelectedButton] = useState(3);
  const [billHandler, setBillHandler] = useState(0);
  const [peopleHandler, setPeopleHandler] = useState(0);
  const [tipHandler, setTipHandler] = useState(0);
  return (
    <Wrapper>
      <Card>
        <CalculatorInterface>
          <CalculatorInput
            label="Bill"
            icon={dollar}
            billHandler={billHandler}
            setBillHandler={setBillHandler}
          />
          <SelectInput
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
            tipHandler={tipHandler}
            setTipHandler={setTipHandler}
          />
          <CalculatorInput
            label="Number of People"
            icon={person}
            peopleHandler={peopleHandler}
            setPeopleHandler={setPeopleHandler}
          />
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
  @media (max-width: 920px) {
    width: 100%;
  }
  @media (max-width: 375px) {
    width: 375px;
  }
`;

const Card = styled.div`
  display: flex;
  gap: 40px;
  padding: 2rem 2rem 2rem 3rem;
  @media (max-width: 920px) {
    flex-direction: column;
    padding: 2rem 1.5rem;
    gap: 32px;
  }
`;

const CalculatorInterface = styled.div`
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 920px) {
    width: 100%;
  }
`;
