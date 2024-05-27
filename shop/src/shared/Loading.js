import styled from "styled-components";

const StyledLoading = styled.div`
  display: block;
  background-color: #125B9E;
  color: #ffffff;
  padding: 10px;
  margin-bottom: 30px;
  font-size: 18px;
  border-radius: 15px;
`;

export default function Loading() {
  return <StyledLoading>로딩 중...</StyledLoading>
}
