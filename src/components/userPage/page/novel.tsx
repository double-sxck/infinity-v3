import React from "react";
import styled from "styled-components";
import { Column } from "../../../styles/ui";

const NovelContents = ({ uid, thumbnail, title, user, views, content }: { uid: number, thumbnail: String, title: String, user: String, views: number, content: String }) => {
  return (
    <div id={uid.toString()} className="mt-16">
      <Row>
        <ImageBox $url={thumbnail} />
        <Column gap="2">
          <NovelTitle>{title}</NovelTitle>
          <NovelContent>조회수 {new Intl.NumberFormat('ko-KR', {
                                notation: 'compact',
                                maximumFractionDigits: 1,
                              }).format(views)}회</NovelContent>
          <NovelContent>{user}</NovelContent>
          <NovelContent>
            {content}
          </NovelContent>
        </Column>
      </Row>
    </div>
  );
};

export default NovelContents;

const Row = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 4rem;
`;

interface ImageBoxProps {
  $url: String;
}

const ImageBox = styled.div<ImageBoxProps>`
  width: 26rem;
  height: 26rem;
  border-radius: 2.4rem;
  flex-shrink: 0;

  background-color: #f5f5f5;
  background-image: ${props => `url(${props.$url})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const NovelTitle = styled.p`
  max-height: 11rem;
  overflow: hidden;
  text-overflow: ellipsis;
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
