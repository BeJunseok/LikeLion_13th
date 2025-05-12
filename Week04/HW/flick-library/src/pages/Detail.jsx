import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const Detail = () => {
  const { id } = useParams(); // URL 파라미터에서 프로그램 ID 추출
  const [show, setShow] = useState(null); // 프로그램 상세 정보 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 메세지

  // 프로그램 상세 정보 API 요청
  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(response.data);
      } catch (err) {
        setError("프로그램 정보를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchShowDetails(); // 컴포넌트 마운트 시 호출
  }, [id]);

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

  // 프로그램 정보가 없을 때
  if (!show) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-2xl">프로그램을 찾을 수 없습니다.</div>
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* 이미지와 기본 정보는 MovieCard 스타일 재사용 */}
        <div className="w-1/3">
          <MovieCard show={show} />
        </div>

        {/* 추가 정보 섹션 */}
        <div className="w-full md:w-2/3">
          {/* 기본 정보 */}
          <div className="space-y-4 mb-8">
            {/* 평점 */}
            {show.rating?.average && (
              <div className="flex items-center gap-2">
                <span className="text-gray-400">평점:</span>
                <span className="text-yellow-400">
                  ⭐️ {show.rating.average}
                </span>
              </div>
            )}
            {/* 방영 상태 */}
            {show.status && (
              <div className="flex items-center gap-2">
                <span className="text-gray-400">상태:</span>
                <span>{show.status}</span>
              </div>
            )}
            {/* 언어 */}
            {show.language && (
              <div className="flex items-center gap-2">
                <span className="text-gray-400">언어:</span>
                <span>{show.language}</span>
              </div>
            )}
            {/* 러닝 타임 */}
            {show.runtime && (
              <div className="flex items-center gap-2">
                <span className="text-gray-400">러닝타임:</span>
                <span>{show.runtime}분</span>
              </div>
            )}
          </div>

          {/* 줄거리 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">줄거리</h2>
            <div
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: show.summary }}
            />
          </div>

          {/* 공식 사이트 */}
          {show.officialSite && (
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-4">공식 사이트</h2>
              <a
                href={show.officialSite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                {show.officialSite}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
