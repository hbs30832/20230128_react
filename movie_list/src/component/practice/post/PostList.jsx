import { Link, useOutletContext } from "react-router-dom";

function PostList() {
  const { posts } = useOutletContext();

  const { data, isLoading } = posts;

  if (isLoading) return;
  console.log(data);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={"/post/" + item.id}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/post/edit">글 작성하기</Link>
    </div>
  );
}

export default PostList;
