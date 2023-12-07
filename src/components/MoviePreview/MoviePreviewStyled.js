import styled from 'styled-components';

export const DivStyled = styled.div`
  position: relative;
  border-radius: 5px;
`;

export const ImgStyled = styled.img`
  border-radius: 5px;
  cursor: pointer;
  object-fit: cover;
  box-shadow: 0 0 20px rgba(107, 46, 6, 0.7);
`;

export const VoteAverageStyled = styled.p`
  position: absolute;
  top: 2%;
  left: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 15px;
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 15% 50%, 0% 0%);
  background-color: orangered;
  color: white;

  font-size: 12px;
  opacity: 0.75;
`;
export const VoteWraperStyled = styled.p`
  display: flex;
  align-items: center;
  position: absolute;
  top: 2%;
  right: 2%;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 14px;
  opacity: 0.9;
`;
export const VoteCountStyled = styled.span`
  text-shadow: 1px 0 1px #8c1b21, 0 1px 1px #8c1b21, -1px 0 1px #8c1b21,
    0 -1px 1px #8c1b21;
`;
export const TitleStyled = styled.p`
  margin-top: 4px;
  font-size: 16px;
  font-weight: 700;
  color: black;
  opacity: 0.75;
  width: 300px;
  margin-bottom: 15px;
`;
