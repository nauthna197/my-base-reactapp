import React, { useState } from 'react';
import { isNotValidASCIINumber, isPreventASCIICharacters } from '../../utils/input';
import styled from 'styled-components';

interface Props {
  name?: string
  width?: string
  decimals: number
}

const StyledInput = styled.input`
  -moz-appearance: textfield;
  padding: 4px 8px;
  width: 100%;

  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }
`;

const WrappedInput = styled.div<{width?: string}>`
  width: ${props => props.width ?? '100%'};
`;

const InputCurrency = ({ name, decimals, width }: Props) => {
  const [value, setValue] = useState<string>('');

  return <WrappedInput width={width}>
    <StyledInput
      onKeyDown={(e) => isNotValidASCIINumber(e.keyCode, true) && e.preventDefault()}
      onKeyPress={(e) => isPreventASCIICharacters(e.key) && e.preventDefault()}
      value={value} onChange={e => {
        setValue(e.target.value);
      }}
      type='number'
    />;
  </WrappedInput>;
};

export default InputCurrency;
