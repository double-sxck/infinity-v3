import { Authorization } from "../../apis/authorization";
import { instance } from "../../apis/instance";
import { useQuery } from "react-query";

const GetList = async (id: number) => {
  const response = await instance.get("/comment/" + id, Authorization());
  console.log(response.data);
  return response.data;
};

export const useGetListQuery = (id: number) => {
  const { data, ...restQuery } = useQuery<void, Error, void>({
    queryKey: ["getCommentList", id], // query key 지정
    queryFn: () => GetList(id), // 실행시킬 함수 지정
  });

  return { data, ...restQuery };
};
