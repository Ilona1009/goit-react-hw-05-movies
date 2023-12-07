import styled from 'styled-components';

export const MainWrapperStyled = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;

  @media (min-width: 768px) {
    display: flex;
  }
`;
export const ImgPosterStyled = styled.img`
  width: 300px;
  border-radius: 4px;
  filter: saturate(150%);
  box-shadow: 0 0 20px rgba(107, 46, 6, 0.7);

  @media (min-width: 768px) {
    width: 400px;
  }
`;
export const InfoWrapperStyled = styled.div`
  @media (min-width: 768px) {
    margin-left: 50px;
  }
`;
export const TitleWrapperStyled = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.75);

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const TitleStyled = styled.h2`
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 25px;
    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    font-size: 50px;
    margin-bottom: 0;
  }
`;
export const ReleseDataStyled = styled.p`
  font-weight: 700;
  font-size: 15px;
  color: wheat;

  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;
export const GenresListStyled = styled.ul`
  margin-bottom: 50px;
  display: flex;
  color: #50c878;
  text-shadow: 1px 0 1px black, 0 1px 1px black, -1px 0 1px black;
`;
export const GenresItemStyled = styled.li`
  font-weight: 700;
  font-size: 15px;
  margin-right: 15px;

  :last-child {
    margin-right: 0;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;
export const DescriptionStyled = styled.p`
  line-height: 2;
  font-size: 15px;
  margin-bottom: 50px;
  color: gainsboro;

  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;
export const VoteWrapperStyled = styled.div`
  font-weight: 500;
  font-size: 15px;
  color: black;
`;
export const VoteAverageStyled = styled.p`
  padding: 10px 0;
`;
export const ValueStyled = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;
export const VoteCountStyled = styled.p`
  padding: 10px 0;
`;
