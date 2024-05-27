import styled from 'styled-components';

export const Button = styled.button`
  width: 100px;
  background-color: ${(props) => props.clickCount < 2 ? "#272B37" : "#B0B1B3"};
  margin-bottom: 30px;
  padding: 5px;
  font-size: 14px;
  color: #ffffff;
  border: 0;
  border-radius: 2px;
`;
