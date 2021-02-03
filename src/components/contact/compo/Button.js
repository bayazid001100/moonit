// import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  background: #fba93d;
  border: 0;
  color: #fff;
  padding: 1em;
  text-transform: uppercase;
  width: 100%;
  cursor: pointer;
  z-index: 1000;

  &:hover,
  &:focus {
    background: #fbbf3d;
    color: #fff;
    outline: 0;
    transition: background-color 2s ease-out;
  }
`;

export default StyledButton;
