import styled from 'styled-components';
import { darken } from 'polished';

export const ProductItem = styled.li`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;

  img {
    align-self: center;
    max-width: 250px;
  }

  > strong {
    font-size: 16px;
    line-height: 20px;
    color: #333;
    margin-top: 5px;
  }

  > span {
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
  }

  button {
    margin-top: auto;
    background: #7159c1;
    padding: 12px;
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    transform: 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      background: ${darken(0.03, '#7159c1')};
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
`;
