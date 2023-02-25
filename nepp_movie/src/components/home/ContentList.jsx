import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { tmdbAxios } from "../../api/tmdb";
import ContentItem from "./ContentItem";

function ContentList({ title, initialState }) {
  // filters의 값이 바뀔 때마다 get 요청 다시!
  //    => active가 true인 filter의 url 사용!
  //    => 특정 값이 바뀔 때 마다 실행
  const [filters, setFilter] = useState(initialState);
  const [items, setItems] = useState([]);

  const handleToggle = (id) => {
    setFilter(
      filters.map((filter) =>
        // 클릭한 대상은 무조건 active를 true로, 나머지는 무조건 false로
        filter.id === id
          ? { ...filter, active: true }
          : { ...filter, active: false }
      )
    );
  };

  const fetchData = async (url) => {
    // 비구조화 할당 중첩해서 사용
    const {
      data: { results },
    } = await tmdbAxios.get(url);

    // const results = res.data.results;

    setItems(results);
  };

  useEffect(() => {
    // filters의 값이 변할 때마다 실행
    const { url } = filters.find((filter) => filter.active);
    fetchData(url);
  }, [filters]);

  return (
    <Container>
      <ContentHeader>
        <h3>{title}</h3>
        <FilterList>
          {filters.map((filter) => (
            <FilterItem
              key={filter.id}
              active={filter.active}
              onClick={() => handleToggle(filter.id)}
            >
              {filter.text}
            </FilterItem>
          ))}
        </FilterList>
      </ContentHeader>
      <ContentWrapper>
        {/* 실제 데이터 반영해서 제목만 출력하기 */}
        {items.map((item) => (
          <ContentItem key={item.id} item={item} />
        ))}
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 0;
`;

const ContentHeader = styled.div`
  display: flex;
`;

const FilterList = styled.ul`
  display: flex;
  border: 1px solid black;
  margin-left: 20px;
`;

const FilterItem = styled.li`
  padding: 0 10px;
  cursor: pointer;
  user-select: none;
  ${({ active }) =>
    active &&
    css`
      background-color: black;
      color: #fff;
    `}
`;

const ContentWrapper = styled.ul`
  display: flex;
  padding: 20px 0;
  overflow-x: auto;
  gap: 20px;
`;

export default ContentList;
