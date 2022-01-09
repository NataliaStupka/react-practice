import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const TriggerButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
`;

export const Popover = styled.div`
  position: absolute;
  border: 1px solid black;
  padding: 4px;
  background-color: 'fff';
`;

//нужен обязательный проп на опции
export const Options = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

export const Option = styled.label`
  cursor: pointer;
`;
