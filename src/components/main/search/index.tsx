import React from "react";
import styled from "styled-components";
import { Column } from "../../../styles/ui";

const NovelSearchBox = () => {
  return (
    <Column gap={4}>
      <Row>
        <ImageBox />
        <Column gap="2">
          <NovelTitle>[강승훈의 은밀한생활]</NovelTitle>
          <NovelContent>조회수 1004회</NovelContent>
          <NovelContent>마현우 시치</NovelContent>
          <NovelContent>
            몰라요 유미는몰라요 유미는몰라요 유미는몰라요 유미는몰라요 유미는
            유미는 아무것도 몰라요 유미는 아무것도 몰라요 유미는 아무것도 몰라요
            유미는 아무것도 몰라요 유미는 아무것도 몰라요 유미는 아무것도 몰라요
            유미는 아무것도 몰라요 유미는 아무것도 몰라요 유미는 아무것도 몰라요
            유미는 아무것도 몰라요 유미는 아무것도 몰라요 유미는 아무것도 몰라요
          </NovelContent>
        </Column>
      </Row>
    </Column>
  );
};

export default NovelSearchBox;

const Row = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 4rem;
`;

const ImageBox = styled.div`
  width: 26rem;
  height: 26rem;
  border-radius: 2.4rem;
  flex-shrink: 0;

  background-color: black;
`;

const NovelTitle = styled.p`
  font-size: 2.8rem;
  font-weight: 400;
  color: #2c333e;
`;

const NovelContent = styled.p`
  width: auto;
  max-width: 50%;
  height: auto;
  font-size: 1.8rem;
  font-weight: 400;
  color: #2c333e;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
