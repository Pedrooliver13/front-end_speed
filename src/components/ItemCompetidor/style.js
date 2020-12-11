import styled from 'styled-components';

export const ListCompetidor = styled.div`
  width: 100%;
  padding: 1.2rem;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  margin-bottom: 1rem;
  background-color: #fff;
  border-radius: 5px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: 1px solid transparent;
  }

  .icon {
    width: 10%;
    margin-right: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .name {
    width: 56%;
    display: flex;
    align-items: center;
    
    p {
      font-weight: bold;
      color: #000;
      margin-right: 0.5rem;
    }
  }

  .info {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
      background: transparent;
      border: 0;
      color: #f56783;
      font-size: 0.75rem;
      font-weight: bold;
      width: auto;
      outline: 0;
    }
  }

  button {
    width: 100%;
  }
`;