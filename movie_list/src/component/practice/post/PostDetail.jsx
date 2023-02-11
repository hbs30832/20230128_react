import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState({
    isLoading: true,
    data: null,
    isError: false,
  });

  const fetchData = useCallback(async () => {
    const { data } = await axios.get("http://localhost:5000/posts/" + id);

    setPost(data);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (post.isLoading) return;

  return (
    <div>
      <h2>제목 : {post.title}</h2>
      <div>내용 : {post.body}</div>
    </div>
  );
}

export default PostDetail;
