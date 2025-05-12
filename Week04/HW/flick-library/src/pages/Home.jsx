import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/Navbar";

const Home = () => {
  const [shows, setShows] = useState([]); // 불러온 프로그램 목록
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 메세지

  // 컴포넌트 마운트 시 TVmaze API로부터 프로그램 목록을 가져옴
  useEffect(() => {
    const fetchShows = async () => {
      try {
        // API 요청
        const response = await axios.get("https://api.tvmaze.com/shows");
        const data = response.data;

        // 평점 기준으로 정렬 후 상위 52개만 선택
        const topRatedShows = data
          .sort((a, b) => (b.rating?.average || 0) - (a.rating?.average || 0))
          .slice(0, 52);
        setShows(topRatedShows); // 상태에 저장
      } catch (err) {
        setError("데이터를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    fetchShows();
  }, []);

  // 로딩 중일 때
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-2xl">로딩 중...</div>
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
      <div className="mx-auto px-4 mt-10">
        <h1 className="text-2xl font-bold mb-8">
          🔥 인기 콘텐츠를 확인해보세요!
        </h1>
        <div className="grid grid-cols-4 gap-6 justify-items-center">
          {shows.map((show) => (
            <MovieCard key={show.id} show={show} /> // 각 프로그램을 카드로 출력
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
