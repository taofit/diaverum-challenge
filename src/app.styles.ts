import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

export const GlobalWrapper = styled.div`
    font-family: EuclidCircular,sans-serif;
`;

export const Header = styled.header`
    background-color: #ffebe0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 10px 0;
    img {
      height: 100%;
      margin-left: 30px;
      max-width: 155px;
    }
    h1 {
      margin: 0;
      font-weight: 500;
      color: #1c5334;
    }
    svg {
      padding-right: 30px;
      align-self: center;
    }
`;

export const FileProcessWrapper = styled.div`
    padding: 0 30px;
`;

export const Instruction = styled.p`
    color: #1c5334;
`;

export const LabResult = styled.h2`
    color:#1c5334;
`
