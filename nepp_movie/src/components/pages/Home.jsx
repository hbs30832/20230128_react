import ContentList from "../home/ContentList";

const filters = {
  trending: [
    { id: 1, text: "movie", active: true, url: "/trending/movie/week" },
    { id: 2, text: "tv", active: false, url: "/trending/tv/week" },
    { id: 3, text: "people", active: false, url: "/trending/person/week" },
  ],
};

function Home() {
  return (
    <div>
      <ContentList title="트렌딩" initialState={filters.trending} />
      {/* <ContentList title="뭐가 인기 있니?" /> */}
    </div>
  );
}

export default Home;
