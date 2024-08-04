import { Link } from "react-router-dom";
import styled from "styled-components";

export const Div = styled(Link)`
  border-radius: 10%;
  background-color: #e2dbd3;
  padding: 20px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 15px 16px 20px 0px rgba(34, 60, 80, 0.2);
    transform: scale(1.2)
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const P = styled.p`
  text-align: center;
  font-size: 18px;
  color: black;
  margin-top: 15px;
`;
