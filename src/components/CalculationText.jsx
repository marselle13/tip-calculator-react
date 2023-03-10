import styled from "styled-components";

function CalculationText(props) {
  return (
    <Block>
      <div>
        <Text>{props.text}</Text>
        <Person>/ person</Person>
      </div>
      <AmountDiv>
        <Amount>${props.amount}</Amount>
      </AmountDiv>
    </Block>
  );
}

export default CalculationText;

const Text = styled.h4`
  margin: 0 0;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  white-space: nowrap;
`;

const Person = styled.span`
  font-size: 13px;
  line-height: 19px;
  color: #7f9d9f;
  white-space: nowrap;
`;
const AmountDiv = styled.div`
  overflow-x: auto;
  margin-left: 1rem;
`;

const Amount = styled.h2`
  display: flex;
  align-items: start;
  font-size: 48px;
  line-height: 71px;
  letter-spacing: -1px;
  color: #26c2ae;
  margin: 0;
  @media (max-width: 920px) {
    font-size: 32px;
    line-height: 47px;
  }
`;

const Block = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
