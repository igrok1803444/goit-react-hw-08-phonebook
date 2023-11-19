import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  padding: 12px;

  width: 230px;

  border: 1px solid green;
  border-radius: 16px;
`;
export const Label = styled.label`
  display: flex;
  justify-content: space-between;

  margin-bottom: 16px;
  & input {
    margin-left: 4px;

    padding: 0 4px;

    width: 100%;
    border: 1px solid green;

    outline: none;

    transition-property: all;
    transition-timing-function: ease-in-out;
    transition-timing-function: 250ms;
  }
`;
