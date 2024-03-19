export const Authorization = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
  };
};
