import styled from "styled-components";
import { useState } from "react";
function CalculatorInput(props) {
  const [isVisible, setIsVisible] = useState(false);

  const valueHandler = function (e) {
    if (props.label === "Bill") props.setBillHandler(+e.target.value);

    if (props.label.slice(-6) === "People")
      props.setPeopleHandler(e.target.value);

    if (+e.target.value <= 0 && props.label.slice(-6) === "People") {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <Input>
      <LabelDiv>
        <Label htmlFor="InputStyle">{props.label}</Label>
        {isVisible ? <Error>{props.error}</Error> : null}
      </LabelDiv>
      <div>
        <Icon src={props.icon} alt="" />
        <InputStyle
          type="number"
          onChange={valueHandler}
          value={props.value}
          outline={!isVisible ? "" : "2px solid #E17052"}
        />
      </div>
    </Input>
  );
}

export default CalculatorInput;

const Input = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #5e7a7d;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 6px;
`;

const Icon = styled.img`
  position: absolute;
  top: 58%;
  left: 20px;
`;

export const InputStyle = styled.input`
  font-family: spaceMono;
  text-align: right;
  background: #f3f9fa;
  border-radius: 5px;
  border: none;
  font-size: 24px;
  line-height: 36px;
  font-weight: 700;
  outline: none;
  color: #00474b;
  padding: 6px 20px 6px 34px;
  &:focus {
    outline: ${(props) => props.outline || "2px solid #26c2ae"};
  }
  @media (max-width: 375px) {
    padding-right: 2px;
  }
`;

const Error = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: #e17457;
`;

const LabelDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
