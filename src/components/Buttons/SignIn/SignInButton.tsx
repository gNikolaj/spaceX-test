import React from 'react';
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  gap: 10px;

  position: absolute;
  width: 163px;
  height: 53px;
  right: 125px;
  top: 13px;

  font-family: 'Syne',serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  background: #D3EAFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
`

const SignInButton = () => {
    return (
        <Button>
            SIGN IN
        </Button>
    );
};

export default SignInButton;
