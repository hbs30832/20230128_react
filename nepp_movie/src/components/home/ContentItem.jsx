// src/components/home/ContentItem.jsx

import styled from "styled-components";

function ContentItem({ item }) {
  const poster_url = "https://image.tmdb.org/t/p/w200" + item.poster_path;

  return (
    <Container>
      <ImageBox>
        <img src={poster_url} alt="" />
      </ImageBox>
      <Title>{item.title}</Title>
      <ReleaseDate>{item.release_date}</ReleaseDate>
    </Container>
  );
}

const Container = styled.li`
  img {
    width: 200px;
  }
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 200px;
  overflow: hidden;
  img {
    height: 100%;
  }
`;

const Title = styled.p`
  font-weight: 700;
`;

const ReleaseDate = styled.span`
  font-size: 0.8rem;
  color: #bbb;
`;

export default ContentItem;
