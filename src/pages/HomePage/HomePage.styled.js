import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Div = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
  gap: 20px;
`;

export const H1 = styled.h1`
  font-family: "Great Vibes", cursive;
  font-size: 100px;
  text-align: center;
`;

export const Pdesc = styled.p`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  line-height: 45px;
`;

export const Plink = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  color: #816e5d;
  transition: color .3s;
  &:hover {
    color: black;
  }
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
