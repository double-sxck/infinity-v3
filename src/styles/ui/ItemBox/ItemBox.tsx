import styled from "styled-components";
import { ItemBoxAttribute } from "../../../types/ui/ItemBoxAttribute.type";

const ItemBox = ({ width = 35, height = 5, children }: ItemBoxAttribute) => {
  return <Container>{children}</Container>;
};

export default ItemBox;

const Container = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;

  justify-content: start;
  align-items: center;

  gap: 2.5rem;
`;
