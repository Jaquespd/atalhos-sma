import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Badge = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

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
