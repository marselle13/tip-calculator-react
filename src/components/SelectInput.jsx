import styled from "styled-components";
import { Label, InputStyle } from "./CalculatorInput";
function SelectInput(props) {
  const buttons = [
    { id: 1, value: 5 },
    { id: 2, value: 10 },
    { id: 3, value: 15 },
    { id: 4, value: 25 },
    { id: 5, value: 50 },
  ];

  function selectButton(id) {
    props.setCustomTipHandler("");
    props.setSelectedButton(id);
    props.setTipHandler(buttons[id - 1].value / 100);
  }

  function customHandler(e) {
    if (e.target.value < 0) return;
    props.setSelectedButton(null);
    props.setCustomTipHandler(e.target.value);
  }

  return (
    <div>
      <Label>Select Tip %</Label>
      <Grid>
        {buttons.map((button) => (
          <TipInput
            key={button.id}
            onClick={() => selectButton(button.id)}
            selectedBackground={
              button.id === props.selectedButton ? "#26C2AE" : "#00474B;"
            }
            selectedColor={
              button.id === props.selectedButton ? "#00474B" : "#FFF"
            }
          >
            {button.value}%
          </TipInput>
        ))}
        <CustomInput
          placeholder="custom"
          value={props.customTipHandler}
          type="number"
          onChange={customHandler}
        />
      </Grid>
    </div>
  );
}

export default SelectInput;

const TipInput = styled.div`
  background: ${(props) => props.selectedBackground};
  border-radius: 5px;
  text-align: center;
  font-size: 24px;
  line-height: 36px;
  padding: 6px 14px;
  color: ${(props) => props.selectedColor};
  cursor: pointer;
`;

const Grid = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 110px 110px 110px;
  grid-column-gap: 14px;
  grid-row-gap: 16px;
  @media (max-width: 920px) {
    grid-template-columns: 170px 170px;
    height: 100%;
    justify-content: center;
  }

  @media (max-width: 375px) {
    grid-template-columns: 160px 160px;
  }
`;

const CustomInput = styled(InputStyle)`
  padding: 0 10px;
`;
