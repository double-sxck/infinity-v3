import styled from "styled-components";

export const Title = styled.div`
  width: calc(100% - 24rem);
  margin: 4rem 0;

  font-size: 4.8rem;
  font-weight: 700;
  text-align: center;
`

export const ContentBox = styled.div`
  width: 120rem;
  height: 66.3rem;

  border: 0.1rem solid #9a9a9a;
  border-radius: 2.4rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

interface ThumbnailProps {
  $url: String;
}

export const Thumbnail = styled.div<ThumbnailProps>`
  width: 48rem;
  height: 48rem;

  border-radius: 2rem;

  background-color: #f5f5f5;
  background-image: ${(props) => `url(${process.env.REACT_APP_IMAGE_KEY}${props.$url})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

export const ContentText = styled.p`
  font-size: 3.2rem;
  font-weight: 400;
  color: #2c333e;
  text-align: center;
  line-height: 4rem;
  cursor: default;
`;

export const ContentInputBox = styled.input`
  width: 40rem;
  height: 5rem;
  border: 0.2rem solid #2c333e;
  border-radius: 2.4rem 2.4rem 2.4rem 0rem;
  padding: 0.5rem 2rem;
  font-size: 2.4rem;
  font-weight: 400;

  ::placeholder {
    color: #9a9a9a;
  }
`;

export const LargeContentInputBox = styled.input`
  width: 50rem;
  height: 6rem;
  border: 0.2rem solid #2c333e;
  border-radius: 2.4rem 0rem 2.4rem 2.4rem;
  padding: 0.5rem 2rem;
  font-size: 2.4rem;
  font-weight: 400;

  ::placeholder {
    color: #9a9a9a;
  }
`;

export const RowText = styled.p`
  color: #2c333e;
  font-size: 2.4rem;
  font-weight: 400;

  margin-left: 1.8rem;
  margin-right: 4rem;
`;

export const AddContentText = styled.p`
  font-size: 2.4rem;
  font-weight: 400;
  color: #2c333e;
  text-align: center;

  margin-left: 2rem;
`;

export const WriteButton = styled.div`
  width: 8rem;
  height: 8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.1rem solid #d9d9d9;
  border-radius: 2.4rem;

  cursor: pointer;
`;

export const DrawButton = styled.button`
  width: 4.2rem;
  height: 4.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.1rem solid #d9d9d9;
  border-radius: 2.4rem;

  margin-left: 2rem;
  cursor: pointer;
`;

export const VeiwNovel = styled.div`
  width: 100%;
  height: 100%;

  padding: 2rem;

  color: #2c333e;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3rem;

  overflow: auto;
  white-space: pre-wrap;
`;

export const KeywordBox = styled.div`
  height: 30rem;

  display: flex;
  flex-direction: column;

  gap: 2.5rem;

  overflow: auto;
`

export const Vertical = styled.div`
  height: 100%;
  border-left: 0.1rem solid #9a9a9a;
  margin: 1rem 0rem;
`

export const Horizontal = styled.div`
  width: 60rem;
  border-top: 0.1rem solid #9a9a9a;
`

export const Empty = styled.div`
  width: 60rem;
`

export const Keyword = styled.div`
  width: 36rem;

  display: flex;
  align-items: center;

  font-size: 2.4rem;

  gap: 4rem;
  cursor: pointer;
`

export const Selected = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;

  margin: auto 0 auto auto;

  background-color: #2c333e;
`