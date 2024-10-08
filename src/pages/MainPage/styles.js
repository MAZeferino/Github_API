import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  min-height:90vh;
  padding: 0 2rem;
`;

export const Logo = styled.img`
  width: 130px;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props ? props.theme.colors.white : ''} 
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;  
  width: 100%;
  max-width: 583px;
`;

export const Input = styled.input`
  background: rgba(0, 0, 0, .8);
  width: 100%;
  height: 64px;
  line-height: 64px;
  border: none;
  font-size: 24px;
  margin-right: 24px;
  padding: 0 24px;
  color: ${(props) => props.theme.colors.gray400};

  &::placeholder {
    color: ${(props) => props.theme.colors.gray400};
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content:center;  
  background: rgba(0, 0, 0, .8);
  color: ${(props) => props.theme.colors.white};
  width: 80px;
  height: 58px; 
  border: 3px solid ${(props) => props.theme.colors.white};
  transition: background 1s;

  &:hover{
    color: ${(props) => props.theme.colors.gray900};
    background: ${(props) => props.theme.colors.gray200};
  }
`;
