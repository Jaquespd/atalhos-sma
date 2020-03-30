import styled from 'styled-components';

export const Group = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

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

export const Badge = styled.button`
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 0px;
  }

  > img {
    width: 64px;
    height: 64px;
    /* background: #f58; */

    border-radius: 50%;
    margin-bottom: 10px;
  }

  > span {
    font-weight: bold;
  }
`;
