import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

`;

export const Container = styled.main`
  display: flex;
  min-height: 100vh;
  color: ${(props) => props.theme.colors.white};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
    background: ${(props) => props.theme.colors.gray900};
    min-width: 20rem;
    max-height: 100vh;
`;

export const Main = styled.section`
    background: ${(props) => props.theme.colors.gray800};
    width: 100%;
    height: 100%;
    min-height: 98vh;
    padding: 1vh 40px;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
      height: 100%;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 86vw;
      padding: 3vw 5vw;
    }
`;