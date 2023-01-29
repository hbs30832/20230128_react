// src/component/Hello.jsx

// 첫번째 매개변수로 props 객체 전달.
// 사용자 지정 컴포넌트의 여는 태그와 닫는 태그의 사이의 내용(자식)은 props.children으로 넘어온다.

function Hello({ title, color, backgroundColor, children }) {
  /* 
        JSX(JavaScript and XML)
            - JS코드를 HTML 구조에 맞게 작성하기 위해 쓰는 문법.
                => 전체 구조 파악이 쉽다.
            - 무조건 하나의 태그를 반환해야한다.
                => 여러개의 태그를 사용하면 하나의 태그로 감싸주어야한다.
                => Fragment(<></>) 를 이용하면 불필요한 태그 생성 방지.
            - JSX 안에서 {} 안에 JS 표현식(값)을 포함시킬 수 있다.
            - 닫는 태그가 필요없는 태그는 self-closing 태그를 사용해야한다.
                => 여는 태그에 /를 붙여서 닫아준다.
            - 인라인 스타일은 style 속성에 JS 객체 형태로 지정한다.
                => background-color처럼 여러 단어의 속성은 카멜케이스로 작성한다.
            - 이벤트 바인딩은 onClick처럼 카멜 케이스를 사용한다.
    */

  const element = <p>P태그입니다.</p>;

  return (
    <>
      <div style={{ color, backgroundColor }} onClick={() => alert("click")}>
        Hello {title}
      </div>
      {element}
      <input type="text" />
      {children}
    </>
  );
}

// props가 전달되지 않았을 때 기본 적용할 값들.
Hello.defaultProps = {
  title: "React",
  color: "green",
};

export default Hello;
