import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 480px;
  height: 160px;
  background-color: #649fd2;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
`;

export const CardInfo = styled.div``;

export const CardTitle = styled.p`
  font-size: ${(props) => props.size}px;
  font-weight: 200;
`;

export const CardTempInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const CardVerticalBar = styled.span`
  margin: 0 10px;
  font-size: 44px;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.5);
`;

export const CardIcon = styled.img`
  width: 80px;
`;
