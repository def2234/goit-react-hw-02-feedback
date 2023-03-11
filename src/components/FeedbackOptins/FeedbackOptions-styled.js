import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

export const Li = styled.li`
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

export const Btn = styled.button`
  min-width: 45px;
  min-height: 30px;
  border-radius: 5px;
  border: 0;
  background-color: steel;
  cursor: pointer;
  &:focus {
    background-color: blue;
  }
`;
