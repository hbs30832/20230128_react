import axios from "axios";

const postAxios = axios.create({
  baseURL: "http://101.101.218.43/posts",
});

const token = localStorage.getItem("token");
if (token) {
  postAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const getPosts = async (page) => {
  try {
    const { data } = await postAxios.get("/", {
      params: {
        page,
      },
    });

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getPostById = async (id) => {
  const { data } = await postAxios.get(id);

  return data;
};
