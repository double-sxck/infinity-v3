import React from "react";
import styled from "styled-components";
import { Column } from "../../../styles/ui";

const NovelContents = () => {
  const Content = () => {
    return (
      <Row>
        <ImageBox />
        <Column gap="2">
          <NovelTitle>[강승훈의 은밀한생활]</NovelTitle>
          <NovelContent>조회수 1004회</NovelContent>
          <NovelContent>마현우 시치</NovelContent>
          <NovelContent>
            유미 유미 유미 유미 유미 유미 유미 유미 유미 유미 유미 유미 유미
            유미 유미 유미 유미 유미 유미 유미 유미 유미 유미 유미 유미 유미
            유미 유미 유미 유미 유미 유미 유미 유미 유미 유미 유미 유미 유미
            유미 유미 유미 유미 유미 유미 유미 유미 유미 유미 유미 유미 유미
          </NovelContent>
        </Column>
      </Row>
    )}

  return (
    <>
      <div className="mt-16">
        <Column gap={4}>
          <Content />
          <Content />
          <Content />
        </Column>
      </div>
    </>
  );
};

export default NovelContents;

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

  background-color: lightgray;
`;

const NovelTitle = styled.p`
  font-size: 2.8rem;
  font-weight: 400;
  color: #2c333e;
`;

const NovelContent = styled.p`
  width: auto;
  max-width: 115rem;
  height: auto;
  font-size: 1.8rem;
  font-weight: 400;
  color: #2c333e;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
