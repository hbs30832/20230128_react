import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../../api/post";

// src/components/pages/Post.jsx
function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const { data, isLoading, error } = post;

  const fetchData = useCallback(async () => {
    const data = await getPostById(id);
    setPost({
      data,
      isLoading: false,
      error: null,
    });
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log(data);

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <div>
      <img src={data.img_list[0].url} alt="" />
      {data.author.name}

      <p>{data.body}</p>
    </div>
  );
}

export default Post;
