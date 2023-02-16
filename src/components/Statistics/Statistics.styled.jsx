import styled from '@emotion/styled';

export const Statistic = styled.p`
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  padding: 12px;
  margin: 0;
  text-shadow: 0 0 4px #000000;
`;

export const СontainerStatistic = styled.div`
  border: 1px solid #000000;
  width: 350px;
  background-color: #ff6b08;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  svg {
    margin-right: 8px;
    vertical-align: middle;
    svg { filter: sepia() saturate(1000%) hue-rotate(0deg) }
  }
`;
