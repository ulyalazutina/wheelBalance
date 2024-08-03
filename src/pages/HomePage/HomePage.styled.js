import styled from "styled-components";

export const Div = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
`;

export const H1 = styled.h1`
  font-family: "Great Vibes", cursive;
  font-size: 100px;
  text-align: center;
  margin: 0;
`;

export const Pdesc = styled.p`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

export const Plink = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const Span = styled.span`
  font-weight: 700;
  color: #816e5d;
  text-decoration: underline;
  cursor: pointer;
  transition: color .3s;
  &:hover {
    color: black;
  }
`;
