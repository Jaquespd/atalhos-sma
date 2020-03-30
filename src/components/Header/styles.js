import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 100px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Content = styled.div`
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
