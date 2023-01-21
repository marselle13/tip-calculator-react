import styled from "styled-components";

function CalculatorInput(props) {
  return (
    <Input>
      <Label htmlFor="InputStyle">{props.label}</Label>
      <div>
        <Icon src={props.icon} alt="" />
        <InputStyle type="text" />
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
`;
