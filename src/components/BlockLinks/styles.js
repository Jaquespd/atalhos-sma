import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding-top: 0;
    flex-direction: column;
  }
`;

export const Badge = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 30px;
  }

  > img {
    width: 64px;
    height: 64px;
    /* background: #f58; */

    border-radius: 50%;
    margin-bottom: 10px;
  }

  > span {
    color: rgba(0, 0, 0, 0.5);
    font-weight: bold;
  }
`;
