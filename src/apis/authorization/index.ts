export const Authorization = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("refresh-token")}`, // Replace 'yourAccessToken' with the actual access token
    },
  };
};
