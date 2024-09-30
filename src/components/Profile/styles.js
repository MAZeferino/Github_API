import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
    flex-direction: row;
    align-items: center;   
  }
`;

export const Avatar = styled.img`
  align-self: center;
  border-radius: 50%;
  width: 90%;
  margin-bottom: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
    width: 70px;
    height: 70px; 
    margin-right: 1rem;
    margin-bottom: 0;  
  }
`;

export const Nick = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xl};
`;

export const Name = styled.h2`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: normal;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
    display: none;
  }
`;

export const Inner = styled.div`
  padding: 1rem;
  padding-top: 0;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
    display: none;
  }
`;

export const Data = styled.p`
  display: flex;
  align-items: center;
  line-height: 1.5;

  svg{
    margin-rigth: 10px;
  }
`;

export const Button = styled.a`
  color: ${(props) => props.theme.colors.white};
  width: 10%;
  transition: 1s;

  &:hover, &.selected {
    transform: translateX(0) scale(1.3);
  }
`;

