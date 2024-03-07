import React from "react";
import styled from "styled-components";

const NovelBox = () => {
  return (
    <div>
      <ImageBox />
      <NovelTitle>[소설 제목]</NovelTitle>
      <NovelContents>[쓴 사람]</NovelContents>
      <NovelContents>조회수 N회</NovelContents>
    </div>
  );
};

export default NovelBox;

const ImageBox = styled.div`
  width: 30rem;
  height: 30rem;
  border-radius: 2.4rem;

  background-color: black;
`;

const NovelTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 400;
  color: #2c333e;
`;

const NovelContents = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: #2c333e;
`;
