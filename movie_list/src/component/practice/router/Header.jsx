import { Link } from "react-router-dom";
// react-router-dom을 통해서 새로고침 없이 라우팅을 하려면 Link 컴포넌트를 사용해야한다.

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="post">Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
