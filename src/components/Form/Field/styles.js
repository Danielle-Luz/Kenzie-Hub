import styled from "styled-components";
import { Field } from ".";

export const FieldStyled = styled(Field)`
  background-color: ${({ theme }) => theme.colors.greyScale[2]};

  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius}px;

  color: ${({ theme }) => theme.colors.greyScale[0]};

  font-size: ${({ theme }) => theme.fontSizes[1]}px;

  padding: 10.5px 16.2px;

  width: 100%;

  &:focus {
    border-color: ${({ theme }) => theme.colors.greyScale[0]};
  }

  &:placeholder {
    color: ${({ theme }) => theme.colors.greyScale[1]};
  }
`;

export const FieldWrapperStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;

  option {
    background-color: ${({ theme }) => theme.colors.greyScale[2]};
    color: ${({ theme }) => theme.colors.greyScale[0]};
  }

  span {
    text-align: start;
  }
`;
