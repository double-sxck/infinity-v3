import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3001/api/v3",
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  (error) => {
    return error;
  },
);

instance.interceptors.response.use(
  async (res) => {
    return res;
  },
  async (error) => {
    console.log(error);
    //     if ( // 403에러가 뜨고 토큰이 있을때 재발급해주는 코드
    //       error.response.status === 403 &&
    //       localStorage.getItem("refresh-token")
    //     ) {
    //       try {
    //         axios
    //           .put(
    //             "http://localhost:3001/api/v3  ",
    //             {},
    //             {
    //               headers: {
    //                 "Authorization-refresh": `Bearer ${localStorage.getItem(
    //                   "refresh-token"
    //                 )}`,
    //               },
    //             }
    //           )
    //           .then(({ data }) => {
    //             localStorage.setItem("access-token", data.accessToken);
    //             localStorage.setItem("refresh-token", data.refreshToken);
    //           });
    //       } catch (e) {}
    //     }
    //     return Promise.reject(error);
  },
);
