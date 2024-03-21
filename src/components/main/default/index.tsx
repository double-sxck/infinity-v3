import React from "react";
import styled from "styled-components";

const NovelBox = ({ uid, thumbnail, title, user, views }: { uid: number, thumbnail: String, title: String, user: String, views: number }) => {
  return (
    <div id={uid.toString()}>
      <ImageBox $url={thumbnail} />
      <NovelTitle>{title}</NovelTitle>
      <NovelContents>{user}</NovelContents>
      <NovelContents>조회수 {new Intl.NumberFormat('ko-KR', {
                            notation: 'compact',
                            maximumFractionDigits: 1,
                          }).format(views)}회</NovelContents>
    </div>
  );
};

export default NovelBox;

interface ImageBoxProps {
  $url: String;
}

const ImageBox = styled.div<ImageBoxProps>`
  width: 30rem;
  height: 30rem;
  border-radius: 2.4rem;

  background-color: #f5f5f5;
  background-image: ${props => `url(${props.$url})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  margin-bottom: 1rem;
`;

const NovelTitle = styled.p`
  max-height: 7.2rem;
  overflow: hidden;

  font-size: 2.4rem;
  font-weight: 400;
  color: #2c333e;
  line-height: 3.6rem;
`;

const NovelContents = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: #2c333e;
  line-height: 2.2rem;
`;
