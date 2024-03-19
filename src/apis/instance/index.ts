import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3001/api/v3",
});

instance.interceptors.response.use(
  async (res) => {
    return res;
  },
  async (error) => {
    if (
      error.response.status === 403 &&
      localStorage.getItem("refresh-token")
    ) {
      try {
        axios
          .put(
            "http://findfriend.kro.kr/api/auth/refresh",
            {},
            {
              headers: {
                "Authorization-refresh": `Bearer ${localStorage.getItem(
                  "refresh-token"
                )}`,
              },
            }
          )
          .then(({ data }) => {
            localStorage.setItem("access-token", data.accessToken);
            localStorage.setItem("refresh-token", data.refreshToken);
          });
      } catch (e) {}
    }

    return Promise.reject(error);
  }
);
