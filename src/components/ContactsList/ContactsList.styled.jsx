import styled from 'styled-components';

export const List = styled.ul`
  width: 260px;
  list-style: none;
  & li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  & li:last-child {
    margin-bottom: 0;
  }
`;
export const DeleteButton = styled.button`
  background-color: white;
  color: red;
  border: none;

  &:hover {
    background-color: red;
    color: white;
  }
`;
