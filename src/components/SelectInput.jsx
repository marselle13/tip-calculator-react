import styled from "styled-components";
import { Label, InputStyle } from "./CalculatorInput";
function SelectInput() {
  const values = [5, 10, 15, 25, 50];

  return (
    <div>
      <Label>Select Tip %</Label>
      <Grid>
        {values.map((value) => (
          <TipInput key={value}>{value}%</TipInput>
        ))}
        <CustomInput placeholder="custom" />
      </Grid>
    </div>
  );
}

export default SelectInput;

const TipInput = styled.div`
  background:${(props) => (props.selected ? "#26C2AE" : "#00474b")}} ;
  border-radius: 5px;
  text-align: center;
  font-size: 24px;
  line-height: 36px;
  padding: 6px 14px;
  color: #ffffff;
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
