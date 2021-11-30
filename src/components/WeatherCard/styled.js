import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 321px;
  height: 490px;
  background-color: var(--dark-blue); //#649fd2
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  margin: 0 auto;
  margin-bottom: 40px;
  margin-top: 35px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const CardVerticalBar = styled.span`
  font-size: 44px;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.5);
`;

export const CardIcon = styled.img`
  width: 80px;
`;
