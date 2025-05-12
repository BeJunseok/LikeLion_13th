import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import { useParams } from "react-router-dom";
import MoiveCard from "../components/MovieCard";

const Search = () => {
  const { query } = useParams(); // URL 파라미터에서 검색어 추출
  const [searchResults, setSearchResults] = useState([]); // 검색 결과 리스트
  const [loading, setLodaing] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 메세지

  // 검색어 변경 시 API 요청
  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query) {
        // 검색어가 없을 경우 검색 초기화
        setSearchResults([]);
        setLodaing(false);
        return;
      }

      try {
        setLodaing(true);
        const response = await axios.get(
          `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`
        );
        setSearchResults(response.data.map((item) => item.show));
      } catch (err) {
        setError(err.message);
      } finally {
        setLodaing(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  // 로딩 중일 때
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-2xl">검색 중...</div>
      </div>
    );
  }

  // 에러 발생 시
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-2xl text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <div className="mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">검색 결과</h1>
          <p className="text-gray-400">
            {query}에 대한 검색결과 : {searchResults.length}개{" "}
          </p>
        </div>

        {/* 검색 결과 출력 */}
        {searchResults.length === 0 ? (
          <div className="text-center text-gray-400 text-xl mt-20">
            검색결과가 없습니다.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6 justify-items-center">
            {searchResults.map((show) => (
              <MoiveCard key={show.id} show={show} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
