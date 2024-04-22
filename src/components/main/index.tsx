import * as S from "./style";
import { NovelBox, Row } from "../../styles/ui";
import { useState } from "react";
import { useEffect } from "react";
import { instance } from "../../apis/instance";
import Loading from "./loading";

interface Novel {
  uid: number;
  user: any;
  user_uid: number;
  title: string;
  content: string;
  thumbnail: string;
  category: any;
  views: number;
  novel_likes: any;
  comment: any;
}

const MainPage = () => {
  const [sort, setSort] = useState<string>("LATEST");
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [getPage, setGetPage] = useState<number>(1);
  const [novels, setNovels] = useState<{ data: Novel[]; meta: any }>({
    data: [],
    meta: {},
  });

  // Intersection observer 설정
  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && !isLoading) {
      setGetPage((prevPage) => prevPage + 1);
    }
  };
  // handleObserver: 교차점이 발생했을 때 실행되는 콜백 함수.
  // entries: 교차점 정보를 담는 배열
  // isIntersection: 교차점(intersection)이 발생한 요소의 상태
  // 교차점이 발생하면 getPage 1증가

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0, // intersection Observer의 옵션, 0일 때는 교차점이 한번말 발생하도록 실행
    });
    // 최하단 요소를 관찰 대상으로 지정함
    const observerTarget = document.getElementById("observer");
    // 관찰 시작
    if (observerTarget) {
      observer.observe(observerTarget);
    }
  }, []);

  useEffect(() => {
    getNovels();
  }, [getPage, sort]);

  useEffect(() => {
    setNovels(() => ({data: [], meta: {}}));
    if(getPage === 1 && novels.data.length !== 0) getNovels();
    else setGetPage(() => 1);
  }, [sort]);

  const getNovels = async () => {
    setIsLoading(true);
    try {
      const response = await instance.get("/novel", {
        params: {
          size: 30,
          index: getPage,
          viewType: sort,
        },
      });
      setNovels((prevData: { data: Novel[]; meta: any }) => ({
        ...prevData,
        data: [...prevData.data, ...response.data.data],
        meta: { ...response.data.meta },
      }));
    } catch (error: any) {
      if (error.response) {
        window.alert(`${error.response.status}에러가 발생했습니다.`);
      } else {
        window.alert("네트워크 에러가 발생했습니다.");
      }
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <Row gap={2.4}>
        <S.ListBox
          onClick={() => setSort(() => "LATEST")}
          $selected={sort === "LATEST"}
        >
          최신
        </S.ListBox>
        <S.ListBox
          onClick={() => setSort(() => "POPULAR")}
          $selected={sort === "POPULAR"}
        >
          인기
        </S.ListBox>
      </Row>
      <S.ContentsArea>
        {novels.data.map((novel: Novel, index: number) => (
          <NovelBox
            key={index}
            uid={novel.uid}
            thumbnail={novel.thumbnail}
            title={novel.title}
            user={novel.user}
            views={novel.views}
          />
        ))}
        {
          isLoading &&
          <Loading />
        }
        <div id="observer" style={{ height: "10px" }}></div>
      </S.ContentsArea>
    </div>
  );
};

export default MainPage;
