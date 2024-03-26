import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import { Column, Row } from "../../styles/ui";
import {
  ImagesIcon,
  NextIcon,
  PencilIcon,
  PlayButtonIcon,
  TrashIcon,
  UserIcon,
} from "../../assets";

interface KeywordProps {
  id: number;
  type: string;
  word: string;
}

const WritePage = () => {
  const [keywords, setKeywords] = useState<
    { id: number; type: string; word: string }[]
  >([]);
  const [person, setPerson] = useState("");
  const [event, setEvent] = useState("");
  const [background, setBackground] = useState("");
  const [sseData, setSseData] = useState("");
  const [flag, setFlag] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  const [err, setErr] = useState(0);

  useEffect(() => {
    setErr(0);
  }, [keywords, sseData])

  useEffect(() => {
    scrollToBottom();
  }, [sseData]);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom2();
  }, [keywords]);

  const scrollToBottom2 = () => {
    if (scrollRef2.current) {
      scrollRef2.current.scrollTop = scrollRef2.current.scrollHeight;
    }
  };

  const addKeyword = (id: number, type: string, word: string) => {
    setKeywords((bf) => [...bf, { id: id, type: type, word: word }]);
  };

  const keywordId = useRef(0);

  const Keyword: React.FC<KeywordProps> = ({ id, type, word }) => {
    return (
      <div>
        <Row alignItems="center" justifyContent="space-between">
          <div style={{ display: "flex", alignItems: "center" }}>
            {type === "P" ? (
              <UserIcon width={2.4} height={2.4} />
            ) : type === "E" ? (
              <PlayButtonIcon width={2.4} height={2.4} />
            ) : (
              <ImagesIcon width={2.4} height={2.4} />
            )}
            <S.AddContentText>{word}</S.AddContentText>
          </div>
          <div onClick={() => remove(id)}>
            <TrashIcon />
          </div>
        </Row>
      </div>
    );
  };

  const remove = (id: number) => {
    const newKeywords = keywords.filter((it) => it.id !== id);
    setKeywords(newKeywords);
  };

  const makeDto = (keywords: { type: string; word: string }[]) => {
    let characters = "";
    let events = "";
    let backgrounds = "";

    keywords.forEach((keyword) => {
      if (keyword && keyword.type && keyword.word) {
        if (keyword.type === "P") characters += keyword.word + ", ";
        else if (keyword.type === "E") events += keyword.word + ", ";
        else if (keyword.type === "B") backgrounds += keyword.word + ", ";
      }
    });
    const dto = {
      characters: characters.substring(0, characters.length - 2),
      events: events.substring(0, events.length - 2),
      backgrounds: backgrounds.substring(0, backgrounds.length - 2),
    };

    return dto;
  };

  const writeNovel = (keywords: { type: string; word: string }[]) => {
    if (keywords.length === 0) {
      setErr(1);
      return;
    }
    if (flag) return;
    setFlag(() => true);
    const dto = makeDto(keywords);
    fetchSSE(dto);
  };

  const fetchSSE = (dto: {
    characters: string;
    events: string;
    backgrounds: string;
  }) => {
    setSseData("");

    fetch("http://localhost:3001/api/v3/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        keyword: dto,
      }),
    })
      .then((response) => {
        if (!response.body) {
          throw new Error("Null");
        }
        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        const readChunk = (): any => {
          return reader.read().then(appendChunks);
        };

        const appendChunks = (result: any) => {
          const chunk = decoder.decode(result.value || new Uint8Array(), {
            stream: !result.done,
          });
          setSseData((prevString) => prevString + chunk);

          if (!result.done) {
            return readChunk();
          }
          setFlag(() => false);
        };

        return readChunk();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const nextStep = () => {
    if (sseData === "") {
      setErr(2);
      return;
    }
    else {
      localStorage.setItem("keywords", JSON.stringify(makeDto(keywords)));
      localStorage.setItem("novel", sseData);
      window.location.href = "/view";
    }
  };

  return (
    <>
      <S.Title>새 소설 쓰기</S.Title>
      <Row alignItems="center" gap={8}>
        <Column>
          <S.ContentText>소설 구조 설정</S.ContentText>
          <S.ContentBox>
            <div
              style={{
                width: "100%",
                padding: "3.3rem 4rem",
                boxSizing: "border-box",
              }}
            >
              <Column gap={4}>
                <Row alignItems="center">
                  <UserIcon />
                  <S.RowText>인물</S.RowText>
                  <S.ContentInputBox
                    placeholder="인물 추가..."
                    type="text"
                    value={person}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPerson(e.target.value)
                    }
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                      if (e.key === "Enter" && person !== "") {
                        addKeyword(keywordId.current++, "P", person);
                        setPerson("");
                      }
                    }}
                  />
                </Row>
                <Row alignItems="center">
                  <PlayButtonIcon />
                  <S.RowText>사건</S.RowText>
                  <S.ContentInputBox
                    placeholder="사건 추가..."
                    type="text"
                    value={event}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEvent(e.target.value)
                    }
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                      if (e.key === "Enter" && event !== "") {
                        addKeyword(keywordId.current++, "E", event);
                        setEvent("");
                      }
                    }}
                  />
                </Row>
                <Row alignItems="center">
                  <ImagesIcon />
                  <S.RowText>배경</S.RowText>
                  <S.ContentInputBox
                    placeholder="배경 추가..."
                    type="text"
                    value={background}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setBackground(e.target.value)
                    }
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                      if (e.key === "Enter" && background !== "") {
                        addKeyword(keywordId.current++, "B", background);
                        setBackground("");
                      }
                    }}
                  />
                </Row>
              </Column>
            </div>
            <S.HelfLine />
            <div
              style={{
                width: "100%",
                padding: "3.3rem 4rem",
                boxSizing: "border-box",
              }}
            >
              <S.KeywordBox ref={scrollRef2}>
                {keywords.map((keyword, index) => (
                  <Keyword
                    key={index}
                    id={keyword.id}
                    type={keyword.type}
                    word={keyword.word}
                  />
                ))}
              </S.KeywordBox>
            </div>
          </S.ContentBox>
        </Column>
        <Column justifyContent="center" alignItems="center">
          <S.WriteButton
            onClick={() => writeNovel(keywords)}
            disabled={flag}
          >
            <PencilIcon width={4} height={4} />
          </S.WriteButton>
          {
            err === 1 && <S.ErrMsg>최소 한 가지의<br />키워드를 추가해주세요.</S.ErrMsg>
          }
        </Column>
        <Column>
          <S.ContentText>소설 미리 보기</S.ContentText>
          <S.ContentBox>
            <S.VeiwNovel ref={scrollRef}>
              {sseData !== ""
                ? sseData
                : "키워드를 입력하고 소설을 생성해보세요."}
            </S.VeiwNovel>
          </S.ContentBox>
        </Column>
        <Column justifyContent="center" alignItems="center">
          <S.WriteButton onClick={() => nextStep()}>
            <NextIcon width={4} height={4} />
          </S.WriteButton>
          {
            err === 2 && <S.ErrMsg>글쓰기 버튼을 눌러<br />소설을 작성해주세요.</S.ErrMsg>
          }
        </Column>
      </Row>
    </>
  );
};

export default WritePage;
