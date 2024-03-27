import { useEffect, useState } from "react";
import * as S from "./style";
import { Column, Row } from "../../styles/ui";
import {
  BrashIcon,
  CoffeeIcon,
  CopyIcon,
  HeartArrowIcon,
  ImageIcon,
  MagicStickIcon,
  MakingThumbnail,
  MoreIcon,
  ScaryFaceIcon,
  TextInputIcon,
  UploadIcon,
} from "../../assets";
import ShopIcon from "../../assets/images/ShopIcon";
import { instance } from "../../apis/instance";
import { customErrToast, customSucToast, customWaitToast } from "../../toasts/customToast";

const ViewPage = () => {
  interface Keywords {
    characters: string;
    events: string;
    backgrounds: string;
  }

  const [keywords, setKeywords] = useState<Keywords>({
    characters: "",
    events: "",
    backgrounds: "",
  });

  const [tag, setTag] = useState(1);
  const [novel, setNovel] = useState("");
  const [prompt, setPrompt] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    const k = localStorage.getItem("keywords");
    if (k !== null) setKeywords(JSON.parse(k));
    const n = localStorage.getItem("novel");
    if (n) setNovel(n);
  }, []);

  useEffect(() => {
    if (novel !== "") {
      setPrompt(
        () => `thumbnail of ${keywords.events} in ${keywords.backgrounds}`,
        // `please draw novel's thumbnail with this keywords: [characters: ${keywords.characters}] [events: ${keywords.events}] [backgrounds: ${keywords.backgrounds}]`
      );
    }
  }, [keywords, novel]);

  useEffect(() => {
    if (novel !== "") DALL_E(prompt);
  }, [novel, prompt]);

  const drawThumbnail = () => {
    if (userPrompt === "") {
      customErrToast("프롬프트를 작성해주세요.");
      return;
    }
    if (flag) {
      customWaitToast("썸네일 생성 중입니다.");
      return;
    }
    DALL_E(userPrompt);
  };

  const DALL_E = async (prompt: string) => {
    try {
      setFlag(() => true)
      setThumbnail(() => "");
      const token = localStorage.getItem("refresh-token");
      if (prompt) {
        const response = await instance.post(
          "/image",
          {
            prompt: prompt,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setThumbnail(response.data);
        setFlag(() => false)
        setUserPrompt("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const categories = ["ROMANCE", "FANTASY", "DAILY", "THRILLER", "FEATURE", "ETC"];

  const postNovel = () => {
    if (title === "") {
      customErrToast("제목을 작성해주세요.");
      return;
    }
    const dto = {
      thumbnail: thumbnail,
      title: title,
      category: categories[tag - 1],
      content: novel,
    };
    post(dto);
  };

  const post = async (dto: {
    thumbnail: string;
    title: string;
    category: string;
    content: string;
  }) => {
    try {
      const token = localStorage.getItem("refresh-token");
      await instance.post(
        "/novel",
        {
          thumbnail: `http://localhost:3001${dto.thumbnail}`,
          title: dto.title,
          category: dto.category,
          content: dto.content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      customSucToast("소설이 게시되었습니다.");
      localStorage.removeItem("keywords");
      localStorage.removeItem("novel");
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <S.Title>업로드 설정</S.Title>
      <Row alignItems="center" gap={8}>
        <S.ContentBox>
          <Column gap={2} alignItems="center" justifyContent="center">
            <S.Empty />
            <Row gap={3.6} alignItems="center" justifyContent="center">
              <ImageIcon height={4} width={4} />
              <S.ContentText>썸네일</S.ContentText>
            </Row>
            {thumbnail === "" ? (
              <MakingThumbnail width={48} height={48} />
            ) : (
              <S.Thumbnail $url={thumbnail} />
            )}
            <Row justifyContent="center" alignItems="center">
              <S.ContentInputBox
                placeholder="원하는 썸네일 직접 생성..."
                value={userPrompt}
                onChange={(e: any) => setUserPrompt(e.target.value)}
              />
              <S.DrawButton
                onClick={() => drawThumbnail()}
              >
                <BrashIcon />
              </S.DrawButton>
            </Row>
            <S.Empty />
          </Column>
          <S.Vertical />
          <Column gap={4} alignItems="center">
            <Row gap={3.6}>
              <TextInputIcon />
              <S.ContentText>제목</S.ContentText>
            </Row>
            <S.LargeContentInputBox
              placeholder="제목 작성..."
              value={title}
              onChange={(e: any) => setTitle(e.target.value)}
            />
            <S.Horizontal />
            <Row gap={3.6}>
              <ShopIcon />
              <S.ContentText>태그</S.ContentText>
            </Row>
            <Column gap={2.4}>
              <S.Keyword onClick={() => setTag(1)}>
                <HeartArrowIcon width={3} height={3} />
                로맨스 / 감성
                {tag === 1 && <S.Selected />}
              </S.Keyword>
              <S.Keyword onClick={() => setTag(2)}>
                <MagicStickIcon width={3} height={3} />
                판타지 / 이세계
                {tag === 2 && <S.Selected />}
              </S.Keyword>
              <S.Keyword onClick={() => setTag(3)}>
                <CoffeeIcon width={3} height={3} />
                일상 / 코미디
                {tag === 3 && <S.Selected />}
              </S.Keyword>
              <S.Keyword onClick={() => setTag(4)}>
                <ScaryFaceIcon width={3} height={3} />
                스릴러 / 호러
                {tag === 4 && <S.Selected />}
              </S.Keyword>
              <S.Keyword onClick={() => setTag(5)}>
                <CopyIcon width={3} height={3} />
                장편 / 시리즈
                {tag === 5 && <S.Selected />}
              </S.Keyword>
              <S.Keyword onClick={() => setTag(6)}>
                <MoreIcon width={3} height={3} />그 외{tag === 6 && <S.Selected />}
              </S.Keyword>
            </Column>
          </Column>
        </S.ContentBox>
        <S.WriteButton onClick={() => postNovel()}>
          <UploadIcon width={4} height={4} />
        </S.WriteButton>
      </Row>
    </>
  );
};

export default ViewPage;
