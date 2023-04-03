import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: start;
  padding: 40px 0 40px 40px;
  grid-row-gap: 30px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
